<?php

namespace Database\Factories;

use App\Models\Team;
use App\Models\Company;
use App\Models\Role;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => fake()->name(),
            'lastname' => fake()->name(),
            'username' => fake()->name(),
            'birthday' => fake()->date(),
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'company_id' => Company::all()->random()->id,
            'team_id' => Team::all()->random()->id,
            'role_id' => Role::all()->random()->id,
            'is_admin' => fake()->boolean(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'is_defaultPassword' => fake()->boolean(),
            'remember_token' => Str::random(10),
            'coins' => fake()->randomNumber(),

        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return static
     */
    public function unverified()
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
