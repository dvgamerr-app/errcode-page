FROM caddy:latest

ENV ERROR_CODE=503

WORKDIR /var/www/html

COPY ./page-errcode/Caddyfile /etc/caddy/Caddyfile
COPY ./page-errcode/index.html \
  ./page-errcode/favicon.ico \
  ./page-errcode/robots.txt \
  ./
COPY ./page-errcode/_app ./_app
