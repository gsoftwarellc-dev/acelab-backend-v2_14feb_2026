
export type UserRole = "student" | "parent" | "tutor" | "admin";

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    avatar?: string;
    // Tutor specific fields
    subjects?: string[];
    hourlyRate?: number;
    rating?: number;
    bio?: string;
    // Student specific
    grade?: string;
    parentName?: string;
    parentId?: string;
}

export interface Session {
    id: string;
    subject: string;
    tutorName: string;
    studentName: string;
    date: string; // ISO date string YYYY-MM-DD
    time: string; // HH:MM
    duration: string; // e.g. "1h"
    status: "scheduled" | "completed" | "cancelled";
    level?: string; // GCSE, A-Level
}

export interface AttendanceRecord {
    id: string;
    studentId: string;
    sessionId: string;
    date: string;
    status: "present" | "absent" | "late";
}

export interface Stat {
    label: string;
    value: string;
    change?: string;
    trend?: "up" | "down" | "neutral";
}

// --- DATA ---

export const MOCK_USERS: Record<UserRole, User> = {
    student: {
        id: "s1",
        name: "Alex Johnson",
        email: "alex@example.com",
        role: "student",
        grade: "Year 10",
        parentId: "p1",
    },
    parent: {
        id: "p1",
        name: "Sarah Johnson",
        email: "sarah@example.com",
        role: "parent",
    },
    tutor: {
        id: "t1",
        name: "Dr. Emily Chen",
        email: "emily@acelab.com",
        role: "tutor",
        subjects: ["Mathematics", "Physics"],
        hourlyRate: 45,
        rating: 4.9,
        bio: "PhD in Physics with 5 years of tutoring experience.",
    },
    admin: {
        id: "a1",
        name: "Admin User",
        email: "admin@acelab.com",
        role: "admin",
    },
};

export const MOCK_TUTORS: User[] = [
    {
        id: "t1",
        name: "Dr. Emily Chen",
        email: "emily@acelab.com",
        role: "tutor",
        subjects: ["Mathematics", "Physics"],
        hourlyRate: 45,
        rating: 4.9,
        bio: "PhD in Physics with 5 years of tutoring experience. I specialize in helping students visualize complex concepts.",
    },
    {
        id: "t2",
        name: "James Wilson",
        email: "james@acelab.com",
        role: "tutor",
        subjects: ["English Literature", "History"],
        hourlyRate: 35,
        rating: 4.7,
        bio: "Oxford graduate passionate about literature and historical analysis. I help students improve their essay writing skills.",
    },
    {
        id: "t3",
        name: "Sarah Davis",
        email: "sarah@acelab.com",
        role: "tutor",
        subjects: ["Chemistry", "Biology"],
        hourlyRate: 40,
        rating: 4.8,
        bio: "Medical student with a knack for making science fun and accessible. Let's ace your exams together!",
    },
    {
        id: "t4",
        name: "Michael Brown",
        email: "michael@acelab.com",
        role: "tutor",
        subjects: ["Computer Science", "Mathematics"],
        hourlyRate: 50,
        rating: 5.0,
        bio: "Senior Software Engineer enjoying teaching coding and logic. Python, Java, and Calculus are my specialties.",
    }
]

export const MOCK_SESSIONS: Session[] = [
    {
        id: "1",
        subject: "Mathematics",
        tutorName: "Dr. Emily Chen",
        studentName: "Alex Johnson",
        date: "2024-04-15",
        time: "16:00",
        duration: "1h",
        status: "scheduled",
        level: "GCSE"
    },
    {
        id: "2",
        subject: "Physics",
        tutorName: "James Wilson",
        studentName: "Alex Johnson",
        date: "2024-04-18",
        time: "17:30",
        duration: "1.5h",
        status: "scheduled",
        level: "A-Level"
    },
    {
        id: "3",
        subject: "Chemistry",
        tutorName: "Sarah Davis",
        studentName: "Alex Johnson",
        date: "2024-04-10",
        time: "16:00",
        duration: "1h",
        status: "completed",
        level: "GCSE"
    },
    {
        id: "4",
        subject: "Computer Science",
        tutorName: "Michael Brown",
        studentName: "Sophie Miller",
        date: "2024-04-12",
        time: "10:00",
        duration: "1h",
        status: "completed",
        level: "A-Level"
    },
    {
        id: "5",
        subject: "Mathematics",
        tutorName: "Dr. Emily Chen",
        studentName: "Alex Johnson",
        date: "2024-03-01",
        time: "16:00",
        duration: "1h",
        status: "completed",
        level: "GCSE"
    }
];

