<?php

namespace App\Repository\Nasdaq;
interface ListingsInterface
{
    function getSymbol();
    function listings();

    function getName();
    function getNameBySymbol($symbol);

}
