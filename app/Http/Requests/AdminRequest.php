<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class AdminRequest extends FormRequest
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
    public function rules()
    {
        return [
            'name' => 'required|min:1|max:255',
            'lastname' => 'required|min:1|max:255',
            'username' => 'required|max:255',
            'birthday' => 'required|max:255',
            'email' => 'required|email|unique:users,email|max:255',
            'password' => 'required|min:8|confirmed',
        ];
    }

    public function messages()
    {
        return [
            'required' => 'Please provide :attribute',
            'min' => ':attribute must be longer',
            'username.min' => ':attribute must be longer than 5 characters',
            'max' => ':attribute cannot exceed 255 characters',
            'email' => ':attribute must be of format email',
            'confirmed' => ':attribute must be confirmed'
        ];
    }
}
