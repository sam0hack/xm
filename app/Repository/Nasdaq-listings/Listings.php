<?php

use Illuminate\Support\Facades\Http;

#[AllowDynamicProperties] class Listings
{

    public string $company_name = '';
    public string $symbol = '';

    public function __construct()
    {
        $this->url = 'https://pkgstore.datahub.io/core/nasdaq-listings/nasdaq-listed_json/data/a5bc7580d6176d60ac0b2142ca8d7df6/nasdaq-listed_json.json';
    }


    function get_listings()
    {
        $json = Http::get($this->url);
        dd($json);
    }

    function get_company_symbol()
    {

    }

}
