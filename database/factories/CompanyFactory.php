<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Company>
 */
class CompanyFactory extends Factory
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
            'street' => fake()->streetName(),
            'number' => fake()->randomNumber(),
            'zip' => fake()->randomNumber(),
            'city' => fake()->city(),
            'country' => fake()->country(),
            'VAT' => fake()->word()
        ];
    }
}
