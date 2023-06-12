<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class KeyRequest extends FormRequest
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
            'name' => 'required|unique|size:20'
        ];
    }

    public function attributes()
    {
        return [
            'name' => 'key'
        ];
    }

    public function messages()
    {

        return [
            'required' => 'Please provide a :attribute',
            'size' => ':attribute must be 20 characters',
        ];
    }
}
