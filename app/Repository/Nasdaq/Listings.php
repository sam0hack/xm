<?php

namespace App\Repository\Nasdaq;

use Illuminate\Support\Facades\Http;

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
        $data = Http::get($this->url);
        $this->data = $data->json();
        return $this;
    }

    /**
     * @return array
     */
    function getSymbol(): array
    {
        $listing_json = [];
        for ($i = 0; $i < count($this->data); $i++) {
            $listing_json[] = ['value' => $this->data[$i]['Symbol'], 'label' => $this->data[$i]['Symbol']];
        }

        return $listing_json;
    }


}
