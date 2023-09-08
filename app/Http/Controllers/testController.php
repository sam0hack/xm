<?php

namespace App\Http\Controllers;


use App\Repository\Nasdaq\ListingsInterface;
use Illuminate\Http\Request;

class testController extends Controller
{
    private ListingsInterface $listings;


    public function __construct(ListingsInterface $listings)
    {
        $this->listings = $listings;
    }

    public function index(){

        dd($this->listings->get_listings());


    }
}
