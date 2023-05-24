<?php

namespace App\Http\Controllers;

use App\Http\Requests\TeamRequest;
use App\Models\Team;

class TeamController extends Controller
{
    function store(TeamRequest $request)
    {
        $team = new Team;

        $team->name = $request->teamname;
        $team->coins = 0;
        $team->company_id = 0;
        //TODO: set company_id to the company_id of the logged in admin

        $team->save();
    }
}
