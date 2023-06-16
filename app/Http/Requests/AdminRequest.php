<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;

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
            'name' => 'required|min:3|max:255',
            'lastname' => 'required|min:3|max:255',
            'username' => 'required|max:255',
            'birthday' => 'required|date_format:Y-m-d|before:today',
            'email' => 'required|email|unique:users,email|max:255',
            'password' => ['required', 'confirmed',  Password::min(8)->letters()->mixedCase()->numbers()->symbols()],
        ];
    }

    public function messages()
    {
        return [
            'required' => 'Please provide :attribute',
            'min' => ':attribute must be longer',
            'username.min' => ':attribute must be longer than 5 characters',
            'max' => ':attribute cannot exceed 255 characters',
            'date_format' => ':attribute must be of the right format',
            'before' => ':attribute cannot be in the future',
            'email' => ':attribute must be of format email',
            'confirmed' => ':attribute must be confirmed',
            'password.numbers' => ':attribute must contain at least one number'
        ];
    }
}
