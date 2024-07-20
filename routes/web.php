<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\Component\BannerController;
use App\Http\Controllers\Admin\Component\KreditController;

Route::get('/', function(){
    return Inertia::render('Home');
});


Route::get('/Kredit', function(){
    return Inertia::render('KreditPage');
});





































// Dashboard
Route::get('/Dashboard', [DashboardController::class,'tampil'])->name('dashboard.tampil');
Route::get("/Baner", [BannerController::class, 'tampil'])->name('banner.tampil');

// Kredit
Route::get('/Kredit/Admin', [KreditController::class, 'tampil']);
Route::get('/Kredit/Id', [KreditController::class, 'isi']);
Route::post('/Kredit/Submit', [KreditController::class, 'submit'])->name('kredit.submit');
// Banner

require __DIR__.'/auth.php';