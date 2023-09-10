<?php
use App\Models\User;


test('DashBoard page is displayed', function () {
    $user = User::factory()->create();

    $response = $this
        ->actingAs($user)
        ->get('/dashboard');
    $response->assertOk();
});
