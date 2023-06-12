<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Log;
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
