<?php

namespace App\Repository\RapidApi;


class RapidApiRepo
{

    function finance(string $source,$symbol,$region=''): FinanceInterface
    {
        return match ($source) {
            'yhFinance' => new yhFinance($symbol,$region),
            default => throw new \Error('Please provide a valid API Source.')
        };

    }


}
