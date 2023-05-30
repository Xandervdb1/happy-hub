<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Reward;
use App\Models\Team;

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

        \App\Models\Key::factory(3)->create();

        \App\Models\Company::factory(3)->create();

        \App\Models\Team::factory(15)->create();

        \App\Models\Role::factory(5)->create();

        \App\Models\User::factory(20)->create();

        \App\Models\Reward::factory(20)->create();

        \App\Models\Quest::factory(20)->create();

        \App\Models\Log::factory(20)->create();

        foreach (User::all() as $user) {
            $user->rewards()->attach(Reward::all()->random()->id);
            $user->rewards()->attach(Reward::all()->random()->id);
            $user->rewards()->attach(Reward::all()->random()->id);
            $user->rewards()->attach(Reward::all()->random()->id);
        }

        foreach (Team::all() as $team) {
            $team->rewards()->attach(Reward::all()->random()->id);
            $team->rewards()->attach(Reward::all()->random()->id);
            $team->rewards()->attach(Reward::all()->random()->id);
            $team->rewards()->attach(Reward::all()->random()->id);
        }
    }
}
