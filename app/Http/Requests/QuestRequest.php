<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class QuestRequest extends FormRequest
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
            'name' => 'required|min:5|max:100',
            'coins' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'required' => 'Please provide :attribute',
        ];
    }
}
