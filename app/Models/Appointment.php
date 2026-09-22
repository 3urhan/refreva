<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    protected $fillable = [
        'full_name',
        'email',
        'phone',
        'client_status',
        'session_preference',
        'preferred_time',
        'preferred_contact_method',
        'general_inquiry',
        'ip_address',
    ];
}
