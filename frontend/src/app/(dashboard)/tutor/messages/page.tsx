"use client"

import { useState, useEffect } from "react"
import MessagesInterface from "@/components/shared/messages-interface"

interface Contact {
    id: number
    name: string
    role: string
    avatar?: string
    lastMessage: string
    time: string
    unread: number
    online: boolean
}

export default function TutorMessagesPage() {
    const [contacts, setContacts] = useState<Contact[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const res = await fetch('http://127.0.0.1:8000/api/messages/contacts')
                if (res.ok) {
                    const data = await res.json()
                    setContacts(data)
                }
            } catch (error) {
                console.error("Failed to load contacts", error)
            } finally {
                setLoading(false)
            }
        }
        fetchContacts()
    }, [])

    if (loading) return <div className="p-12 text-center text-slate-500">Loading chats...</div>

    if (contacts.length === 0) {
        return (
            <div className="p-12 text-center text-slate-500">
                <h3 className="text-lg font-bold text-slate-800">No Messages Yet</h3>
                <p>Start a conversation from your Student List.</p>
            </div>
        )
    }

    return <MessagesInterface contacts={contacts} />
}
