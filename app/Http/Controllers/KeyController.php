<?php

namespace App\Http\Controllers;

use App\Models\Key;
use Illuminate\Http\Request;

class KeyController extends Controller
{
    function generateKey () {
        $length = 20;
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $key = new Key;

        for ($i = 0; $i < $length; $i ++) {
            $index = rand(0, strlen($characters) - 1);
            $key->key .= $characters[$index];
        }

        $key->save();
    }

    function validateKey (Request $request) {
        $inputKey = $request->key;
        $doesExist = Key::where('key', $inputKey)->count();
        if ($doesExist == 0) {
            dd("doesn't exist");
        } else {
            dd("exists");
        }
    }
}
