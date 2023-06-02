<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reward extends Model
{
    use HasFactory;

    function team()
    {
        return $this->hasOne(Team::class);
    }

    function user()
    {
        return $this->hasOne(User::class);
    }
}
