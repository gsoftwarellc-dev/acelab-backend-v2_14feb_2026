import MessagesInterface from "@/components/shared/messages-interface"
import { MOCK_USERS } from "@/lib/mock-data"

export default function ParentMessagesPage() {
    // convert record to array and filter for admins
    const admins = Object.values(MOCK_USERS).filter(user => user.role === "admin")

    const contacts = admins.map((admin, index) => ({
        id: index + 1,
        name: admin.name,
        role: "Administrator",
        lastMessage: "Welcome to Acelab! How can we help you today?",
        time: "Now",
        unread: 0,
        online: true
    }))

    return <MessagesInterface contacts={contacts} />
}
