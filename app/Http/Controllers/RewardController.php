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

    function showThreeRewardsAndQuests()
    {
        $userId = Auth::id();
        $teamId = Auth::user()->team_id;

        $userRewards = Reward::where('user_id', $userId)->take(3)->get();
        $teamRewards = Reward::where('team_id', $teamId)->take(3)->get();

        $userQuests = Quest::where('user_id', $userId)->take(3)->get();
        $teamQuests = Quest::where('team_id', $teamId)->take(3)->get();

        return Inertia::render('userDashboard/UserDashboard', [
            'userRewards' => $userRewards,
            'teamRewards' => $teamRewards,
            'userQuests' => $userQuests,
            'teamQuests' => $teamQuests,
        ]);
    }
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
