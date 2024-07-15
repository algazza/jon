<?php

namespace App\Http\Controllers\Admin\Component;

use App\Models\Kredit;
use Illuminate\Http\Request;
use App\Charts\MonthlyUsersChart;
use App\Http\Controllers\Controller;

class KreditController extends Controller
{
    public function tampil(MonthlyUsersChart $chart){
        $kredit = Kredit::orderBy('created_at', 'DESC')->get();
        return view('admin.component.kredit_admin', compact('kredit'), ['chart' => $chart->build()]);
    }
}
