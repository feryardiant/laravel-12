#!/usr/bin/env sh

php artisan optimize
php artisan migrate --force
