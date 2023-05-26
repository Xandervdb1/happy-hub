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
        $key->key = "azertyuiopmlkjhgfdsq";
        $key->key = Hash::make($key->key);
        //TODO: change default key that gets made back to random generate
        $key->save();
        return to_route('keycheck');
    }

    function validateKey(KeyRequest $request)
    {
        $inputKey = $request->name;
        $allKeys = Key::all();

        foreach ($allKeys as $index => $key) {
            if (Hash::check($inputKey, $key->key)) {
                $key->delete();
                return to_route('adminregister');
            } else {
                return to_route('keycheck');
                //Inertia::render(); //TODO: return check key page with error
            }
        }
    }
}
