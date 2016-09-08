# Atualização dos componentes via Docker
Atualmente o instalação do ZUP nos servidores é composta de dois componentes (`zup-api` e `zup-web`) e dois softwares
auxiliar, `PostgreSQL` e `redis`, usados como SGDB e cache em memória respectivamente.
Estes componentes se traduzem em 4 imagens públicas hospedadas no Docker Hub sob os IDs `institutotim/zup-api`,
`institutotim/zup-web`, `ntxcode/postgresql` e `redis`. As imagens do `postgresql` e do `redis` possuem baixa frequencia
de atualização, visto que elas só ocorrem em caso de atualizações de segurança ou quando uma nova funcionalidade é
requerida destes componentes. Já as imagens da API e dos frontends (web) normalmente são atualizadas em conjunto.
Esta página detalha as operações necessárias para realizar as atualizações destes componentes. Estes comandos assumem
que a nomeclatura foi seguida ao documento de instalação.

## 1. Atualização da API
Para atualizar o componente `zup-api` basta executar os seguintes comandos como `root` nos servidores hospedando o serviço:

```bash
docker pull institutotim/zup-api:$(cat /opt/zup/config/version)
docker run -it \
    --link redis:redis --link postgres:postgres \
    --env-file=/opt/zup/config/api.env \
    institutotim/zup-api:$(cat /opt/zup/config/version) bundle exec rake db:migrate && supervisorctl restart zup-api
```

O último comando executa as migrações de banco de dados e reinicia o componente. Na maioria dos casos este comando deve
produzir produzir nenhuma ou poucas linhas de saída.

## 2. Atualização dos frontends Web
Para atualizar o componente `zup-web` basta executar os seguintes comandos como `root` nos servidores hospedando o serviço:

```bash
docker pull institutotim/zup-web:$(cat /opt/zup/config/version)
supervisorctl restart zup-web
```

## 3. Atualização do PostgreSQL
Para atualizar o banco de dados basta executar os seguintes comandos como `root` nos servidores hospedando o serviço:

```bash
docker pull ntxcode/postgresql:9.4
supervisorctl restart postgres
```

## 4. Atualização do Redis
Para atualizar o serviço de cache basta executar os seguintes comandos como `root` nos servidores hospedando o serviço:

```bash
docker pull redis:2.8
supervisorctl restart redis
```
