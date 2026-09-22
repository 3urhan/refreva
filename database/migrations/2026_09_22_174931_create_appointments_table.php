<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->string('full_name', 100);
            $table->string('email', 120);
            $table->string('phone', 30);
            $table->string('client_status', 50)->nullable();
            $table->string('session_preference', 50)->nullable();
            $table->string('preferred_time', 50)->nullable();
            $table->string('preferred_contact_method', 50)->nullable();
            $table->text('general_inquiry')->nullable();
            $table->string('ip_address', 45)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointments');
    }
};
