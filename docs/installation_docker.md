# Instalação
A distribuição das aplicações em forma já compilada para uso é feita através do Docker.
[Docker](https://docs.docker.com/) é uma tecnologia para distribuição e execução de aplicações virtualizadas a nível de
sistema operacional. A maneira mais simples e eficaz de se manter uma instalação do ZUP é utilizando as imagens dos
componentes que disponibilizamos no Docker Hub. Este documento descreve as etapas para instalar e executar os
componentes básicos para rodar a API e as aplicações web do ZUP no sistema operacional Ubuntu 14.04 64 bits. Entretanto
qualquer sistema operacional que suporte Docker deve funcionar com os passos abaixo, salvo que você precisará utilizar o
gerenciador de pacotes do seu sistema operacional ao invés do `apt` e talvez tenha que desabilitar o SELinux, caso
venha habilitado por padrão na sua distribuição. Além disso, utilizamos o [Supervisord](supervisord.org) para gerenciar
a execução dos containers da aplicação, incluindo a inicialização dos containers junto com o sistema e a reinicialização
dos mesmos em caso de erros.

As necessidades de recursos de hardware depende da volumetria esperada pelo projeto, entretanto no mínimo recomendamos
6GB de RAM e dois núcleos de processamento dedicados.

## Pré-requisito: Docker
O sistema de instalação do Docker via Ubuntu requer a execução de um único script de instalação:

```bash
wget -qO- https://get.docker.com/ | sh
```

Você receberá um erro caso seu sistema não possua o `wget` instalado. Neste caso basta executar:

```bash
sudo apt-get update
sudo apt-get install wget
wget -qO- https://get.docker.com/ | sh
```

Após a instalação, caso você não rode os comandos abaixo como root, recomendamos que adicione o usuário no grupo do
Docker para rodar os comandos sem necessidade do sudo. Recomendamos que você leia as condireções de segurança do Docker
em ambos os casos: [https://docs.docker.com/articles/security/](https://docs.docker.com/articles/security/).

```
sudo gpasswd -a ${USER} docker
```

## Pré-requisito: Supervisord
O supervisord é distribuido através do PyPI e pode ser instalado através do `easy_install`.

```bash
sudo apt-get install python-setuptools
sudo easy_install supervisor
```

## Crie os diretórios para manter os dados do sistema
Para persistir informações em containers Docker é necessário criar diretórios (**volume** no jargão Docker) para manter
os dados no sistema de arquivos do host (o sistema que hospeda o serviço do Docker). Para fins desta documentação
manteremos todos os diretórios de dados, configurações e logs na pasta `/opt/zup`. Você pode alterar a localização de
cada pasta para a hierarquia mais apropriada a sua organização.

```bash
sudo mkdir -p \
    /opt/zup/config \
    /opt/zup/postgres-data \
    /opt/zup/uploads \
    /opt/zup/shared_images \
    /opt/zup/logs/api \
    /opt/zup/logs/nginx
```

## Crie os arquivos de configuração
Durante a inicialização a API lê uma série de variáveis de configuração do ambiente. Para passar essas configurações via
Docker basta criar um arquivo contendo uma série de chave-valores.
Veja a seção [Configuração da API](api_configuration/#opcoes-disponiveis) para conhecer as configurações disponíveis.

A versão da plataforma é controlada pelo arquivo `/opt/zup/config/version` e deve possuir apenas uma linha de código:

```
v1.1.11
```

As seguintes opções são obrigatórias. Para fins deste documento o arquivo de configuração da API estará localizado
em `/opt/zup/config/api.env`:

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
    SIDEKIQ_USER=admin
    SIDEKIQ_PASSWORD=123456

Além disso é necessário informar as configurações para inicialização do banco de dados. `/opt/zup/config/postgres.env`:

    POSTGRES_USER=db_user
    POSTGRES_PASSWORD=db_pass
    POSTGRES_DB=zup_db

Lembre-se de alterar o `api.env` quando alterar o `postgres.env`.

Finalmente, é preciso configurar informações sobre como conectar na API e qual posicionamento deve ser usado no mapa
para as aplicações web. `/opt/zup/config/web.env`:

    API_URL=http://api.meuzup.com.br:8282
    MAP_LAT=-23.689701
    MAP_LNG=-46.564874
    MAP_ZOOM=11
    DISABLE_LANDING_PAGE=true
    DISABLE_WEB_APP=true
    PAGE_TITLE=Sistema ZUP

Com esta configuração inicial, apenas o Painel Administrativo estará disponível. Para conhecer todas as opções de
configuração, visite a seção [Configuração dos aplicativos Web](web_configuration.md).

## Baixe as imagens da aplicação

```bash
docker pull ntxcode/postgresql:9.4
docker pull institutotim/zup-api:$(cat /opt/zup/config/version)
docker pull institutotim/zup-web:$(cat /opt/zup/config/version)
docker pull redis:2.8
```

## Crie o arquivo de configuração do Supervisord
O Supervisord será usado para controlar o ciclo de vida da aplicação. Este arquivo de configuração deve ser salvo
em `/etc/supervisord.conf`.

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

## Configure o Supervisord para iniciar automaticamente no boot
Para que o supervisord possa iniciar automaticamente as aplicações ao se iniciar o sistema, é necessário criar um
arquivo de configuração para inicializá-lo durante o boot. Adicione o seguinte conteúdo em `/etc/init/supervisor.conf`:

```
description "supervisor"

start on runlevel [2345]
stop on runlevel [!2345]

respawn

exec /usr/local/bin/supervisord --nodaemon --configuration /etc/supervisord.conf
```

## Inicialize o banco de dados
Para criar a estrutura da aplicação no banco de dados, basta executar os comandos a baixo:

```service supervisorctl start redis postgres```

```
docker run -it \
       --link redis:redis --link postgres:postgres \
       --env-file=/opt/zup/config/api.env \
       institutotim/zup-api:$(cat /opt/zup/config/version) bundle exec rake db:schema:load db:seed
```

As credenciais de uma conta de administrador será exibida na saída do comando.

## Inicie o supervisor

```service supervisor start```

## Inicie a aplicação

```supervisorctl start all```

Por padrão a aplicação web estará disponível na porta 80 e a API na porta 8282.

## (Opcional) Importe um banco de dados já existente
Caso você esteja atualizando uma instalação já existente, é possível importar um dump do banco de dados da sua aplicação
com seguinte comando:

```
docker run -it -v /tmp/folder-containing-sql-file:/tmp --link postgres:postgres ntxcode/postgresql /bin/bash -c "psql --host postgres -U zup -f /tmp/file.sql zup"
```
