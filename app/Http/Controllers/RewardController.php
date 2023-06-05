<?php

namespace App\Http\Controllers;

use App\Http\Requests\RewardRequest;
use App\Models\Reward;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\Quest;
use App\Models\User;



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
    // TODO: specify user/team id (company)

    
    function showAllRewards()
    {
        $userId = Auth::id();
        $user = User::find($userId);
        $userRewards = $user->rewards;

        $team = $user->team;
        $teamRewards = $team->rewards;

        return Inertia::render('RewardsCollection', [
            'userRewards' => $userRewards,
            'teamRewards' => $teamRewards
        ]);
    }
}
