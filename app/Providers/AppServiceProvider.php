<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Sentry\Laravel\Integration;
use Sentry\State\Scope;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        if ($this->app->environment('local') && class_exists(\Laravel\Telescope\TelescopeServiceProvider::class)) {
            $this->app->register(\Laravel\Telescope\TelescopeServiceProvider::class);
            $this->app->register(TelescopeServiceProvider::class);
        }
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->configureSentry();
    }

    private function configureSentry()
    {
        /**
         * @link https://docs.sentry.io/platforms/php/guides/laravel/enriching-events/identify-user/
         */
        Integration::configureScope(static function (Scope $scope) {
            $userData = ['ip_address' => request()->getClientIp()];

            if (auth()->check()) {
                /** @var \App\Models\User */
                $user = auth()->user();

                $userData['id'] = $user->getKey();
                $userData['name'] = $user->name;
                $userData['email'] = $user->email;
            }

            $scope->setUser($userData);
        });
    }
}
