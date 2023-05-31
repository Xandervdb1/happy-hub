<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Quest;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Reward;
use App\Models\Team;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

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

        DB::table('users')->insert([
            'name' => 'admin',
            'lastname' => 'rootings',
            'username' => 'rootroot',
            'password' => Hash::make('rootroot'),
            'is_defaultPassword' => false,
            'birthday' => '1970-1-1',
            'function' => 'admin',
            'email' => 'root@root.com',
            'coins' => 0,
            'team_id' => 1,
            'company_id' => 1,
            'role_id' => 1,
            'is_admin' => true,
        ]);

        foreach (User::all() as $user) {
            $user->rewards()->attach(Reward::all()->random()->id);
            $user->rewards()->attach(Reward::all()->random()->id);
            $user->rewards()->attach(Reward::all()->random()->id);
            $user->rewards()->attach(Reward::all()->random()->id);
            $user->quests()->attach(Quest::all()->random()->id);
            $user->quests()->attach(Quest::all()->random()->id);
            $user->quests()->attach(Quest::all()->random()->id);
            $user->quests()->attach(Quest::all()->random()->id);
        }

        foreach (Team::all() as $team) {
            $team->rewards()->attach(Reward::all()->random()->id);
            $team->rewards()->attach(Reward::all()->random()->id);
            $team->rewards()->attach(Reward::all()->random()->id);
            $team->rewards()->attach(Reward::all()->random()->id);
            $team->quests()->attach(Quest::all()->random()->id);
            $team->quests()->attach(Quest::all()->random()->id);
            $team->quests()->attach(Quest::all()->random()->id);
            $team->quests()->attach(Quest::all()->random()->id);
        }
    }
}
