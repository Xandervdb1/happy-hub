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

class QuestController extends Controller
{
    use ValidatesRequests;

    public function storeQuest(QuestRequest $request)
    {
        $quest = new Quest;

        $quest->name = $request->name;
        $quest->coins = $request->coins;
        $quest->user_id = 0;
        $quest->team_id = 0;

        $quest->save();
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
        $quest = Quest::find($id);
        $quest->delete();
    }

    function showAllQuests()
    {
        $userId = Auth::id();
        $user = User::find($userId);

        $userQuests = $user->quests;
        $team = $user->team;

        $teamQuests = $team->quests;

        return Inertia::render('userDashboard/AllQuests', [
            'userQuests' => $userQuests,
            'teamQuests' => $teamQuests
        ]);
    }
}
