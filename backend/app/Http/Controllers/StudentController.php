<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Course;

class StudentController extends Controller
{
    public function index(Request $request)
    {
        // For now, since we don't have auth fully wired up from frontend yet,
        // we will fetch for a specific mock tutor (ID 1) or the authenticated user.
        // Once Sanctum is connected, we use Auth::id()
        
        // $tutorId = Auth::id() ?? 1; 
        $tutorId = 2; // Hardcoding to 2 (Dr. Emily Chen in Seeder) for demo purposes

        // Get all courses taught by this tutor
        $courses = Course::where('tutor_id', $tutorId)->with(['enrollments.student'])->get();

        $students = [];

        foreach ($courses as $course) {
            foreach ($course->enrollments as $enrollment) {
                if ($enrollment->student && !isset($students[$enrollment->student->id])) {
                    // Flatten structure for frontend
                    $s = $enrollment->student;
                    $students[$s->id] = [
                        'id' => $s->id,
                        'name' => $s->name,
                        'email' => $s->email,
                        'totalClasses' => 24, // Mocked for now
                        'attendance' => $enrollment->attendance ?? '90%',
                        'subjects' => [$course->name], // Initial subject
                    ];
                } elseif (isset($students[$enrollment->student->id])) {
                    // Append subject
                    $students[$enrollment->student->id]['subjects'][] = $course->name;
                }
            }
        }

        return response()->json(array_values($students));
    }

    public function show($id)
    {
        $tutorId = 2; // Hardcoding to Dr. Emily Chen

        // 1. Verify student exists
        $student = \App\Models\User::where('role', 'student')->find($id);

        if (!$student) {
            return response()->json(['message' => 'Student not found'], 404);
        }

        // 2. Get enrollments for this student where the course is taught by the current tutor
        $enrollments = \App\Models\Enrollment::where('student_id', $id)
            ->whereHas('course', function ($query) use ($tutorId) {
                $query->where('tutor_id', $tutorId);
            })
            ->with('course')
            ->get();

        if ($enrollments->isEmpty()) {
             return response()->json(['message' => 'Student not enrolled with you'], 404);
        }

        // 3. Format response
        $joinedDate = $enrollments->min('enrollment_date');
        // Format date "September 2025"
        $formattedJoinDate = \Carbon\Carbon::parse($joinedDate)->format('F Y');

        $formattedEnrollments = $enrollments->map(function ($enrollment) {
            return [
                'id' => $enrollment->course->id,
                'name' => $enrollment->course->name,
                'level' => $enrollment->course->level,
                'enrollmentDate' => $enrollment->enrollment_date,
                'progress' => $enrollment->progress ?? 0,
                'grade' => $enrollment->grade ?? 'N/A',
                'attendance' => $enrollment->attendance ?? 'N/A',
                'status' => $enrollment->status,
            ];
        });

        // 4. Mock aggregate stats
        $stats = [
            'totalClasses' => 12, // Mocked
            'avgAttendance' => '96%', // Mocked
            'nextClass' => 'Monday, 4:00 PM', // Mocked
        ];

        return response()->json([
            'id' => $student->id,
            'name' => $student->name,
            'email' => $student->email,
            'joinDate' => $formattedJoinDate,
            'stats' => $stats,
            'enrollments' => $formattedEnrollments
        ]);
    }
}
