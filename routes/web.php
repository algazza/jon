<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\BannerController;


Route::get('/', function(){
    return Inertia::render('Home');
});







































// Dashboard
Route::get('/Dashboard', [DashboardController::class,'tampil'])->name('dashboard.tampil');


Route::get("/Banner", [BannerController::class, 'tampil'])->name('banner.tampil');

// Banner

require __DIR__.'/auth.php';