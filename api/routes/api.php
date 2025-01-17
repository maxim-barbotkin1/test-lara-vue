<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('login','Api\LoginController@login');

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::resource('team', 'Api\TeamController')->except('create', 'edit', 'destroy');
    Route::resource('player', 'Api\PlayerController')->except('create', 'edit', 'destroy');
});
