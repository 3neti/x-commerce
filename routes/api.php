<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use LBHurtado\XCommerce\Http\Controllers\CommercialEstimateController;

Route::prefix(trim((string) config('x-commerce.routes.api_prefix', 'api/x/v1'), '/'))
    ->middleware('throttle:30,1')
    ->post('quotes', CommercialEstimateController::class)
    ->name('x-commerce.api.quotes.estimate');
