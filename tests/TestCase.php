<?php

namespace LBHurtado\XCommerce\Tests;

use PHPUnit\Framework\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    protected function packageRoot(string $path = ''): string
    {
        $root = dirname(__DIR__);

        return $path === '' ? $root : $root . DIRECTORY_SEPARATOR . ltrim($path, DIRECTORY_SEPARATOR);
    }
}

