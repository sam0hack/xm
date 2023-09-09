<?php

namespace App\Repository\RapidApi;


class RapidApiRepo
{

    function finance(string $source, $symbol, $start_date, $end_date, $region = ''): FinanceInterface
    {
        return match ($source) {
            'yhFinance' => new yhFinance($symbol, $start_date, $end_date, $region),
            default => throw new \Error('Please provide a valid API Source.')
        };

    }


}
