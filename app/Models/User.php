<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory;

    function team()
    {
        return $this->belongsTo(Team::class);
    }

    function company()
    {
        return $this->belongsTo(Company::class);
    }

    function role()
    {
        return $this->belongsTo(Role::class);
    }

    function quests()
    {
        return $this->belongsToMany(Quest::class, 'quest_user');
    }

    function rewards()
    {
        return $this->belongsToMany(Reward::class, 'reward_user');
    }

    function logs()
    {
        return $this->hasMany(Log::class);
    }
}
