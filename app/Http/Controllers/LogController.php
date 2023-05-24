<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Log;

class LogController extends Controller
{
    function store(Request $request)
    {
        $log = new Log;

        //TODO: add relevant id's based on action
        $log->user_id = 5;
        $log->reward_id = 3;
        $log->quest_id = 0;

        $log->save();
    }
}
