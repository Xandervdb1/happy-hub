<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Log;
use App\Models\Reward;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LogController extends Controller
{
    function store(Request $request)
    {
        $log = new Log;

        //TODO: add relevant id's based on action
        $log->user_id = 5;
        $log->reward_id = 3;
        $log->quest_id = 0;
        $log->company_id = 1;

        $log->save();
    }

    function claimReward(Request $request)
    {
        $reward = Reward::find($request->rewardId);
        $user = Auth::user();
        $log = new Log;
        $team = $user->team;
        if ($reward->type === 'personal') {
            if ($user->coins > $reward->price) {
                $user->coins = $user->coins - $reward->price;
                $user->save();

                $log->user_id = $user->id;
                $log->reward_id = $reward->id;
                $log->company_id = $user->company->id;
                $log->save();
            }
        } else if ($reward->type === 'team') {
            if ($team->coins > $reward->price) {
                $team->coins = $team->coins - $reward->price;
                $team->save();
            }
        }
    }

    //NOT USED???????????????
    function showAll()
    {
        // Get the currently logged-in user
        $user = Auth::user();

        // Retrieve all logs associated with the user
        $logs = Log::where('company_id', $user->company_id)->get();

        // Return the logs to the view or perform any other actions
        return Inertia::render('logs', ['logs' => $logs]);

        $logs->take(3);
    }
}
