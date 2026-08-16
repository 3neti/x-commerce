<?php

namespace LBHurtado\XCommerce\Tests\Architecture;

use LBHurtado\XCommerce\Contracts\CommercialWaterfallCalculatorContract;
use LBHurtado\XCommerce\Services\DeterministicCommercialWaterfallCalculator;
use LBHurtado\XCommerce\Tests\TestCase;
use LBHurtado\XCommerce\XCommerceServiceProvider;

class PackageBoundaryTest extends TestCase
{
    public function test_package_metadata_is_coherent(): void
    {
        $composer = json_decode(file_get_contents($this->packageRoot('composer.json')), true, flags: JSON_THROW_ON_ERROR);

        $this->assertSame('3neti/x-commerce', $composer['name']);
        $this->assertSame('library', $composer['type']);
        $this->assertSame('src/', $composer['autoload']['psr-4']['LBHurtado\\XCommerce\\']);
        $this->assertContains(
            XCommerceServiceProvider::class,
            $composer['extra']['laravel']['providers']
        );
    }

    public function test_service_provider_is_available(): void
    {
        $this->assertTrue(class_exists(XCommerceServiceProvider::class));
    }

    public function test_service_provider_registers_the_package_owned_catalog_config(): void
    {
        $source = file_get_contents($this->packageRoot('src/XCommerceServiceProvider.php'));

        $this->assertStringContainsString('mergeConfigFrom(', $source);
        $this->assertStringContainsString('config/x-commerce.php', $source);
        $this->assertStringContainsString('CommercialWaterfallCalculatorContract::class', $source);
        $this->assertStringContainsString('DeterministicCommercialWaterfallCalculator::class', $source);
        $this->assertFileExists($this->packageRoot('config/x-commerce.php'));
    }

    public function test_foundational_documentation_exists(): void
    {
        foreach ([
            'README.md',
            'docs/COMPASS.md',
            'docs/ARCHITECTURE.md',
            'docs/GRAMMAR.md',
            'docs/ASSUMPTIONS_REGISTER.md',
            'docs/COMMERCIAL_MODEL_REGISTER.md',
            'docs/decisions/0001-documentation-first-package.md',
            'docs/ecosystems/rbap-digital-banking-program/README.md',
        ] as $path) {
            $this->assertFileExists($this->packageRoot($path), $path);
        }
    }

    public function test_no_forbidden_x_change_dependency_has_been_introduced(): void
    {
        $composer = json_decode(file_get_contents($this->packageRoot('composer.json')), true, flags: JSON_THROW_ON_ERROR);
        $requires = array_merge($composer['require'] ?? [], $composer['require-dev'] ?? []);

        $this->assertArrayNotHasKey('3neti/x-change', $requires);
        $this->assertArrayNotHasKey('lbhurtado/x-change', $requires);
        $this->assertArrayNotHasKey('3neti/wallet', $requires);
        $this->assertArrayNotHasKey('bavix/laravel-wallet', $requires);
    }

    public function test_commercial_waterfall_calculator_is_a_pure_public_contract(): void
    {
        $calculator = new DeterministicCommercialWaterfallCalculator;
        $source = file_get_contents($this->packageRoot('src/Services/DeterministicCommercialWaterfallCalculator.php'));

        $this->assertInstanceOf(CommercialWaterfallCalculatorContract::class, $calculator);

        foreach ([
            'Illuminate\\',
            'Bavix\\',
            'LBHurtado\\Wallet\\',
            'LBHurtado\\XChange\\',
            'config(',
            'app(',
            'resolve(',
        ] as $forbiddenReference) {
            $this->assertStringNotContainsString($forbiddenReference, $source);
        }
    }

    public function test_component_economics_contract_is_pure_and_cannot_move_money(): void
    {
        $paths = array_merge(
            glob($this->packageRoot('src/Data/CommercialComponent*.php')) ?: [],
            glob($this->packageRoot('src/Enums/CommercialAllocation*.php')) ?: [],
        );
        $source = implode("\n", array_map('file_get_contents', $paths));

        foreach ([
            'Illuminate\\',
            'Bavix\\',
            'LBHurtado\\Wallet\\',
            'LBHurtado\\XChange\\',
            'config(',
            'DB::',
            'Http::',
            'env(',
        ] as $forbiddenReference) {
            $this->assertStringNotContainsString($forbiddenReference, $source);
        }
    }

    public function test_documentation_preserves_package_boundary(): void
    {
        $compass = file_get_contents($this->packageRoot('docs/COMPASS.md'));

        $this->assertStringContainsString('no production commercial logic has yet been extracted from x-change', $compass);
        $this->assertStringContainsString('An idea is not an assumption', $compass);
        $this->assertStringContainsString('deterministic Commercial Waterfall calculator', $compass);
    }
}
