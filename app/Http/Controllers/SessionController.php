<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Http\Requests\SessionRequest;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class SessionController extends Controller
{
    use ValidatesRequests;

    public function login(SessionRequest $request): RedirectResponse
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            // Authentication successful
            $request->session()->regenerate();

            if (Auth::user()->is_admin) {
                return redirect()->intended('/admin-dahboard');
            } else {
                return redirect()->intended('/user-dashboard');
            }
        } else {
            // Authentication failed
            return redirect()->back()->withErrors([
                'login' => 'Invalid credentials',
            ]);
        }
    }
}
