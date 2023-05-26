<?php

namespace App\Http\Controllers;

use App\Http\Requests\RewardRequest;
use App\Models\Reward;
use Inertia\Inertia;

class RewardController extends Controller
{
    function store(RewardRequest $request)
    {
        $reward = new Reward;

        $reward->name = $request->name;
        $reward->price = $request->price;
        $reward->team_id = 0; //TODO: add relevant id's based on input
        $reward->user_id = 5;

        $reward->save();
    }
    // TODO: specify user/team id

    function showAllUserRewards()
    {
        $rewards = Reward::whereNull('team_id')->orderBy('id', 'desc')->take(3)->get();
        return Inertia::render('UserDashboard', ['userRewards' => $rewards]);
    }
}
