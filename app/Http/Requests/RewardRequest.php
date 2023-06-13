<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RewardRequest extends FormRequest
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
            'name' => 'required|min:3|max:100',
            'slug' => 'required|max:10',
            'price' => 'required|integer',
            'type' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'required' => 'Please provide :attribute',
        ];
    }
}
