# API Configuration

This document presents instructions for changing the ZUP API configuration. An exhaustive list of all the configurable parameters can be found here.

## Only for the first configuration: copy the example file

Inside the file tree in the repository, it is possible to find a file named `sample.env`. This file lists all of the configurable parameters in the application and serve as a starting point to configure the system. Before you start the API, it is necessary to make a copy of this file to the actual destination `.env.production`.

    cd /opt/zup-api
    cp sample.env .env.production
    
The configurations found in this file are read by the API during the application initialization process. For this reason, every time a modification is made, it is necessary to reset ZUP processes:
 
    sudo supervisorctl restart all
    
## Available options

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