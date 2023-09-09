<?php
use App\Models\User;




it('rejects an invalid email', function () {
    $user = User::factory()->create();
    $requestData = [
        'company_symbol' => 'AAPL',
        'email' => 'invalid-email',
        'start_date' => '2021-01-01',
        'end_date' => '2021-12-31',
    ];

    $this->actingAs($user)
        ->post('/get-historical-data', $requestData)
        ->assertStatus(302)
        ->assertSessionHasErrors('email');
});


it('rejects an invalid company symbol', function () {
    $user = User::factory()->create();
    $requestData = [
        'company_symbol' => '1234',
        'email' => 'test@example.com',
        'start_date' => '2021-01-01',
        'end_date' => '2021-12-31',
    ];

    $this->actingAs($user)
        ->post('/get-historical-data', $requestData)
        ->assertStatus(302)
        ->assertSessionHasErrors('company_symbol');
});

it('rejects end date before start date', function () {
    $user = User::factory()->create();
    $requestData = [
        'company_symbol' => 'AAPL',
        'email' => 'test@example.com',
        'start_date' => '2021-12-31',
        'end_date' => '2021-01-01',
    ];

    $this->actingAs($user)
        ->post('/get-historical-data', $requestData)
        ->assertStatus(302)
        ->assertSessionHasErrors('end_date');
});


it('rejects future dates', function () {
    $user = User::factory()->create();
    $futureDate = now()->addDay();
    $requestData = [
        'company_symbol' => 'AAPL',
        'email' => 'test@example.com',
        'start_date' => $futureDate->toDateString(),
        'end_date' => $futureDate->toDateString(),
    ];

    $this->actingAs($user)
        ->post('/get-historical-data', $requestData)
        ->assertStatus(302)
        ->assertSessionHasErrors(['start_date', 'end_date']);
});

it('accepts a valid request and retrieves historical data', function () {
    $user = User::factory()->create();
    $requestData = [
        'company_symbol' => 'AAPL',
        'email' => 'test@example.com',
        'start_date' => '2021-01-01',
        'end_date' => '2021-12-31',
    ];

    $this->actingAs($user)
        ->post('/get-historical-data', $requestData)
        ->assertStatus(200);  // Check for a 200 status code

});
