<?php

namespace LBHurtado\XCommerce;

use Illuminate\Support\ServiceProvider;

class XCommerceServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->mergeConfigFrom(
            __DIR__.'/../config/x-commerce.php',
            'x-commerce',
        );
    }

    public function boot(): void
    {
        $this->publishes([
            __DIR__.'/../config/x-commerce.php' => config_path('x-commerce.php'),
        ], 'x-commerce-config');
    }
}
