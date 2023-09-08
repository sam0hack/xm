<?php

namespace App\Repository\RapidApi;

use Illuminate\Support\Facades\Http;

class yhFinance implements \App\Repository\RapidApi\FinanceInterface
{
    protected string $host = 'yh-finance.p.rapidapi.com';
    protected string $url = 'https://yh-finance.p.rapidapi.com/stock/v3/get-historical-data?';
    protected string $region;
    protected string $symbol;

    public function __construct(string $symbol, string $region = 'US')
    {
        $this->region = $region;
        $this->symbol = $symbol;
    }

    /**
     * @return array|mixed
     */
    function get_historical_data(): mixed
    {
        $data = Http::withHeaders(['X-RapidAPI-Key' => env('X_RAPID_API_KEY'), 'X-RapidAPI-Host' => $this->host])->get($this->url . 'symbol=' . $this->symbol . '&region=' . $this->region);
        return $data->json();
    }
}
