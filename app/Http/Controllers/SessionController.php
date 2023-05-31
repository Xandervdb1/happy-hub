<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\SessionRequest;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class SessionController extends Controller
{
    use ValidatesRequests;

    public function create()
    {
        return view('AdminRegister');
    }

    public function store(SessionRequest $request)
    {
        $attributes = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if (auth()->attempt($attributes)) {
            session()->regenerate();
            if (Auth::user()->is_admin) {
                return to_route('companydashboard');
            } else {
                if (Auth::user()->is_defaultPassword) {
                    return to_route('newpassword');
                } else {
                    return to_route('userdashboard');
                }
            }
        } else {
            throw ValidationException::withMessages([
                'email' => 'Your credentials could not be verified'
            ]);
        }
    }

    public function destroy()
    {
        Auth::logout();

        return redirect()->route('index');
    }
}
