<?php

use App\Http\Controllers\CompanyController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\KeyController;
use App\Http\Controllers\RewardController;
use App\Http\Controllers\QuestController;
use App\Http\Controllers\TeamController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
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

// This page is 'FORM 1' on Figma
Route::get('/admin-register', function () {
    return Inertia::render('AdminRegister');
});

// This page is 'FORM 2' on Figma
Route::get('/company-register', function () {
    return Inertia::render('CompanyRegister');
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

Route::post('/generate-key',  [KeyController::class, 'store']);
Route::post('/create-team', [TeamController::class, 'store']);
Route::post('/check-key', [KeyController::class, 'validateKey']);
Route::post('/create-user', [UserController::class, 'storeUser']);
Route::post('/create-company', [CompanyController::class, 'storeCompany']);
Route::post('/create-reward', [RewardController::class, 'store']);
Route::post('/create-quest', [QuestController::class, 'storeQuest']);
