<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Http\Controllers\Controller;
use App\Http\Requests\CompanyRequest;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Foundation\Validation\ValidatesRequests;

class CompanyController extends Controller
{
    use ValidatesRequests;

    public function storeCompany(CompanyRequest $request)
    {
        $company = new Company;
        $company->name = $request->input('companyname');
        $company->street = $request->input('address');
        $company->number = $request->input('addressnumber');
        $company->zip = $request->input('zip');
        $company->city = $request->input('city');
        $company->country = $request->input('country');
        $company->VAT = $request->input('vatnumber');

        $company->save();
        //TODO: give saved company id to logged in admin
        $userId = Auth::user()->id;
        $user = User::find($userId);
        $user->company_id = $company->id;
        $user->save();

        return to_route('companydashboard');
    }
}
