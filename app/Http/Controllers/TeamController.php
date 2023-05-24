<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Team;

class TeamController extends Controller
{
    function store (Request $request)
    {
        $team = new Team;
        
        $team->name = $request->teamname;
        $team->coins = 0;
        $team->company_id = 0;
        //TODO: set company_id to the company_id of the logged in admin

        $team->save();
    }
}
