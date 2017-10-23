---
title: Configuração da API
permalink: /docs/api_configuration/
---

Este documento apresenta instruções para realizar mudanças na configuração da API do ZUP. Uma lista exaustiva de todos os parâmetros configuráveis pode ser encontrada aqui.

## Apenas na primeira configuração: copie o arquivo de exemplo

Dentro da árvore de arquivos no [repositório](https://github.com/institutotim/zup-api) é possível encontrar um arquivo chamado `sample.env`. Este arquivo lista todos os parâmetros configuráveis na aplicação e serve como ponto de partida para configurar o sistema. Antes que você inicie a API é necessário realizar uma cópia deste arquivo para o destino efetivo `.env.production`.

    cd /opt/zup-api
    cp sample.env .env.production

As configurações encontradas neste arquivo são lidas pela API durante o processo de inicialização da aplicação, por esta razão toda vez que uma alteração for realizada é necessário reiniciar os processos do ZUP:

    sudo supervisorctl restart all

## Opções disponíveis

### Email

    SENDGRID_USER=
    SENDGRID_PASS=

### AWS

    AWS_ACCESS_KEY_ID=
    AWS_SECRET_ACCESS_KEY=
    AWS_DEFAULT_IMAGE_BUCKET=

### Twitter

    TWITTER_CONSUMER_KEY=
    TWITTER_CONSUMER_SECRET=

### Facebook

    FACEBOOK_APP_ID=
    FACEBOOK_APP_SECRET=

### Google

    GOOGLE_CLIENT_ID=
    GOOGLE_CLIENT_SECRET=

### Push notification

    APNS_PEM_PATH=
    APNS_PEM_PASS=

### Redis configuration

    REDIS_URL=

### API domain

    API_DOMAIN=

### Web Application domain

    WEB_DOMAIN=

### Rails

    ASSET_HOST_URL=

### New relic

    NEW_RELIC_LICENSE_KEY=
    NEW_RELIC_APP_NAME=
    NEW_RELIC_MONITOR_MODE=
    NEW_RELIC_DEVELOPER_MODE=
    NEW_RELIC_LOG_LEVEL=
