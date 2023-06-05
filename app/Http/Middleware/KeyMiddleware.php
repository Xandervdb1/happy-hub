<?php

namespace App\Http\Middleware;

use App\Http\Requests\KeyRequest;
use Closure;
use Illuminate\Http\Request;
use App\Models\Key;
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

    public function handle($request)
    {
        $inputKey = $request->name;
        $allKeys = Key::all();

        foreach ($allKeys as $key) {
            if (Hash::check($inputKey, $key->key)) {
                $key->delete();
                return to_route('adminregister');
            }
        }

        return to_route('keycheck')->withErrors(["no-match" => "There's no matching key found"]);
    }
}
