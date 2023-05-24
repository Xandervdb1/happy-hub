<?php

namespace App\Http\Controllers;

use App\Http\Requests\KeyRequest;
use App\Models\Key;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;

class KeyController extends Controller
{
    function store()
    {
        $length = 20;
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $key = new Key;

        // for ($i = 0; $i < $length; $i++) {
        //     $index = rand(0, strlen($characters) - 1);
        //     $key->key .= $characters[$index];
        // }
        $key->key = Hash::make("azertyuiopmlkjhgfdsq");
        // $key->key = Hash::make($key->key);
        $key->save();
    }

    function validateKey(KeyRequest $request)
    {
        $inputKey = $request->key;
        $allKeys = Key::all();

        foreach ($allKeys as $index => $key) {
            if (Hash::check($inputKey, $key->key)) {
                $key->delete();
                //Inertia::render(); //TODO: return form 1
            } else {
                dd("none matched");
                //Inertia::render(); //TODO: return check key page with error
            }
        }
    }
}
