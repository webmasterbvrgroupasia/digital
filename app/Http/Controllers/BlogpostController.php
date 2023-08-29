<?php

namespace App\Http\Controllers;

use App\Models\Blogpost;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogpostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blogpost = Blogpost::paginate(5);
        return Inertia::render('Auth/Blogpost', ['blogposts' => $blogpost]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Auth/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validateData = $request->validate([
            'content' => ['required', 'max:255'],

            'meta_description' => ['required', 'max:255'],

            'meta_keywords' => ['required', 'max:255'],

            'tags' => ['required', 'max:100'],

            'image' => ['required', 'image', 'max:4096']
        ]);

        $image_name = time(). '.' . $request->file('image')->extension();

        $request->file('image')->move(public_path('blogpost'), $image_name);

        $validateData['image'] = $image_name;

        Blogpost::create($validateData);

        return redirect()->route('blogposts.index')->with(["success" => true, "message" => "success menambah data"]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Blogpost $blogpost)
    {
        return Inertia::render('Auth/Edit', ['blogposts' => $blogpost]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Blogpost $blogpost)
    {
        $validateData = $request->validate([
            'content' => ['required', 'max:255'],

            'meta_description' => ['required', 'max:255'],

            'meta_keywords' => ['required', 'max:255'],

            'tags' => ['required', 'max:100']

        ]);

        if ($request->hasFile('image')) {

            $file_path = public_path("blogpost/$blogpost->image");

            if (file_exists($file_path)) {

                unlink($file_path);
            }


            $image_name = time(). '.' . $request->file('image')->extension();

            $request->file('image')->move(public_path('blogpost'), $image_name);

            $validateData['image'] = $image_name;
        }

        $blogpost->update($validateData);

        return redirect()->route('blogposts.index')->with(["success" => true, "message" => "success mengubah data"]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Blogpost $blogpost)
    {
        $file_path = public_path("blogpost/$blogpost->image");

        if (file_exists($file_path)) {

            unlink($file_path);

        }

        $blogpost->delete();

        return redirect()->route('blogposts.index')->with(["success" => true, "message" => "success mengahapus data"]);
    }
}
