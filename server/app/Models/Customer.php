<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $filable = ['name', 'cpf', 'phone', 'email', 'adress', 'city', 'state', 'notes'];
    protected $guarded = ['_token'];
}
