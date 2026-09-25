<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAppointmentRequest;
use App\Models\Appointment;
use Illuminate\Http\JsonResponse;

class AppointmentController extends Controller
{
    public function store(StoreAppointmentRequest $request): JsonResponse
    {
        // Honeypot check: automated bots fill this
        if ($request->filled('honeypot')) {
            // Discard bot silently
            return response()->json([
                'success' => true,
                'message' => 'Request received.',
            ]);
        }

        $validated = $request->validated();
        $sanitizedInquiry = strip_tags($validated['generalInquiry'] ?? '');

        // Persist inquiry securely in database
        Appointment::create([
            'full_name'                => $validated['fullName'],
            'email'                    => $validated['email'],
            'phone'                    => $validated['phone'],
            'client_status'            => $validated['clientStatus'] ?? null,
            'session_preference'       => $validated['sessionPreference'] ?? null,
            'preferred_time'           => $validated['preferredTime'] ?? null,
            'preferred_contact_method'  => $validated['preferredContactMethod'] ?? null,
            'general_inquiry'          => $sanitizedInquiry,
            'ip_address'               => $request->ip(),
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Your appointment request has been securely received.',
        ], 200);
    }
}
