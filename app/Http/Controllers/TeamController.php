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
            "teams" => $teams
        ]);
    }
    function showMembers()
    {
        $user = Auth::user();
        
        $teams = $user->company->teams;

        $teamMembers = [];
        foreach($teams as $team) {
            array_push($teamMembers, $team->users);
        }

        $roles = $user->company->roles;

        return Inertia::render('companyDashboard/companyMembers', [
            "teams" => $teams,
            "teamMembers" => $teamMembers,
            "roles" => $roles
        ]);
    }

    public function show(Team $team)
    {
        return response()->json($team);
    }

    public function updateTeam(TeamRequest $request, Team $team)
    {
        $team->name = $request->input('name');
        $team->coins = $request->input('coins');
        $team->save();
    }

    public function deleteTeam($id)
    {
        $team = Team::find($id);

        $team->rewards()->detach();
        $team->quests()->detach();

        $team->delete();
    }
}
