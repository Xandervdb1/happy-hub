<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        \App\Models\Key::factory(10)->create();

        \App\Models\User::factory(10)->create();

        \App\Models\Team::factory(10)->create();

        \App\Models\Company::factory(10)->create();

        \App\Models\Reward::factory(10)->create();
    }
}
