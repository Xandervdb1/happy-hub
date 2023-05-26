<?php

namespace App\Http\Controllers;

use App\Http\Requests\AdminRequest;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;



class AdminController extends Controller
{
        use ValidatesRequests;

        public function storeAdmin(AdminRequest $request)
        {
                $admin = new User;
                $admin->name = $request->input('name');
                $admin->lastname = $request->input('lastname');
                $admin->username = $request->input('username');
                $admin->email = $request->input('email');
                $admin->password = Hash::make($request->input('password'));
                $admin->birthday = $request->input('birthday');
                $admin->function = $request->input('function');
                $admin->coins = 0;
                $admin->is_admin = 1;
                $admin->is_defaultPassword = false;
                $admin->team_id = null;
                $admin->company_id = null;

                $admin->save();
                return to_route('companyregister');
        }
}
