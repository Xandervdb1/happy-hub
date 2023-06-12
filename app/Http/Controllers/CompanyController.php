<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\Role;
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
        $role = new Role;
        $role->name = $request->input('function');
        $role->save();

        $user = Auth::user();
        $user->role_id = $role->id;

        $company = new Company;
        $company->name = $request->input('companyname');
        $company->street = $request->input('address');
        $company->number = $request->input('addressnumber');
        $company->zip = $request->input('zip');
        $company->city = $request->input('city');
        $company->country = $request->input('country');
        $company->VAT = $request->input('vatnumber');

        $company->save();

        $userId = Auth::user()->id;
        $user = User::find($userId);
        $user->company_id = $company->id;
        $user->save();

        return to_route('companydashboard');
    }

    public function show(Company $company)
    {
        return response()->json($company);
    }

    function showMembers()
    {
        $companyId = Auth::user()->company_id;
        $users = Company::find($companyId)->users;
        return response()->json($users);
    }

    public function updateCompany(CompanyRequest $request, Company $company)
    {
        $company->name = $request->input('companyname');
        $company->street = $request->input('address');
        $company->number = $request->input('addressnumber');
        $company->zip = $request->input('zip');
        $company->city = $request->input('city');
        $company->country = $request->input('country');
        $company->VAT = $request->input('vatnumber');

        $company->save();
    }

    //TODO: determine if we use this or not
    public function deleteCompany($id)
    {
        $company = Company::find($id);
        $company->delete();
    }
}
