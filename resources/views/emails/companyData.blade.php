<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>XM App</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet"/>


</head>
<body class="font-sans antialiased">


<div class="">
    <table class="" border="1px">
        <thead class="">
        <tr>
            <th scope="col">
                Company Symbol
            </th>
            <th scope="col">
                Company Name
            </th>
            <th scope="col">
                Start Date
            </th>
            <th scope="col">
                End Date
            </th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">
                {{$companySymbol}}
            </th>
            <td>
                {{$companyName[1]}}
            </td>
            <td>
                {{\Carbon\Carbon::make($startDate)->format('m-d-Y')}}

            </td>
            <td>
                {{\Carbon\Carbon::make($endDate)->format('m-d-Y')}}
            </td>
        </tr>


        </tbody>
    </table>
</div>


</body>
</html>
