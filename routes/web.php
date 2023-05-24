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

// for admin: generate key & check key
Route::get('/generate-key', function () {
    return Inertia::render('GenerateKey');
});
Route::post('/key-check', function () {
    return Inertia::render('KeyCheck');
});

// login
Route::get('/login', function () {
    return Inertia::render('Login');
});

Route::get('/register', function () {
    return Inertia::render('Register');
});

// This page is 'FORM 1' on our Figma
Route::get('/admin-register', function () {
    return Inertia::render('AdminRegister');
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
