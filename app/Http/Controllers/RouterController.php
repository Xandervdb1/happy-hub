<?php

namespace App\Http\Controllers;

use App\Models\Team;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class RouterController extends Controller
{
function showComapnyDashboard()
    {
        $userId = Auth::id();
        $user = User::find($userId);

        $teams = $user->company->teams;

        $teamMembers = [];
        foreach($teams as $team) {
            array_push($teamMembers, $team->users);
        }
        
        $roles = $user->company->roles;

        return Inertia::render('companyDashboard/CompanyDashboard', [
            "teams" => $teams,
            "teamMembers" => $teamMembers,
            "roles" => $roles,
            
            
        ]);
    }
}