<?php

namespace App\Http\Controllers;

use App\Http\Requests\TeamRequest;
use App\Models\Team;
use App\Models\User;
use App\Models\Users;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

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
    function showTeams()
    {
        $teams = Team::all();

        return Inertia::render('companyDashboard/CompanyDashboard', [
            "teams"=>$teams
        ]);
    }
    function showMembers()
    {
        $teamId = Auth::id();
        $users = User::where('team_id', $teamId)->get();
        return Inertia::render('companyDashboard/TeamMembers', ["users"=>$users]);
    }
   
}
