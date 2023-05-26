<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Http\Requests\SessionRequest;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\RedirectResponse;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class SessionController extends Controller
{
    use ValidatesRequests;

    public function create()
    {
        return view('AdminRegister');
    }

    public function store()
    {
        request()->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);
    }
}
