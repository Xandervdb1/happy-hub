<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class CompanyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'companyname' => 'required|unique:companies,name|min:1|max:255',
            'address' => 'required|min:1|max:255',
            'addressnumber' => 'required|min:1|max:4',
            'zip' => 'required|min:1|max:8',
            'city' => 'required|max:255',
            'country' => 'required|max:255',
            'vatnumber' => 'required|regex:/^[A-Z]{2}/'
        ];
    }

    public function messages()
    {
        return [
            'required' => 'Please provide :attribute',
            'min' => ':attribute must be longer',
            'unique' => ':attribute already exists',
            'max' => ':attribute cannot exceed 255 characters',
            'zip.max' => ':attribute cannot be longer than 4 characters',
            'regex' => ':attribute first two characters must be letters',
        ];
    }
}
