<?php

use App\Http\Controllers\CompanyController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\KeyController;
use App\Http\Controllers\LogController;
use App\Http\Controllers\RewardController;
use App\Http\Controllers\QuestController;
use App\Http\Controllers\SessionController;
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
//ROUTE TO INDEX
Route::get('/', function () {
    return Inertia::render('Index');
})->name('index');

//ROUTE FROM ADMIN KEYGEN TO ADMIN DASH
Route::get('/generate-key', function () {
    return Inertia::render('key/GenerateKey');
})->name('generatekey');
Route::post('/generate-key', [KeyController::class, 'store']);


Route::get('/key-check', function () {
    return Inertia::render('key/KeyCheck');
})->name('keycheck');
Route::post('/key-check', [KeyController::class, 'validateKey']);

Route::get('/admin-register', function () {
    return Inertia::render('adminRegister/AdminRegister');
})->name('adminregister');
Route::post('/admin-register', [AdminController::class, 'storeAdmin']);

Route::get('/company-register', function () {
    return Inertia::render('adminRegister/CompanyRegister');
})->name('companyregister');
Route::post('/company-register', [CompanyController::class, 'storeCompany']);

//GETS
Route::get('/company-dashboard', [RewardController::class, 'showTeam']);

Route::get('/user-dashboard', [RewardController::class,'showThreeRewards']);

// Rewards collection page (>> See all rewards)
Route::get('/rewards-collection', [RewardController::class, 'showAllRewards']);

Route::get('/wallet', function () {
    return Inertia::render('Wallet');
})->name('wallet');

Route::get('/login', function () {
    return Inertia::render('userRegister/Login');
})->name('userlogin');

Route::get('/newpassword', function () {
    return Inertia::render('userRegister/NewPassword');
})->name('newpassword');

Route::post('/login', [SessionController::class, 'store']);

Route::post('/logout', [SessionController::class, 'destroy']);
