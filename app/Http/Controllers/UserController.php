<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use Illuminate\Foundation\Validation\ValidatesRequests;

class UserController extends Controller
{
    use ValidatesRequests;

    public function store(UserRequest $request)
    {
        $user = new User;
        $user->name = $request->input('name');
        $user->lastname = $request->input('lastname');
        $user->username = $request->input('username');
        $user->email = $request->input('email');
        $user->password = $request->input('password');
        $user->birthday = $request->input('birthday');
        $user->function = $request->input('function');
        $user->department = $request->input('department');

        $user->save();
    }
}
