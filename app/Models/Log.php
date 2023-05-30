<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Log extends Model
{
    use HasFactory;

    function user()
    {
        return $this->hasOne(User::class);
    }

    function team()
    {
        return $this->hasOne(Team::class);
    }

    function quest()
    {
        return $this->hasMany(Quest::class);
    }

    function reward()
    {
        return $this->hasMany(Reward::class);
    }
}
