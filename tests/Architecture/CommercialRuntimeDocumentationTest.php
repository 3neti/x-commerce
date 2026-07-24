<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Tests\Architecture;

use LBHurtado\XCommerce\Tests\TestCase;

final class CommercialRuntimeDocumentationTest extends TestCase
{
    public function test_runtime_boundary_documents_calculation_posting_and_remaining_gates(): void
    {
        $status = file_get_contents($this->packageRoot('docs/IMPLEMENTATION_STATUS.md'));
        $waterfall = file_get_contents(
            $this->packageRoot('docs/foundations/commercial-waterfall.md'),
        );

        $this->assertIsString($status);
        $this->assertStringContainsString(
            'x-change persists the immutable accepted-sale snapshot',
            $status,
        );
        $this->assertStringContainsString(
            'payable-discharge and partner-payment workflows',
            $status,
        );
        $this->assertIsString($waterfall);
        $this->assertStringContainsString(
            '3neti/wallet Treasury Position operations',
            $waterfall,
        );
        $this->assertStringContainsString(
            'provider-cost allocation creates a classified payable Position',
            $waterfall,
        );
    }
}
