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
            'username' => 'required|min:5|max:255',
            'birthday' => 'required|max:255',
            'function' => 'required|max:255',
            'email' => 'required|email|max:255',
            'password' => 'required|min:8|max:16|confirmed',
        ];
    }
}
