<?php

use App\Http\Controllers\AppointmentController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Inertia Pages
Route::get('/', fn () => Inertia::render('Home'))->name('home');
Route::get('/about', fn () => Inertia::render('About'))->name('about');
Route::get('/team', fn () => Inertia::render('Team'))->name('team');
Route::get('/services', fn () => Inertia::render('Services'))->name('services');
Route::get('/services/telehealth', fn () => Inertia::render('Services'))->name('services.telehealth');
Route::get('/contact', fn () => Inertia::render('Contact'))->name('contact');
Route::get('/faq', fn () => Inertia::render('Faq'))->name('faq');
Route::get('/schedule', fn () => Inertia::render('Schedule'))->name('schedule');
Route::get('/privacy', fn () => Inertia::render('Privacy'))->name('privacy');
Route::get('/terms', fn () => Inertia::render('Terms'))->name('terms');
Route::get('/accessibility', fn () => Inertia::render('Accessibility'))->name('accessibility');

// Appointment Request API Submission (Throttled: 5 submissions per 10 minutes per IP)
Route::post('/api/appointment', [AppointmentController::class, 'store'])
    ->middleware('throttle:5,10')
    ->name('appointment.store');

// Custom 404 Fallback
Route::fallback(fn () => Inertia::render('NotFound'));
