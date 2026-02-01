<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Course;
use App\Models\Enrollment;

class DemoDataSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Create Student
        $student = User::create([
            'name' => 'Alex Johnson (DB)',
            'email' => 'alex@example.com',
            'password' => Hash::make('password'),
            'role' => 'student',
        ]);

        // 2. Create Tutor
        $tutor = User::create([
            'name' => 'Dr. Emily Chen (DB)',
            'email' => 'emily@acelab.com',
            'password' => Hash::make('password'),
            'role' => 'tutor',
            'bio' => 'PhD in Physics',
            'hourly_rate' => 45.00,
        ]);

        // 3. Create Course
        $course = Course::create([
            'name' => 'Mathematics - GCSE',
            'tutor_id' => $tutor->id,
            'level' => 'GCSE',
            'description' => 'Comprehensive maths course',
        ]);

        // 4. Enroll Student
        Enrollment::create([
            'student_id' => $student->id,
            'course_id' => $course->id,
            'enrollment_date' => now(),
            'status' => 'active',
            'attendance' => '95%',
            'grade' => 'A',
        ]);
    }
}
