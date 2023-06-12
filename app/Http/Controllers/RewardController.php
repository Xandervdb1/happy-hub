<?php

namespace App\Http\Controllers;

use App\Http\Requests\RewardRequest;
use App\Models\Reward;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Str;

class RewardController extends Controller
{
    function store(RewardRequest $request)
    {
        $reward = new Reward;

        $reward->name = $request->name;
        $reward->price = $request->price;
        $reward->slug = Str::slug($request->slug, '-');

        $reward->save();

        $user = Auth::user();
        if ($request->type === 'Personal') {
            $companyMembers = $user->company->users;
            foreach ($companyMembers as $user) {
                $user->rewards()->attach($reward->id);
            }
        } else if ($request->type === "Team") {
            $companyTeams = $user->company->teams;
            foreach ($companyTeams as $team) {
                $team->rewards()->attach($reward->id);
            }
        }

        return to_route('companydashboard');
    }

    function showAllRewards()
    {
        $userId = Auth::id();
        $user = User::find($userId);
        $userRewards = $user->rewards;
        $userCoins = $user->coins;
        $teamCoins = $user->team->coins;

        $team = $user->team;
        $teamRewards = $team->rewards;

        return Inertia::render('RewardsCollection', [
            'userRewards' => $userRewards,
            'teamRewards' => $teamRewards,
            'userCoins' => $userCoins,
            'teamCoins' => $teamCoins
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
