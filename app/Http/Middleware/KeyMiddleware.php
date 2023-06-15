<?php

namespace App\Http\Middleware;

use App\Http\Requests\KeyRequest;
use Closure;
use Illuminate\Http\Request;
use App\Models\Key;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class KeyMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */

    public function handle(Request $request, Closure $next)
    {
        $user = Auth::user();
        if ($user->key_check == 0) {
            return to_route('keycheck');
        }
        return $next($request);
    }
}
