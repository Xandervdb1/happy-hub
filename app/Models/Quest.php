<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quest extends Model
{
    use HasFactory;

    function user()
    {
        return $this->hasMany(User::class);
    }

    function team()
    {
        return $this->hasMany(Team::class);
    }
}
