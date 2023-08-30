<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use App\Models\Blogpost;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class BlogpostController extends Controller
{
    public function index() {

        $posts = DB::table('blogposts')->paginate(10);

        return Inertia::render('Post',['posts'=>$posts]);
    }

    public function show(Blogpost $blogpost) {
        return Inertia::render('Detailed/Post', ["blogpost" => $blogpost]);
    }
}
