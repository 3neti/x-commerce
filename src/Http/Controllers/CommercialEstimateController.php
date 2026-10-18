<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use LBHurtado\XCommerce\Exceptions\CommercialWaterfallInvariantViolation;
use LBHurtado\XCommerce\Services\CommercialCatalogEstimateService;

final class CommercialEstimateController extends Controller
{
    public function __invoke(Request $request, CommercialCatalogEstimateService $estimates): JsonResponse
    {
        try {
            return response()->json($estimates->estimate($request->all())->toArray());
        } catch (CommercialWaterfallInvariantViolation $exception) {
            return response()->json(['message' => $exception->getMessage()], 422);
        }
    }
}
