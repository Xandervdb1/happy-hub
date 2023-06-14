<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class UserRequest extends FormRequest
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

            'firstname' => 'required|min:1|max:255',
            'lastname' => 'required|min:1|max:255',
            'email' => 'required|email|unique:users,email|max:255',
            'team' => 'required',
            'function' => 'required',
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
            'email.required' => 'Please provide an :attribute',
            'email.unique' => 'Email already exists',
            'confirmed' => ':attribute must be confirmed'
        ];
    }
}
