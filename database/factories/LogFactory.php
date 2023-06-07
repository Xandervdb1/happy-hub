<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use App\Models\Quest;
use App\Models\Reward;
use App\Models\Team;
use App\Models\Company;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Log>
 */
class LogFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'user_id' => User::all()->random()->id,
            'team_id' => Team::all()->random()->id,
            'quest_id' => Quest::all()->random()->id,
            'reward_id' => Reward::all()->random()->id,
            'company_id' => Company::all()->random()->id
        ];
    }
}
