<?php

namespace App\Providers;


use App\Repository\Nasdaq\Listings;
use App\Repository\Nasdaq\ListingsInterface;
use Illuminate\Support\ServiceProvider;


class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(ListingsInterface::class,Listings::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
