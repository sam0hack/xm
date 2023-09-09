<?php

namespace App\Http\Controllers;

use App\Repository\Nasdaq\ListingsInterface;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    private ListingsInterface $listings;

    public function __construct(ListingsInterface $listings)
    {
        $this->listings = $listings;
    }

    public function index(): \Inertia\Response
    {
        return Inertia::render('Dashboard',[
            'listings'=> json_encode($this->listings->listings()->getSymbol())
        ]);
    }

    public function getHistoricalData(Request $request){

        //$start_date = Carbon::createFromDate($request->input('start_date'))->format('Y-m-d');

        //dd($request->all());


        $today = now();

        $validated = $request->validate([
            'company_symbol' => 'required|min:2|max:4|alpha:ascii',
            'email' => 'required|email',
            'start_date' => "required|date|before_or_equal:$today|before_or_equal:end_date",
            'end_date' => "required|date|before_or_equal:$today|after_or_equal:start_date",
        ]);

        return response(['done']);

    }
}
