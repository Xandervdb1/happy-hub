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
        $quest->coins = $request->prize;
        $quest->slug = Str::slug($request->slug, '-');

        $user = Auth::user();
        if ($request->type === 'Personal') {
            $quest->type = 'personal';
            $quest->save();
            $companyMembers = $user->company->users;
            foreach ($companyMembers as $user) {
                $user->quests()->attach($quest->id);
            }
        } else if ($request->type === "Team") {
            $quest->type = 'team';
            $quest->save();
            $companyTeams = $user->company->teams;
            foreach ($companyTeams as $team) {
                $team->quests()->attach($quest->id);
            }
        }

        return to_route('companydashboard');
    }

    public function show(Quest $quest)
    {
        return response()->json($quest);
    }

    public function updateQuest(QuestRequest $request, Quest $quest)
    {
        $quest->name = $request->name;
        $quest->coins = $request->coins;
        $quest->save();
    }

    public function deleteQuest($id)
    {
        $user = Auth::user();
        $companyUsers = $user->company->users;
        $teams = $user->company->teams;
        $quest = Quest::find($id);

        foreach ($companyUsers as $user) {
            $user->quests()->detach($quest->id);
        }

        foreach ($teams as $team) {
            $team->quests()->detach($quest->id);
        }

        $quest->delete();
    }

    function showAllQuests()
    {
        $user = Auth::user();

        $userQuests = $user->quests;
        $userCoins = $user->coins;

        $team = $user->team;
        $teamCoins = $team->coins;

        $teamQuests = $team->quests;

        return Inertia::render('userDashboard/AllQuests', [
            'userQuests' => $userQuests,
            'teamQuests' => $teamQuests,
            'userCoins' => $userCoins,
            'teamCoins' => $teamCoins,
        ]);
    }
}
