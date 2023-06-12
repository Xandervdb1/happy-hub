<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Company;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Mail;
use App\Mail\RandomPassword;

class UserController extends Controller
{
    use ValidatesRequests;

    public function storeUser(UserRequest $request)
    {
        $length = 10;
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $randomPassword = '';

        for ($i = 0; $i < $length; $i++) {
            $index = rand(0, strlen($characters) - 1);
            $randomPassword .= $characters[$index];
        }

        $user = new User;
        $user->name = $request->input('firstname');
        $user->lastname = $request->input('lastname');
        $user->email = $request->input('email');
        $user->team_id = $request->input('team');
        $user->role_id = $request->input('function');
        $user->company_id = Auth::user()->company_id;
        $user->password = Hash::make($randomPassword);
        $user->is_defaultPassword = 1;
        $user->coins = 0;
        $user->is_admin = 0;

        $companyName = Company::find(Auth::user()->company_id)->name;
        Mail::to($request->email)->send(new RandomPassword($randomPassword, $companyName));

        $user->save();
    }

    public function show(User $user)
    {
        return response()->json($user);
    }

    public function updatePassword(Request $request)
    {
        $attributes = request()->validate([
            'password' => 'required|min:8|max:16|confirmed',
        ]);

        $loggedInUser = Auth::user();
        $loggedInUser->password = Hash::make($request->password);
        $loggedInUser->is_defaultPassword = false;
        $loggedInUser->save();

        return to_route('username');
    }

    function defaultPassword()
    {
        $loggedInUser = Auth::user();
        $loggedInUser->is_defaultPassword = false;
        $loggedInUser->save();

        return to_route('username');
    }

    function setUsername(Request $request)
    {
        $attributes = request()->validate([
            'name' => 'required|min:5|max:255',
            'birthday' => 'required|max:255',
        ]);

        $loggedInUser = Auth::user();
        $loggedInUser->username = $request->name;
        $loggedInUser->birthday = $request->birthday;
        $loggedInUser->save();

        return to_route('userdashboard');
    }
    function showUserDashboard()
    {
        $userId = Auth::id();
        $user = User::find($userId);
        $team = $user->team;
        $userCoins = $user->coins;
        $teamCoins = $user->team->coins;

        $userRewards = $user->rewards->take(3);
        $teamRewards = $team->rewards->take(3);

        $userQuests = $user->quests->take(3);
        $teamQuests = $team->quests->take(3);


        $teamName = $team->name;
        $teamMembers = $team->users;
        $countTeamMembers = $teamMembers->count();

        // $sumTeamCoins = 0;
        // foreach ($teamMembers as $teamMember) {
        //     $sumTeamCoins += $teamMember->coins;
        // }
        return Inertia::render('userDashboard/UserDashboard', [
            'userRewards' => $userRewards,
            'teamRewards' => $teamRewards,
            'userQuests' => $userQuests,
            'teamQuests' => $teamQuests,
            'teamName' => $teamName,
            'countTeamMembers' => $countTeamMembers,
            'teamCoins' => $teamCoins,
            // 'sumTeamCoins' => $sumTeamCoins,
            "userCoins" => $userCoins

        ]);
    }
    public function showWallet()
    {
        $user = Auth::user();

        $userCoins = $user->coins;
        $teamCoins = $user->team->coins;
        $userLogs = $user->logs;
        $infoUserLogs = [];
        foreach ($userLogs as $log) {
            $infoUserLog = array(
                'type' => '',
                'created_at' => '',
                'name' => '',
                'coins' => '',
                'scope' => '',
                'scopeName' => '',
                'scopeCoins' => '',
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
            array_push($infoUserLogs, $infoUserLog);
        }
        // dd($infoUserLogs);


        return Inertia::render('wallet/Wallet', [
            "userCoins" => $userCoins,
            "teamCoins" => $teamCoins,
            "logs" => $infoUserLogs
        ]);
    }

    public function editUser(User $user)
    {
        return to_route('updateUser', ['user' => $user]);
    }

    public function updateUser(UserRequest $request, User $user)
    {
        $user->name = $request->input('name');
        $user->lastname = $request->input('lastname');
        $user->username = $request->input('username');
        $user->email = $request->input('email');
        $user->password = Hash::make($request->password);
        $user->birthday = $request->input('birthday');
        $user->coins = 0;
        $user->is_admin = 0;

        $user->save();
    }

    public function deleteUser($id)
    {
        $user = User::find($id);
        $user->rewards()->detach();
        $user->quests()->detach();
        $user->delete();
    }
}
