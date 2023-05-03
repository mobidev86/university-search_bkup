<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EmailVerificationNotificationController extends Controller
{
    /**
     * Send a new email verification notification.
     */
    public function store(Request $request): RedirectResponse
    {
        $user = Auth::user();

        if ($user && $user->hasVerifiedEmail()) {
            return redirect()->intended(RouteServiceProvider::HOME);
        }
        if($user){
            $user->sendEmailVerificationNotification();
        }

        return back()->with('status', 'verification-link-sent');
    }
}
