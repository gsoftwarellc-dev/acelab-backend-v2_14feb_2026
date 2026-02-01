<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;
use App\Models\User;
use App\Models\Course;
use App\Models\Enrollment;
use Illuminate\Support\Facades\DB;

class MessageController extends Controller
{
    // Hardcoded current user for demo (Dr. Emily Chen)
    private $currentUserId = 2;

    public function getContacts()
    {
        // 1. Get students enrolled in courses taught by this tutor
        $tutorId = $this->currentUserId;
        
        $enrolledStudentIds = Enrollment::whereHas('course', function($q) use ($tutorId) {
            $q->where('tutor_id', $tutorId);
        })->pluck('student_id');

        $students = User::whereIn('id', $enrolledStudentIds)->get();

        // 2. Format contacts list
        $contacts = $students->map(function ($student) use ($tutorId) {
            // Get last message between me and student
            $lastMsg = Message::where(function($q) use ($tutorId, $student) {
                $q->where('sender_id', $tutorId)->where('receiver_id', $student->id);
            })->orWhere(function($q) use ($tutorId, $student) {
                $q->where('sender_id', $student->id)->where('receiver_id', $tutorId);
            })->latest()->first();

            // Count unread from student
            $unread = Message::where('sender_id', $student->id)
                ->where('receiver_id', $tutorId)
                ->where('is_read', false)
                ->count();

            return [
                'id' => $student->id,
                'name' => $student->name,
                'role' => 'Student',
                'lastMessage' => $lastMsg ? $lastMsg->content : 'No messages yet',
                'time' => $lastMsg ? $lastMsg->created_at->format('h:i A') : '',
                'unread' => $unread,
                'online' => false // Mock status
            ];
        });

        return response()->json($contacts);
    }

    public function getMessages($userId)
    {
        $myId = $this->currentUserId;

        $messages = Message::where(function($q) use ($myId, $userId) {
            $q->where('sender_id', $myId)->where('receiver_id', $userId);
        })->orWhere(function($q) use ($myId, $userId) {
            $q->where('sender_id', $userId)->where('receiver_id', $myId);
        })->orderBy('created_at', 'asc')->get();

        // Mark as read
        Message::where('sender_id', $userId)
            ->where('receiver_id', $myId)
            ->update(['is_read' => true]);

        $formatted = $messages->map(function($msg) use ($myId) {
            return [
                'id' => $msg->id,
                'senderId' => $msg->sender_id === $myId ? 'me' : $msg->sender_id,
                'text' => $msg->content,
                'time' => $msg->created_at->format('h:i A'),
                'isMe' => $msg->sender_id === $myId
            ];
        });

        return response()->json($formatted);
    }

    public function sendMessage(Request $request)
    {
        $request->validate([
            'receiver_id' => 'required|exists:users,id',
            'content' => 'required|string'
        ]);

        $msg = Message::create([
            'sender_id' => $this->currentUserId,
            'receiver_id' => $request->receiver_id,
            'content' => $request->content
        ]);

        return response()->json([
            'id' => $msg->id,
            'senderId' => 'me',
            'text' => $msg->content,
            'time' => $msg->created_at->format('h:i A'),
            'isMe' => true
        ]);
    }
}