export const MOCK_ATTENDANCE: AttendanceRecord[] = [
    { id: "at1", studentId: "s1", sessionId: "3", date: "2024-04-10", status: "present" },
    { id: "at2", studentId: "s1", sessionId: "5", date: "2024-03-01", status: "present" },
];

export const MOCK_STATS: Record<UserRole, Stat[]> = {
    student: [
        { label: "Upcoming Sessions", value: "2", change: "+1", trend: "up" },
        { label: "Total Hours", value: "24.5", change: "+2.5", trend: "up" },
        { label: "Average Grade", value: "A-", change: "Stable", trend: "neutral" },
    ],
    tutor: [
        { label: "Active Students", value: "12", change: "+3", trend: "up" },
        { label: "Hours Taught", value: "145", change: "+12", trend: "up" },
        { label: "Rating", value: "4.9/5", change: "+0.1", trend: "up" },
    ],
    parent: [
        { label: "Wallet Balance", value: "£120.00", change: "-£40", trend: "down" },
        { label: "Sessions This Month", value: "8", change: "+2", trend: "up" },
    ],
    admin: [
        { label: "Total Revenue", value: "£12,450", change: "+15%", trend: "up" },
        { label: "Active Tutors", value: "45", change: "+2", trend: "up" },
        { label: "New Students", value: "128", change: "+12%", trend: "up" },
    ],
};

export interface Course {
    id: string;
    name: string;
    tutorId: string;
    level: string;
    description?: string;
}

export interface Enrollment {
    id: string;
    studentId: string;
    courseId: string;
    enrollmentDate: string;
    status: "active" | "completed" | "dropped";
    progress?: number;
    grade?: string;
    attendance?: string;
}

export const MOCK_COURSES: Course[] = [
    {
        id: "c1",
        name: "Mathematics - Calculus",
        tutorId: "t1",
        level: "Advanced",
        description: "Advanced calculus covering limits, derivatives, and integrals."
    },
    {
        id: "c2",
        name: "Physics - Quantum Mechanics",
        tutorId: "t2",
        level: "Advanced",
        description: "Introduction to quantum mechanics and wave-particle duality."
    },
    {
        id: "c3",
        name: "Chemistry - Organic Chemistry",
        tutorId: "t3",
        level: "Intermediate",
        description: "Study of structure, properties, and reactions of organic compounds."
    },
    {
        id: "c4",
        name: "Computer Science - Algorithms",
        tutorId: "t4",
        level: "A-Level",
        description: "Fundamental algorithms and data structures."
    }
];

export const MOCK_ENROLLMENTS: Enrollment[] = [
    { id: "e1", studentId: "s1", courseId: "c1", enrollmentDate: "2024-01-15", status: "active" },
    { id: "e2", studentId: "s1", courseId: "c2", enrollmentDate: "2024-01-20", status: "active" },
    { id: "e3", studentId: "s1", courseId: "c3", enrollmentDate: "2024-02-01", status: "active" }
];

export interface Card {
    id: string;
    parentId: string;
    cardholderName: string;
    last4: string;
    expiryDate: string;
    brand: "visa" | "mastercard" | "amex";
}

export const MOCK_CARDS: Card[] = [
    {
        id: "card1",
        parentId: "p1",
        cardholderName: "Sarah Johnson",
        last4: "4242",
        expiryDate: "12/25",
        brand: "visa"
    }
];
