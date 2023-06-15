<?php

use Illuminate\Http\Request;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\KeyController;
use App\Http\Controllers\LogController;
use App\Http\Controllers\RewardController;
use App\Http\Controllers\QuestController;
use App\Http\Controllers\RouterController;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\TeamController;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Middleware\KeyMiddleware;
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
})->name('index')->middleware('guest');

//ROUTE FROM ADMIN KEYGEN TO ADMIN DASH
// Route::get('/generate-key', function () {
//     return Inertia::render('key/GenerateKey');
// })->name('generatekey');
// Route::post('/generate-key', [KeyController::class, 'store']);
Route::get('/admin-register', function () {
    return Inertia::render('adminRegister/AdminRegister');
})->name('adminregister');
Route::post('/admin-register', [AdminController::class, 'storeAdmin']);

Route::get('/key-check', function () {
    return Inertia::render('key/KeyCheck');
})->name('keycheck')->middleware('auth')->middleware('admin');
Route::post('/key-check', [KeyController::class, 'validateKey']);

Route::get('/company-register', function () {
    return Inertia::render('adminRegister/CompanyRegister');
})->name('companyregister')->middleware('auth')->middleware('admin')->middleware('key');
Route::post('/company-register', [CompanyController::class, 'storeCompany'])->middleware('auth')->middleware('admin')->middleware('key');

//GETS
// companyDashboard 1
Route::get('/company-dashboard', [RouterController::class, 'showComapnyDashboard'])->name('companydashboard')->middleware('auth')->middleware('admin')->middleware('key');
Route::post('/company-dashboard-user', [UserController::class, 'storeUser']);
Route::post('/company-dashboard-quest', [QuestController::class, 'storeQuest']);
Route::post('/company-dashboard-reward', [RewardController::class, 'store']);
Route::post('/company-dashboard-team', [TeamController::class, 'store']);

Route::get('/company-members', [TeamController::class, 'showMembers'])->middleware('auth')->middleware('admin');
Route::get('/all-logs', [RouterController::class, 'showLogs'])->middleware('auth')->middleware('key');

// userDashboard 1
Route::get('/user-dashboard', [UserController::class, 'showUserDashboard'])->name('userdashboard')->middleware('auth')->middleware('key');
// Rewards collection page (>> See all rewards)
Route::get('/rewards-collection', [RewardController::class, 'showAllRewards'])->middleware('auth');
Route::post('/claim-reward', [LogController::class, 'claimReward']);

Route::get('/all-quests', [QuestController::class, 'showAllQuests'])->middleware('auth');
Route::get('/wallet', [UserController::class, 'showWallet'])->name('wallet')->middleware('auth');



//LOGIN
Route::get('/login', function () {
    return Inertia::render('userRegister/Login');
})->name('userlogin')->middleware('guest');
Route::post('/login', [SessionController::class, 'store']);

Route::get('/newpassword', function () {
    return Inertia::render('userRegister/NewPassword');
})->name('newpassword')->middleware('auth');
Route::post('/newpassword', [UserController::class, 'updatePassword']);
Route::post('/defaultpassword', [UserController::class, 'defaultPassword']);

Route::get('/username', function () {
    return Inertia::render('userRegister/Username');
})->name('username')->middleware('auth');
Route::post('/username', [UserController::class, 'setUsername']);

Route::post('/logout', [SessionController::class, 'destroy'])->middleware('auth');
