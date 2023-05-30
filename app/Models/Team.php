<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;

    function company()
    {
        return $this->hasOne(Company::class);
    }

    function quest()
    {
        return $this->hasMany(Quest::class);
    }
}
