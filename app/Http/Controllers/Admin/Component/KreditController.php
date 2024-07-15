<?php

namespace App\Http\Controllers\Admin\Component;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Kredit;

class KreditController extends Controller
{
    public function tampil(){
        $kredit = Kredit::orderBy('created_at', 'DESC')->get();
        return view('admin.component.kredit_admin', compact('kredit'));
    }
}
