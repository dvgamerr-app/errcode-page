FROM caddy:latest

WORKDIR /var/www/html

COPY ./page-errcode/Caddyfile /etc/caddy/Caddyfile
COPY ./page-errcode/index.html \
  ./page-errcode/favicon.ico \
  ./page-errcode/robots.txt \
  .
