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
        $user = Auth::user();

        $teams = $user->company->teams;

        $teamMembers = [];
        foreach ($teams as $team) {
            array_push($teamMembers, $team->users);
        }

        $company = $user->company;
        $logs = $company->logs;

        $infoLogs = [];
        foreach ($logs as $log) {
            $infoLog = array(
                'type' => '',
                'created_at' => '',
                'name' => '',
                'coins' => '',
                'scope' => '',
                'scopeName' => '',
                'scopeCoins' => ''
            );
            if ($log->user_id != null) {
                $infoLog['type'] = "Personal";
                $infoLog['created_at'] = $log->created_at->diffForHumans();
                $infoLog['name'] = $log->user->name . " " . $log->user->lastname;
                $infoLog['coins'] = $log->user->coins;
                if ($log->reward_id != null) {
                    $infoLog['scope'] = "Reward";
                    $infoLog['scopeName'] = $log->reward->name;
                    $infoLog['scopeCoins'] = $log->reward->price;
                } else {
                    $infoLog['scope'] = "Quest";
                    $infoLog['scopeName'] = $log->quest->name;
                    $infoLog['scopeCoins'] = $log->quest->coins;
                }
            } else {
                $infoLog['type'] = "Team";
                $infoLog['created_at'] = $log->created_at->diffForHumans();
                $infoLog['name'] = $log->team->name;
                $infoLog['coins'] = $log->team->coins;
                if ($log->reward_id != null) {
                    $infoLog['scope'] = "Reward";
                    $infoLog['scopeName'] = $log->reward->name;
                    $infoLog['scopeCoins'] = $log->reward->price;
                } else {
                    $infoLog['scope'] = "Quest";
                    $infoLog['scopeName'] = $log->quest->name;
                    $infoLog['scopeCoins'] = $log->quest->coins;
                }
            }
            array_push($infoLogs, $infoLog);
        }
        $roles = $user->company->roles;

        return Inertia::render('companyDashboard/CompanyDashboard', [
            "teams" => $teams,
            "teamMembers" => $teamMembers,
            "roles" => $roles,
            "logs" => $infoLogs,
        ]);
    }
    function showLogs()
    {
        $user = Auth::user();
        // $user = User::find($userId);

        $teams = $user->company->teams;

        $teamMembers = [];
        foreach ($teams as $team) {
            array_push($teamMembers, $team->users);
        }

        //createdat, username, teamname, questname, rewardname, rewardcoins, questcoins, usercoins, logtype, logscope
        $company = $user->company;
        $logs = $company->logs;

        $infoLogs = [];
        foreach ($logs as $log) {
            $infoLog = array(
                'type' => '',
                'created_at' => '',
                'name' => '',
                'coins' => '',
                'scope' => '',
                'scopeName' => '',
                'scopeCoins' => ''
            );
            if ($log->user_id != null) {
                $infoLog['type'] = "Personal";
                $infoLog['created_at'] = $log->created_at->diffForHumans();
                $infoLog['name'] = $log->user->name . " " . $log->user->lastname;
                $infoLog['coins'] = $log->user->coins;
                if ($log->reward_id != null) {
                    $infoLog['scope'] = "Reward";
                    $infoLog['scopeName'] = $log->reward->name;
                    $infoLog['scopeCoins'] = $log->reward->price;
                } else {
                    $infoLog['scope'] = "Quest";
                    $infoLog['scopeName'] = $log->quest->name;
                    $infoLog['scopeCoins'] = $log->quest->coins;
                }
            } else {
                $infoLog['type'] = "Team";
                $infoLog['created_at'] = $log->created_at->diffForHumans();
                $infoLog['name'] = $log->team->name;
                $infoLog['coins'] = $log->team->coins;
                if ($log->reward_id != null) {
                    $infoLog['scope'] = "Reward";
                    $infoLog['scopeName'] = $log->reward->name;
                    $infoLog['scopeCoins'] = $log->reward->price;
                } else {
                    $infoLog['scope'] = "Quest";
                    $infoLog['scopeName'] = $log->quest->name;
                    $infoLog['scopeCoins'] = $log->quest->coins;
                }
            }
            array_push($infoLogs, $infoLog);
        }
        $roles = $user->company->roles;

        return Inertia::render('logs', [
            "teams" => $teams,
            "teamMembers" => $teamMembers,
            "roles" => $roles,
            "logs" => $infoLogs,
        ]);
    }
}
