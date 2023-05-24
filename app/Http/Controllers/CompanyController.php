<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Http\Controllers\Controller;
use App\Http\Requests\CompanyRequest;
use Illuminate\Foundation\Validation\ValidatesRequests;

class CompanyController extends Controller
{
    use ValidatesRequests;

    public function storeCompany(CompanyRequest $request)
    {
        $company = new Company;
        $company->name = $request->input('name');
        $company->street = $request->input('street');
        $company->number = $request->input('number');
        $company->zip = $request->input('zip');
        $company->city = $request->input('city');
        $company->country = $request->input('country');
        $company->VAT = $request->input('vat');

        $company->save();
    }
}
