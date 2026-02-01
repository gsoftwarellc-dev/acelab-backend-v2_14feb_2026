import MessagesInterface from "@/components/shared/messages-interface"
import { MOCK_USERS, MOCK_ENROLLMENTS, MOCK_COURSES, MOCK_TUTORS } from "@/lib/mock-data"

export default function StudentMessagesPage() {
    const studentId = MOCK_USERS.student.id
    const enrollments = MOCK_ENROLLMENTS.filter(e => e.studentId === studentId && e.status === "active")

    // Get unique tutors from enrolled courses
    const contacts = enrollments.map((enrollment, index) => {
        const course = MOCK_COURSES.find(c => c.id === enrollment.courseId)
        const tutor = MOCK_TUTORS.find(t => t.id === course?.tutorId)

        if (!course || !tutor) return null

        return {
            id: index + 1, // keeping simple number IDs for the UI interface requirement
            name: tutor.name,
            role: `Teacher (${course.name})`,
            lastMessage: `Welcome to ${course.name}! Let me know if you have questions.`,
            time: "09:00 AM",
            unread: 0,
            online: true
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }).filter(Boolean) as any[]

    return <MessagesInterface contacts={contacts} />
}
