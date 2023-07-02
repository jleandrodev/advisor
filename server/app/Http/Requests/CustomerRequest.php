<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CustomerRequest extends FormRequest
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
     * @return array
     */
    public function rules()
    {
        return [
            'name' => ['required', 'max:255'],
            'phone' => ['required', 'max:11'],
            'email' => ['nullable', 'max:100'],
            'cep' => ['nullable', 'max:9'],
            'cpf' => ['nullable', 'max:14'],
            'adress' => ['nullable', 'max:100'],
            'city' => ['nullable', 'max:100'],
            'state' => ['nullable', 'size:2'],
            'number' => ['nullable', 'max:10'],
            'notes' => ['nullable', 'max:500']

        ];
    }
}
