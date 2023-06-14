<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('lastname');
            $table->string('username')->nullable();
            $table->string('password');
            $table->boolean('is_defaultPassword');
            $table->date('birthday')->nullable();
            $table->string('email')->unique();
            $table->integer('coins');
            $table->rememberToken();
            $table->foreignId('team_id')->nullable();
            $table->foreignId('company_id')->nullable();
            $table->foreignId('role_id')->nullable();
            $table->boolean('is_admin');
            $table->boolean('key_check')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
