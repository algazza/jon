<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function(){
    return Inertia::render('Home');
});







































// Dashboard
Route::get('/Dashboard', [DashboardController::class,'tampil'])->name('dashboard.tampil');
require __DIR__.'/auth.php';