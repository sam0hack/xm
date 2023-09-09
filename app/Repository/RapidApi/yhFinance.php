<?php

namespace App\Repository\RapidApi;

use Carbon\Carbon;
use Illuminate\Support\Facades\Http;

class yhFinance implements \App\Repository\RapidApi\FinanceInterface
{
    protected string $host = 'yh-finance.p.rapidapi.com';
    protected string $url = 'https://yh-finance.p.rapidapi.com/stock/v3/get-historical-data?';
    protected string $region;
    protected string $symbol;
    private string $start_date;
    private string $end_date;

    public function __construct(string $symbol, string $start_date, string $end_date, string $region = 'US')
    {
        $this->region = $region;
        $this->symbol = $symbol;
        $this->start_date = $start_date;
        $this->end_date = $end_date;
    }

    /**
     * @return array
     */
    function get_historical_data(): array
    {
        $data = Http::withHeaders(['X-RapidAPI-Key' => env('X_RAPID_API_KEY'), 'X-RapidAPI-Host' => $this->host])->get($this->url . 'symbol=' . $this->symbol . '&region=' . $this->region);
        return $this->filterWithDateRange($data->json());

    }

    protected function filterWithDateRange($data): array
    {
        $data = ($data['prices']);

        $filtered_data = [];

        $startTimestamp = strtotime($this->start_date);
        $endTimestamp = strtotime($this->end_date);


        for ($i = 0; $i < count($data); $i++) {

            if ($data[$i]['date'] >= $startTimestamp && $data[$i]['date'] <= $endTimestamp) {
                //Timestamp to date
                $data[$i]['date'] = $date = date("Y-m-d", $data[$i]['date']);
                $filtered_data[] = $data[$i];
            }

        }

        return $filtered_data;

    }


}
