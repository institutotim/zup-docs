# Installation
The distribution of compiled applications for use is made through Docker.
[Docker](https://docs.docker.com/) is a technology for distributing and executing virtualized applications in operating-system-level. The most simple and effective way of maintaining an installation of ZUP is to use the images of the components we provide at Docker Hub. This document describes the steps required for installing and executing the basic components to run the API and the ZUP web applications in the operating system Ubuntu 14.04 64 bits. However, any other operating system that supports Docker should work with the procedure described below, with the exception that you will have to use your operating system's package manager instead of `apt`, and you may have to disable SELinux if it's enabled by default in the distribution you're using. On top of that, we use [Supervisord](supervisord.org) to manage the execution of application containers, having them initialize along with the system and reinitialize in case errors occur.

The need for hardware resources depends on the volume demanded by the project, however, the minimum recommended is 6GB of RAM and two dedicated processing cores.

## Prerequisites: Docker
Docker's installations system via Ubuntu requires the execution of a single installation script:

```bash
wget -qO- https://get.docker.com/ | sh
```

You will receive an error if your system doesn't have `wget` installed. In that case, just run:

```bash
sudo apt-get update
sudo apt-get install wget
wget -qO- https://get.docker.com/ | sh
```

After installation, in case you don't run the commands below as root, we recommend you add the user into the Docker group. That way you can run the commands without the need for sudo. We recommend you to read Docker's safety terms in both cases: [https://docs.docker.com/articles/security/](https://docs.docker.com/articles/security/).

```
sudo gpasswd -a ${USER} docker
```

## Prerequisites: Supervisord
Supervisord is distributed through PyPI and can be installed via `easy_install`.

```bash
sudo apt-get install python-setuptools
sudo easy_install supervisor
```

## Create directories to keep the system data
In order to persist information in Docker containers, it's necessary to create directories (**volume** in Docker terms) to keep the data in the host's file system (the system that hosts the Docker service). For purposes of this documentation, we will keep all of the data directories, configurations and logs under the folder `/opt/zup`. You can change the location of each folder with the hierarchy that better suits your organization.

```bash
sudo mkdir -p \
    /opt/zup/config \
    /opt/zup/postgres-data \
    /opt/zup/uploads \
    /opt/zup/shared_images \
    /opt/zup/logs/api \
    /opt/zup/logs/nginx
```

## Create configuration files
During initialization, the API reads a series of environment configuration variables. To pass these configurations via Docker, one must create a file containing a series of key-value pairs.
Refer to section [API configuration](api_configuration/#opcoes-disponiveis) for the available configurations.

The platform version is controlled by the file `/opt/zup/config/version` and must have a single line of code:

```
1.0.0
```

The following options are mantadory. For purposes of this documentation, the API configuration file is located at `/opt/zup/config/api.env`:

    WEB_URL=https://www.meuzup.com.br
    API_URL=http://api.meuzup.com.br:8282
    ASSET_HOST_URL=https://api.meuzup.com.br
    SMTP_ADDRESS=smtp.meuservidordeemail.com
    SMTP_PORT=587
    SMTP_USER=zup@meuservidordeemail.com
    SMTP_PASS=102030
    SMTP_TTLS=true
    SMTP_AUTH=plain
    MAIL_HEADER_IMAGE=/usr/src/app/public/shared_images/header.jpg
    REDIS_URL=redis://redis:6379
    DATABASE_URL=postgis://db_user:db_pass@postgres:5432/zup_db

Besides that, it is necessary to inform the configurations for database initialization. `/opt/zup/config/postgres.env`:

    POSTGRES_USER=db_user
    POSTGRES_PASSWORD=db_pass
    POSTGRES_DB=zup_db


	
Remind to alter `api.env` when changing `postgres.env`.

Finally, it's necessary to configure the informations of how to connect to the API and what positioning should be used in the map for web applications. `/opt/zup/config/web.env`:

    API_URL=http://api.meuzup.com.br:8282
    MAP_LAT=-23.689701
    MAP_LNG=-46.564874
    MAP_ZOOM=11
    DISABLE_LANDING_PAGE=true
    DISABLE_WEB_APP=true

With this initial configuration, only the Painel Administrativo panel will be available. To get to know all the configuration options, refer to section [Web application configurations](web_configuration.md).

## Download the application images

```bash
docker pull ntxcode/postgresql:9.4
docker pull institutotim/zup-api:$(cat /opt/zup/config/version)
docker pull institutotim/zup-web:$(cat /opt/zup/config/version)
docker pull redis:2.8
```

## Create the configuration file for Supervisord
Supervisord will be used to control the life cycle of the application. This configuration file must be saved at `/etc/supervisord.conf`.

```ini
[unix_http_server]
file=/tmp/supervisor.sock

[supervisord]
logfile=/tmp/supervisord.log
logfile_maxbytes=50MB
logfile_backups=10
loglevel=info
pidfile=/tmp/supervisord.pid
minfds=1024
minprocs=200

[supervisorctl]
serverurl=unix:///tmp/supervisor.sock

[rpcinterface:supervisor]
supervisor.rpcinterface_factory = supervisor.rpcinterface:make_main_rpcinterface

[program:redis]
autostart=true
autorestart=true
startsecs=15
command=/bin/bash -c "docker rm -f redis || true && docker run --rm --name=redis -a stdout -a stderr redis:2.8"
priority=0
redirect_stderr=true
stdout_logfile=/opt/zup/logs/redis.log

[program:postgres]
autostart=true
autorestart=true
startsecs=15
command=/bin/bash -c "docker rm -f postgres || true && docker run --rm -a stdout -a stderr \
                        --env-file=/opt/zup/config/postgres.env \
                        -v /opt/zup/postgres-data:/var/lib/postgresql/data \
                        -v /etc/localtime:/etc/localtime:ro \
                        --name postgres ntxcode/postgresql:9.4"
priority=1
redirect_stderr=true
stdout_logfile=/opt/zup/logs/postgres.log

[program:zup-web]
autostart=true
autorestart=true
startsecs=15
command=/bin/bash -c "docker rm -f zup-web || true && docker run --name zup-web --rm -a stdout -a stderr \
                        --env-file=/opt/zup/config/web.env \
                        -v /etc/localtime:/etc/localtime:ro \
                        -v /opt/zup/logs/nginx:/var/log/nginx \
                        -p 80:80 institutotim/zup-web:$(cat /opt/zup/config/version)"
priority=2
redirect_stderr=true
stdout_logfile=/opt/zup/logs/web.log

[program:zup-api]
autostart=true
autorestart=true
startsecs=15
command=/bin/bash -c "docker rm -f zup-api || true && docker run --rm --link postgres:postgres --link redis:redis \
                        --env-file=/opt/zup/config/api.env \
                        -v /etc/localtime:/etc/localtime:ro \
                        -v /opt/zup/uploads:/usr/src/app/public/uploads \
                        -v /opt/zup/logs/api:/usr/src/app/log \
                        -v /opt/zup/config:/usr/src/app/config/permissions \
                        -v /opt/zup/shared_images:/usr/src/app/public/shared_images \
                        -p 8282:80 --name zup-api institutotim/zup-api:$(cat /opt/zup/config/version)"
priority=3
redirect_stderr=true
stdout_logfile=/opt/zup/logs/api.log
```

## Configure Supervisord to automatically initialize at boot
In order for Supervisord to be able to automatically initialize the applications at system boot, it is necessary to create a configuration file to initialize it at boot. Add the following content to `/etc/init/supervisor.conf`:

```
description "supervisor"

start on runlevel [2345]
stop on runlevel [!2345]

respawn

exec /usr/local/bin/supervisord --nodaemon --configuration /etc/supervisord.conf
```

## Initialize database
To create the application structure in the database, just execute the following command:

```
docker run -it \
       --link redis:redis --link postgres:postgres \
       --env-file=/opt/zup/config/api.env \
       institutotim/zup-api bundle exec rake db:schema:load db:seed
```
     
The credentials of an administrator account will be shown in the command output.

## Initialize the supervisor

```service supervisor start```

## Initialize the application

```supervisorctl start all```

The web application will be available at port 80 by default. The API will be available at port 8282.

## (Optional) Import an existing database
In case you are updating an existing installation, it is possible to import a database dump from your application using the following command:

```
docker run -it -v /tmp/folder-containing-sql-file:/tmp --link postgres:postgres ntxcode/postgresql /bin/bash -c "psql --host postgres -U zup -f /tmp/file.sql zup"
```