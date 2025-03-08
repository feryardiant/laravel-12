# Based on @fideloper's fly.io laravel template
# https://github.com/superfly/flyctl/blob/94fec0925c75cfe30921f1a4df25fa9cbf2877e9/scanner/templates/laravel/Dockerfile

FROM ghcr.io/iksaku/laravel-alpine:8.3

LABEL maintainer="Fery Wardiyanto"

# Run the installed Laravel Scheduler in the background.
# You can replace the default entry by copying your own crontab
# file in container's /var/spool/cron/crontabs/root
RUN crond

# Copy our project files into the container
COPY . /var/www/html

# Install composer dependencies
RUN composer install --optimize-autoloader --no-dev

# Make sure our container has the correct permissions
# to tap into our project storage
RUN mkdir -p storage/logs \
    && chmod -R ug+w /var/www/html/storage \
    && chmod -R 755 /var/www/html
