# Component update via Docker
Currently, the instalation of the ZUP servers is composed by two components (`zup-api` and `zup-web`) and two supporting softwares, `PostgreSQL` and `redis`, used as SGDB and memory cache, respectively.
These components are translated into 4 public images hosted in Docker Hub under the IDs `institutotim/zup-api`, `institutotim/zup-web`, `ntxcode/postgresql` and `redis`. The images of `postgresql` and `redis` have low refresh frequency, as they only occur in situations of security updates or when a new functionality is required for these components. The API and frontend (web) images are usually updated in conjunction.
This page details the required operations that must be performed to update these components. The commands assume that the nomenclature proposed in the installation document was accordingly followed.

## 1. API update
In order to update the component `zup-api`, one must execute the following commands as `root` in the servers hosting the service:

```bash
docker pull institutotim/zup-api:$(cat /opt/zup/config/version)
docker run -it \
    --link redis:redis --link postgres:postgres \
    --env-file=/opt/zup/config/api.env \
    institutotim/zup-api bundle exec rake db:migrate && supervisorctl restart zup-api
```

The last command execute the migration of the database and reinitialize the component. In the majority of cases, this command should produce none or just a few output lines.

## 2. Web frontend update
In order to update the component `zup-web`, one must execute the following commands as `root` in the servers hosting the service:

```bash
docker pull institutotim/zup-web:$(cat /opt/zup/config/version)
supervisorctl restart zup-web
```

## 3. PostgreSQL update
In order to update the database, one must execute the following commands as `root` in the servers hosting the service:

```bash
docker pull ntxcode/postgresql:9.4
supervisorctl restart postgres
```

## 4. Redis update
In order to update the cache service, one must execute the following commands as `root` in the servers hosting the service:

```bash
docker pull redis:2.8
supervisorctl restart redis
```
