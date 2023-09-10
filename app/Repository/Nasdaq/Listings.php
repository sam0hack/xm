<?php

namespace App\Repository\Nasdaq;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redis;

class Listings implements ListingsInterface
{

    public string $company_name = '';
    public string $symbol = '';
    protected array $data;
    private string $url;

    public function __construct()
    {
        $this->url = 'https://pkgstore.datahub.io/core/nasdaq-listings/nasdaq-listed_json/data/a5bc7580d6176d60ac0b2142ca8d7df6/nasdaq-listed_json.json';

    }


    /**
     * @return $this
     */
    function listings(): static
    {
        // Try to get data from Redis first
        $data = Redis::get('nasdaq_listings');

        if (!$data) {
            $response = Http::get($this->url);
            $this->data = $response->json();

            // Store data to Redis with a 24 hour expiration
            Redis::set('nasdaq_listings', json_encode($this->data), 'EX', 86400);
        } else {
            $this->data = json_decode($data, true);
        }
        return $this;

    }

    /**
     * @return array
     */
    function getSymbol(): array
    {
        return $this->filterData('Symbol');
    }

    function getName(): array
    {
        return $this->filterData('Company Name');
    }

    function getNameBySymbol($symbol): array
    {
        return $this->filterData($symbol, 'Company Name');
    }

    protected function filterData($key, $get = ''): array
    {

        $data = [];
        for ($i = 0; $i < count($this->data); $i++) {
            if (!empty($get)) {
                if ($this->data[$i]['Symbol'] == $key) {
                    $data = [$this->data[$i]['Symbol'], $this->data[$i][$get]];
                }
            } else {
                $data[] = ['value' => $this->data[$i][$key], 'label' => $this->data[$i][$key]];
            }
        }

        return $data;
    }

}
