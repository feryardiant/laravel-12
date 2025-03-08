# Based on @fideloper's fly.io laravel template
# https://github.com/superfly/flyctl/blob/94fec0925c75cfe30921f1a4df25fa9cbf2877e9/scanner/templates/laravel/Dockerfile

FROM ghcr.io/iksaku/laravel-alpine:8.3

LABEL maintainer="Fery Wardiyanto"

RUN set -eux && apk --update add --no-cache --purge supervisor nodejs-current

COPY supervisord.conf /etc/supervisord.conf
COPY start-server.sh /usr/local/bin/start-server

RUN chown laravel /etc/supervisord.conf && chown laravel /run /var/log && \
    chmod g+r /etc/supervisord.conf && chmod +x /usr/local/bin/start-server

WORKDIR ${APP_DIRECTORY}

RUN corepack enable
