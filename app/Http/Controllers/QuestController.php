<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Quest;
use App\Http\Controllers\Controller;
use App\Http\Requests\QuestRequest;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Str;

class QuestController extends Controller
{
    use ValidatesRequests;

    public function storeQuest(QuestRequest $request)
    {
        $quest = new Quest;

        $quest->name = $request->name;
        $quest->coins = $request->price;
        $quest->slug = Str::slug($request->slug, '-');

        $quest->save();

        $user = Auth::user();
        if ($request->type === 'Personal') {
            $companyMembers = $user->company->users;
            foreach ($companyMembers as $user) {
                $user->quests()->attach($quest->id);
            }
        } else if ($request->type === "Team") {
            $companyTeams = $user->company->teams;
            foreach ($companyTeams as $team) {
                $team->quests()->attach($quest->id);
            }
        }
    }

    function showAllQuests()
    {
        $userId = Auth::id();
        $user = User::find($userId);
        
        $userQuests = $user->quests;
        $userCoins = $user->coins;

        $team = $user->team;

        $teamQuests = $team->quests;

        return Inertia::render('userDashboard/AllQuests', [
            'userQuests' => $userQuests,
            'teamQuests' => $teamQuests,
            'userCoins' => $userCoins,
        ]);
    }
}
