# Based on @fideloper's fly.io laravel template
# https://github.com/superfly/flyctl/blob/94fec09/scanner/templates/laravel/Dockerfile

FROM ghcr.io/iksaku/laravel-alpine:8.3

LABEL maintainer="Fery Wardiyanto"

# Install additional php extensions
# https://github.com/mlocati/docker-php-extension-installer?tab=readme-ov-file
RUN install-php-extensions excimer gd opcache sockets zip && \
    rm /usr/local/etc/php/conf.d/php.ini

# Run the installed Laravel Scheduler in the background.
# You can replace the default entry by copying your own crontab
# file in container's /var/spool/cron/crontabs/root
RUN crond

# Copy our project files into the container
COPY .deploy/production/php/php.ini /usr/local/etc/php/php.ini
COPY . $APP_DIRECTORY

WORKDIR $APP_DIRECTORY

# Install composer dependencies
RUN composer install --optimize-autoloader --no-interaction --no-progress --no-dev

# Make sure our container has the correct permissions
RUN rm -rf .deploy/production && \
    find . -type f -exec chmod 644 {} + && find . -type d -exec chmod 755 {} + && \
    chmod -R 775 bootstrap/cache storage && chmod +x artisan
