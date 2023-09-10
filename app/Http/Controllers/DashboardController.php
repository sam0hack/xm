<?php

namespace App\Http\Controllers;

use App\Mail\CompanyData;
use App\Repository\Nasdaq\ListingsInterface;
use App\Repository\RapidApi\RapidApiRepo;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class DashboardController extends Controller
{
    private ListingsInterface $listings;
    private RapidApiRepo $rapidApi;

    public function __construct(ListingsInterface $listings, RapidApiRepo $rapidApiRepo)
    {
        $this->listings = $listings->listings();
        $this->rapidApi = $rapidApiRepo;
    }

    public function index(): \Inertia\Response
    {
        return Inertia::render('Dashboard',[
            'listings'=> json_encode($this->listings->getSymbol())
        ]);
    }

    public function getHistoricalData(Request $request)
    {

        $today = now();

        $validated = $request->validate([
            'company_symbol' => 'required|min:2|max:4|alpha:ascii',
            'email' => 'required|email',
            'start_date' => "required|date|before_or_equal:$today|before_or_equal:end_date",
            'end_date' => "required|date|before_or_equal:$today|after_or_equal:start_date",
        ]);

        $historical_data = $this->rapidApi->finance('yhFinance',$request->input('company_symbol'),$request->input('start_date'),$request->input('end_date'))->get_historical_data();

        $company_name = $this->listings->getNameBySymbol($request->input('company_symbol'));


        Mail::to($request->input('email'))->queue(new CompanyData($company_name,$request->input('company_symbol'),$request->input('start_date'),$request->input('end_date')));

        return response($historical_data);
//        return Inertia::render('Dashboard',[
//            'historical_data'=> json_encode($historical_data),
//            'listings'=> json_encode($this->listings->listings()->getSymbol())
//        ]);

    }
}
