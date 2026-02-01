<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/register', [\App\Http\Controllers\AuthController::class, 'register']);
Route::post('/login', [\App\Http\Controllers\AuthController::class, 'login']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/logout', [\App\Http\Controllers\AuthController::class, 'logout']);
    Route::get('/me', [\App\Http\Controllers\AuthController::class, 'me']);
    
    // Existing protected routes could be moved here eventually
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    // Admin User Management Routes
    Route::get('/admin/users', [\App\Http\Controllers\AdminUserController::class, 'index']);
    Route::post('/admin/users', [\App\Http\Controllers\AdminUserController::class, 'store']);
    Route::get('/admin/users/{id}', [\App\Http\Controllers\AdminUserController::class, 'show']);
    Route::put('/admin/users/{id}', [\App\Http\Controllers\AdminUserController::class, 'update']);
    Route::delete('/admin/users/{id}', [\App\Http\Controllers\AdminUserController::class, 'destroy']);
    
    // Enhanced Admin Actions
    Route::post('/admin/users/{id}/toggle-suspend', [\App\Http\Controllers\AdminUserController::class, 'toggleSuspend']);
    Route::post('/admin/users/{id}/enroll', [\App\Http\Controllers\AdminUserController::class, 'enroll']);
    Route::get('/admin/courses', [\App\Http\Controllers\AdminUserController::class, 'getCourses']);
});

Route::get('/tutor/students', [\App\Http\Controllers\StudentController::class, 'index']);
Route::get('/tutor/students/{id}', [\App\Http\Controllers\StudentController::class, 'show']);

Route::get('/messages/contacts', [\App\Http\Controllers\MessageController::class, 'getContacts']);
Route::get('/messages/{userId}', [\App\Http\Controllers\MessageController::class, 'getMessages']);
Route::post('/messages', [\App\Http\Controllers\MessageController::class, 'sendMessage']);
