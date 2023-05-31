<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    use ValidatesRequests;

    public function storeUser(UserRequest $request)
    {
        $length = 10;
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $randomPassword = '';

        for ($i = 0; $i < $length; $i++) {
            $index = rand(0, strlen($characters) - 1);
            $randomPassword .= $characters[$index];
        }

        $user = new User;
        $user->name = $request->input('name');
        $user->lastname = $request->input('lastname');
        $user->username = $request->input('username');
        $user->email = $request->input('email');
        $user->password = Hash::make($randomPassword);
        $user->birthday = $request->input('birthday');
        $user->function = $request->input('function');
        $user->coins = 0;
        $user->is_admin = 0;

        $user->save();
    }

    public function updatePassword(Request $request)
    {
        $attributes = request()->validate([
            'password' => 'required|min:8|max:16|confirmed',
        ]);

        $userId = Auth::user();
        $loggedInUser = User::find($userId);
        $loggedInUser->password = Hash::make($request->password);
        $loggedInUser->is_defaultPassword = false;
        $loggedInUser->save();

        return to_route('username');
    }

    function defaultPassword()
    {
        $userId = Auth::user();
        $loggedInUser = User::find($userId);
        $loggedInUser->is_defaultPassword = false;
        $loggedInUser->save();

        return to_route('username');
    }

    function setUsername(Request $request)
    {
        $attributes = request()->validate([
            'name' => 'required|min:5|max:255',
            'birthday' => 'required|max:255',
        ]);

        $userId = Auth::user();
        $loggedInUser = User::find($userId);
        $loggedInUser->username = $request->name;
        $loggedInUser->birthday = $request->birthday;
        $loggedInUser->save();

        return to_route('userdashboard');
    }
}
