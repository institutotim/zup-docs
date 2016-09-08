FROM python:3.4-wheezy

EXPOSE 80

RUN pip install mkdocs && apt-get update && apt-get install -y nginx
RUN mkdir -p /usr/share/nginx/html && chown -R www-data:www-data /usr/share/nginx/html
WORKDIR /tmp
ADD . /tmp
ADD docs/images /usr/share/nginx/html/images
RUN chmod +x /tmp/build.sh
RUN /tmp/build.sh
COPY nginx.conf /etc/nginx/sites-enabled/default

CMD ["nginx", "-g", "daemon off;"]