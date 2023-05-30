<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;

    function company()
    {
        return $this->belongsTo(Company::class);
    }

    function users()
    {
        return $this->hasMany(User::class);
    }

    function quests()
    {
        return $this->hasMany(Quest::class);
    }

    function logs()
    {
        return $this->hasMany(Log::class);
    }
}
