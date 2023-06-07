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
        $user = User::find($userId);
        $userRewards = $user->rewards->take(3);
        $userQuests = $user->quests->take(3);

        $team = $user->team;
        $teamRewards = $team->rewards->take(3);
        $teamQuests = $team->quests->take(3);

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
        $teamId = Auth::user()->team_id;

        $userRewards = Reward::where('user_id', $userId)->get();
        $teamRewards = Reward::where('team_id', $teamId)->get();

        return Inertia::render('RewardsCollection', [
            'userRewards' => $userRewards,
            'teamRewards' => $teamRewards
        ]);
    }

    public function show(Reward $reward)
    {
        return response()->json($reward);
    }

    public function updateReward(RewardRequest $request, Reward $reward)
    {
        $reward->name = $request->name;
        $reward->price = $request->price;
        $reward->team_id = Auth::user()->team_id;
        $reward->user_id = Auth::user()->id;

        $reward->save();
    }

    public function deleteReward($id)
    {
        $user = Auth::user();
        $companyUsers = $user->company->users;
        $teams = $user->company->teams;
        $reward = Reward::find($id);

        foreach ($companyUsers as $user) {
            $user->rewards()->detach($reward->id);
        }
        foreach ($teams as $team) {
            $team->rewards()->detach($reward->id);
        }

        $reward->delete();
    }
}
