<?php

use App\Http\Controllers\BlogpostController;
use App\Http\Controllers\Guest\BlogpostController as GuestBlogpostController;
use App\Http\Controllers\PortfolioController;
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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/about-us',function(){
    return Inertia::render('About');
});


Route::get('/blogposts',[GuestBlogpostController::class,'index']);
Route::get('/blogpost/detail',[GuestBlogpostController::class,'show']);


Route::get('/portfolio',[PortfolioController::class,'index']);
Route::get('/portfolio/detail',[PortfolioController::class,'show']);



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::group(['prefix' => 'admin', 'middleware' => ['auth']], function () {
    Route::resource('/blogposts',BlogpostController::class);
});


require __DIR__.'/auth.php';
