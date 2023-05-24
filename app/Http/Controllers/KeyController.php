<?php

namespace App\Http\Controllers;

use App\Models\Key;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KeyController extends Controller
{
    function store()
    {
        $length = 20;
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $key = new Key;

        for ($i = 0; $i < $length; $i++) {
            $index = rand(0, strlen($characters) - 1);
            $key->key .= $characters[$index];
        }

        $key->save();
    }

    function validateKey(Request $request)
    {
        $inputKey = $request->key;
        $doesExist = Key::where('key', $inputKey)->count();
        if ($doesExist == 0) {
            Inertia::render(); //TODO: return generate key page with error
        } else {
            Inertia::render(); //TODO: return form 1
        }
    }
}
