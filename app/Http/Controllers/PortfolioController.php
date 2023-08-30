<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    public function index() {

        $projects = DB::table('projects')->paginate(10);

        return Inertia::render('Portfolio',['projects'=>$projects]);
    }

    public function show() {
        return Inertia::render('Detailed/Project');
    }
}
