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
// index
Route::get('/', function () {
    return Inertia::render('Index');
});

// key
Route::get('/generate-key', function () {
    return Inertia::render('key/GenerateKey');
});

// Rewards collection page (>> See all rewards)
Route::get('/rewards-collection', function () {
    return Inertia::render('RewardsCollection');
});

Route::post('/generate-key',  [KeyController::class, 'store']);
Route::get('/key-check', function () {
    return Inertia::render('key/KeyCheck');
})->name('keycheck');
Route::post('/key-check', [KeyController::class, 'validateKey']);

// adminRegister
// 'FORM 1' on Figma
Route::get('/admin-register', function () {
    return Inertia::render('adminRegister/AdminRegister');
})->name('adminregister');
Route::post('/admin-register', [AdminController::class, 'storeAdmin']);
// 'FORM 2' on Figma

Route::get('/company-register', function () {
    return Inertia::render('adminRegister/CompanyRegister');
})->name('companyregister');
Route::post('/company-register', [CompanyController::class, 'storeCompany']);

Route::get('/admin-dashboard', function () {
    return Inertia::render('companyDashboard/AdminDashboard');
})->name('companydashboard');

// Register
Route::get('/login', function () {
    return Inertia::render('userRegister/Login');
});
Route::get('/new-password', function () {
    return Inertia::render('NewPassword');
});
Route::get('/username', function () {
    return Inertia::render('Username');
});


Route::get('/register', function () {
    return Inertia::render('Register');
});

// This page is 'FORM 1' on Figma
Route::get('/admin-register', function () {
    return Inertia::render('AdminRegister');
})->middleware('guest');

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


Route::post('/create-team', [TeamController::class, 'store']);
Route::post('/create-user', [UserController::class, 'storeUser']);
Route::post('/create-company', [CompanyController::class, 'storeCompany']);
Route::post('/create-reward', [RewardController::class, 'store']);
Route::post('/create-log', [LogController::class, 'store']);
Route::post('/create-quest', [QuestController::class, 'storeQuest']);
Route::post('/create-admin', [AdminController::class, 'storeAdmin']);

Route::post('/login', [SessionController::class, 'store'])->middleware('guest');
