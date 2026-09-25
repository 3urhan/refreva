<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAppointmentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'fullName'               => ['required', 'string', 'max:100'],
            'email'                  => ['required', 'email:rfc', 'max:120'],
            'phone'                  => ['required', 'string', 'min:7', 'max:30'],
            'clientStatus'           => ['nullable', 'string', 'max:50'],
            'sessionPreference'      => ['nullable', 'string', 'max:50'],
            'preferredTime'          => ['nullable', 'string', 'max:50'],
            'preferredContactMethod' => ['nullable', 'string', 'max:50'],
            'generalInquiry'         => ['nullable', 'string', 'max:1000'],
            'honeypot'               => ['nullable', 'max:0'],
        ];
    }

    /**
     * Custom messages for validation errors.
     */
    public function messages(): array
    {
        return [
            'fullName.required' => 'Full Name is required.',
            'fullName.max'      => 'Full Name exceeds allowed character length.',
            'email.required'    => 'A valid email address is required.',
            'email.email'       => 'A valid email address is required.',
            'email.max'         => 'Email exceeds allowed character length.',
            'phone.required'    => 'A valid phone number is required.',
            'phone.min'         => 'A valid phone number is required.',
            'phone.max'         => 'Phone number exceeds allowed character length.',
            'honeypot.max'      => 'Invalid submission.',
        ];
    }
}
