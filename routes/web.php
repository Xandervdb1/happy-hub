<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Index');
});
Route::get('/register', function () {
    return Inertia::render('Register');
});
Route::get('/admin-dashboard', function () {
    return Inertia::render('AdminDashboard');
});
Route::get('/user-dashboard', function () {
    return Inertia::render('UserDashboard');
});
Route::get('/wallet', function () {
    return Inertia::render('Wallet');
});