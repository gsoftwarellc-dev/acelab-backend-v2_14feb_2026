<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class AdminUserController extends Controller
{
    // List all users
    public function index()
    {
        return response()->json(User::latest()->get());
    }

    // Get single user details with history
    public function show($id)
    {
        $user = User::with(['enrollments.course', 'payments'])->findOrFail($id);
        return response()->json($user);
    }

    // Create new user
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'phone' => 'nullable|string|max:20',
            'password' => 'required|string|min:8',
            'role' => 'required|in:student,parent,tutor,admin',
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'phone' => $validated['phone'],
            'password' => Hash::make($validated['password']),
            'role' => $validated['role'],
        ]);

        return response()->json(['message' => 'User created successfully', 'user' => $user], 201);
    }

    // Update user
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            // Ignore current user id for unique email check
            'email' => ['sometimes', 'email', Rule::unique('users')->ignore($user->id)],
            'phone' => 'nullable|string|max:20',
            'password' => 'nullable|string|min:8',
            'role' => 'sometimes|in:student,parent,tutor,admin',
        ]);

        if (isset($validated['password'])) {
            $validated['password'] = Hash::make($validated['password']);
        }

        $user->update($validated);

        return response()->json(['message' => 'User updated successfully', 'user' => $user]);
    }

    // Delete user
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return response()->json(['message' => 'User deleted successfully']);
    }

    // Toggle User Suspension
    public function toggleSuspend($id)
    {
        $user = User::findOrFail($id);
        
        $user->status = ($user->status === 'active') ? 'suspended' : 'active';
        $user->save();

        return response()->json(['message' => 'User status updated successfully', 'user' => $user]);
    }

    // Enroll Student in Course
    public function enroll(Request $request, $id)
    {
        $request->validate([
            'course_id' => 'required|exists:courses,id',
            'grade' => 'nullable|string',
        ]);

        $user = User::findOrFail($id);
        
        if ($user->role !== 'student') {
            return response()->json(['message' => 'Only students can be enrolled in courses.'], 400);
        }

        // Check if already enrolled
        $exists = \App\Models\Enrollment::where('student_id', $user->id)
            ->where('course_id', $request->course_id)
            ->exists();

        if ($exists) {
            return response()->json(['message' => 'Student is already enrolled in this course.'], 400);
        }

        \App\Models\Enrollment::create([
            'student_id' => $user->id,
            'course_id' => $request->course_id,
            'enrollment_date' => now(),
            'status' => 'active',
            'grade' => $request->grade,
        ]);

        return response()->json(['message' => 'Student enrolled successfully']);
    }

    // Get All Courses (for enrollment dropdown)
    public function getCourses()
    {
        return response()->json(\App\Models\Course::select('id', 'name', 'level')->get());
    }
}
