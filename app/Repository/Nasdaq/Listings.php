<?php

namespace App\Repository\Nasdaq;
use AllowDynamicProperties;
use Illuminate\Support\Facades\Http;

#[AllowDynamicProperties] class Listings implements ListingsInterface
{

    public string $company_name = '';
    public string $symbol = '';

    public function __construct()
    {
        $this->url = 'https://pkgstore.datahub.io/core/nasdaq-listings/nasdaq-listed_json/data/a5bc7580d6176d60ac0b2142ca8d7df6/nasdaq-listed_json.json';
    }


    /**
     * @return array|mixed
     */
    function get_listings(): mixed
    {
        $data = Http::get($this->url);
        return $data->json();
    }


}
