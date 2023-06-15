<?php

namespace App\Http\Controllers;

use App\Http\Requests\KeyRequest;
use App\Models\Key;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Mail\ConfirmationKey;
use Illuminate\Http\Request;

class KeyController extends Controller
{
    function store(Request $request)
    {
        $attributes = request()->validate([
            'email' => 'required|email'
        ]);

        $length = 20;
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $key = new Key;

        for ($i = 0; $i < $length; $i++) {
            $index = rand(0, strlen($characters) - 1);
            $key->key .= $characters[$index];
        }
        Mail::to($request->email)->send(new ConfirmationKey($key));
        $key->key = Hash::make($key->key);
        $key->save();
        return to_route('keycheck');
    }

    function validateKey(KeyRequest $request)
    {
        $inputKey = $request->name;
        $allKeys = Key::all();


        foreach ($allKeys as $key) {
            if (Hash::check($inputKey, $key->key)) {
                $user = Auth::user();
                $user->key_check = 1;
                $user->save();
                return to_route('companyregister');
            }
        }

        return to_route('keycheck')->withErrors(["no-match" => "There's no matching key found"]);
        //Inertia::render(); //TODO: return check key page with error
    }
}
