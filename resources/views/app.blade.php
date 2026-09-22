<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="theme-color" content="#FAF8F5">
        <link rel="icon" type="image/svg+xml" href="/favicon.svg">
        <link rel="alternate icon" href="/favicon.ico">

        <title inertia>{{ config('app.name', 'Refreva') }} — Therapy & Counseling Practice in Virginia</title>
        <meta name="description" content="Grounded, compassionate psychotherapy and counseling services for adults across Virginia. Offering thoughtful in-person care and statewide secure telehealth appointments.">
        <meta name="keywords" content="therapy in Virginia, Virginia licensed therapist, counseling Virginia, individual therapy Virginia, anxiety counseling Virginia, telehealth therapy Virginia, psychotherapy Virginia">
        
        <meta property="og:type" content="website">
        <meta property="og:locale" content="en_US">
        <meta property="og:url" content="https://refreva.com">
        <meta property="og:site_name" content="Refreva Therapy">
        <meta property="og:title" content="Refreva — Grounded Psychotherapy & Counseling in Virginia">
        <meta property="og:description" content="Support for where you are, and where you're going. Compassionate, licensed therapy in-person and via telehealth across Virginia.">
        
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="Refreva — Therapy & Counseling in Virginia">
        <meta name="twitter:description" content="Compassionate, licensed psychotherapy in-person and via secure telehealth across the Commonwealth of Virginia.">
        
        <meta name="geo.region" content="US-VA">
        <meta name="geo.placename" content="Virginia">

        <!-- Google Fonts: Fraunces & Plus Jakarta Sans -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,100..900,0..100,0..1;1,9..144,100..900,0..100,0..1&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">

        @php
            $jsonLd = [
                '@'.'context' => 'https://schema.org',
                '@'.'type' => 'MedicalBusiness',
                'name' => 'Refreva Therapy & Counseling',
                'description' => 'Grounded, compassionate psychotherapy and counseling practice for adults across Virginia.',
                'url' => 'https://refreva.com',
                'medicalSpecialty' => 'Psychotherapy',
                'areaServed' => [
                    '@'.'type' => 'State',
                    'name' => 'Virginia',
                ],
                'serviceArea' => [
                    '@'.'type' => 'AdministrativeArea',
                    'name' => 'Commonwealth of Virginia',
                ],
                'availableService' => [
                    [
                        '@'.'type' => 'MedicalTherapy',
                        'name' => 'Individual Psychotherapy',
                        'description' => 'Individual outpatient counseling tailored around personal goals, anxiety, life transitions, and emotional well-being.',
                    ],
                    [
                        '@'.'type' => 'MedicalTherapy',
                        'name' => 'Telehealth Psychotherapy',
                        'description' => 'Secure virtual therapy sessions for residents throughout the state of Virginia.',
                    ],
                ],
            ];
        @endphp
        <!-- Structured Data (Schema.org MedicalBusiness) -->
        <script type="application/ld+json">
        {!! json_encode($jsonLd, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) !!}
        </script>

        <!-- Scripts & Styles -->
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx'])
        @inertiaHead
    </head>
    <body class="min-h-screen flex flex-col selection:bg-[#DCE5DE] selection:text-[#264640] antialiased">
        @inertia
    </body>
</html>
