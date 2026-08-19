FROM --platform=$BUILDPLATFORM oven/bun:1.3.14 AS build

WORKDIR /app

COPY package.json bun.lock .npmrc ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

FROM caddy:latest

ENV ERROR_CODE=503

WORKDIR /var/www/html

COPY ./Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/build/index.html \
  /app/build/favicon.ico \
  /app/build/robots.txt \
  /app/build/llms.txt \
  ./
COPY --from=build /app/build/_app ./_app
