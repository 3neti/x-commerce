<?php

namespace LBHurtado\XCommerce;

use Illuminate\Support\ServiceProvider;
use LBHurtado\XCommerce\Contracts\CommercialComponentAllocationCalculatorContract;
use LBHurtado\XCommerce\Contracts\CommercialTaxAllocationCalculatorContract;
use LBHurtado\XCommerce\Contracts\CommercialWaterfallCalculatorContract;
use LBHurtado\XCommerce\Services\DeterministicCommercialComponentAllocationCalculator;
use LBHurtado\XCommerce\Services\DeterministicCommercialTaxAllocationCalculator;
use LBHurtado\XCommerce\Services\DeterministicCommercialWaterfallCalculator;

class XCommerceServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->singleton(
            CommercialComponentAllocationCalculatorContract::class,
            DeterministicCommercialComponentAllocationCalculator::class,
        );

        $this->app->singleton(
            CommercialTaxAllocationCalculatorContract::class,
            DeterministicCommercialTaxAllocationCalculator::class,
        );

        $this->app->singleton(
            CommercialWaterfallCalculatorContract::class,
            DeterministicCommercialWaterfallCalculator::class,
        );

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
