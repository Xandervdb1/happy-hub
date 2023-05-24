<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Quest;
use App\Http\Controllers\Controller;
use App\Http\Requests\QuestRequest;
use Illuminate\Foundation\Validation\ValidatesRequests;


class QuestController extends Controller
{
    use ValidatesRequests;

    public function storeQuest(QuestRequest $request)
    {
        $quest = new Quest;

        $quest->name = $request->title;
        $quest->coins = $request->coins;
        $quest->user_id = 0;
        $quest->team_id = 0;

        $quest->save();
    }
}
