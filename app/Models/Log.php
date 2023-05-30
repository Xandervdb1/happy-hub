<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Log extends Model
{
    use HasFactory;

    function user()
    {
        return $this->belongsTo(User::class);
    }

    function team()
    {
        return $this->belongsTo(Team::class);
    }

    function quest()
    {
        return $this->belongsTo(Quest::class);
    }

    function reward()
    {
        return $this->belongsTo(Reward::class);
    }
}
