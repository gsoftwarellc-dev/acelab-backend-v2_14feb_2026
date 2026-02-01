import MessagesInterface from "@/components/shared/messages-interface"

export default function AdminMessagesPage() {
    const contacts = [
        // Parents
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Parent",
            lastMessage: "I need help with the billing statement.",
            time: "10:45 AM",
            unread: 2,
            online: true
        },
        {
            id: 4,
            name: "Michael Brown",
            role: "Parent",
            lastMessage: "Thanks for the update.",
            time: "2 days ago",
            unread: 0,
            online: false
        },
        // Teachers
        {
            id: 2,
            name: "Dr. Emily Chen",
            role: "Teacher",
            lastMessage: "Reporting a technical issue with Zoom.",
            time: "09:00 AM",
            unread: 0,
            online: true
        },
        {
            id: 5,
            name: "James Wilson",
            role: "Teacher",
            lastMessage: "Requesting leave for next Friday.",
            time: "Yesterday",
            unread: 1,
            online: false
        },
        // Students
        {
            id: 3,
            name: "Alex Johnson",
            role: "Student",
            lastMessage: "Can I change my elective subject?",
            time: "Yesterday",
            unread: 0,
            online: false
        },
        {
            id: 6,
            name: "Sophie Miller",
            role: "Student",
            lastMessage: "I cannot access the new course.",
            time: "3 days ago",
            unread: 0,
            online: true
        }
    ]

    return <MessagesInterface contacts={contacts} />
}
