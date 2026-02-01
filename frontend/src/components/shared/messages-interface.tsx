"use client"

import { useState, useEffect, useRef } from "react"
import { Search, Send, Paperclip, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"

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

interface Message {
    id: number
    senderId: number | "me"
    text: string
    time: string
    isMe: boolean
}

interface MessagesProps {
    contacts: Contact[]
}

export default function MessagesInterface({ contacts }: MessagesProps) {
    const [selectedContact, setSelectedContact] = useState<Contact | null>(contacts[0] || null)
    const [messageInput, setMessageInput] = useState("")
    const [messages, setMessages] = useState<Message[]>([])
    const [loading, setLoading] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    // Scroll to bottom when messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    // Load messages when contact changes
    useEffect(() => {
        if (selectedContact) {
            fetchMessages(selectedContact.id)
        }
    }, [selectedContact])

    const fetchMessages = async (userId: number) => {
        setLoading(true)
        try {
            const res = await fetch(`http://127.0.0.1:8000/api/messages/${userId}`)
            if (res.ok) {
                const data = await res.json()
                setMessages(data)
            }
        } catch (error) {
            console.error("Failed to load messages", error)
        } finally {
            setLoading(false)
        }
    }

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!messageInput.trim() || !selectedContact) return

        const tempId = Date.now();
        const optimisticMessage: Message = {
            id: tempId,
            senderId: "me",
            text: messageInput,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isMe: true
        }

        // Optimistic UI update
        setMessages([...messages, optimisticMessage])
        setMessageInput("")

        try {
            const res = await fetch('http://127.0.0.1:8000/api/messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    receiver_id: selectedContact.id,
                    content: optimisticMessage.text
                })
            })

            if (!res.ok) {
                // Revert on failure (simplified)
                console.error("Failed to send")
            }
        } catch (error) {
            console.error("Error sending message", error)
        }
    }

    return (
        <div className="h-[calc(100vh-120px)] bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden flex">
            {/* Contacts Sidebar */}
            <div className="w-80 border-r border-slate-100 flex flex-col">
                <div className="p-4 border-b border-slate-100">
                    <h2 className="text-xl font-bold text-slate-900 mb-4">Messages</h2>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input
                            type="text"
                            placeholder="Search contacts..."
                            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {contacts.map((contact) => (
                        <div
                            key={contact.id}
                            onClick={() => setSelectedContact(contact)}
                            className={`p-4 flex items-center space-x-3 cursor-pointer hover:bg-slate-50 transition-colors ${selectedContact?.id === contact.id ? "bg-blue-50" : ""
                                }`}
                        >
                            <div className="relative">
                                <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                                    {contact.name.charAt(0)}
                                </div>
                                {contact.online && (
                                    <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></div>
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-semibold text-slate-900 truncate">{contact.name}</h3>
                                    <span className="text-xs text-slate-400">{contact.time}</span>
                                </div>
                                <p className="text-xs text-slate-500 truncate">{contact.role}</p>
                                <div className="flex justify-between items-center mt-1">
                                    <p className="text-sm text-slate-600 truncate">{contact.lastMessage}</p>
                                    {contact.unread > 0 && (
                                        <span className="h-5 w-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
                                            {contact.unread}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Area */}
            {selectedContact ? (
                <div className="flex-1 flex flex-col">
                    {/* Chat Header */}
                    <div className="p-4 border-b border-slate-100 flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                                {selectedContact.name.charAt(0)}
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900">{selectedContact.name}</h3>
                                <p className="text-xs text-green-600 flex items-center">
                                    {selectedContact.online ? "Online" : "Offline"}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 text-slate-400">
                            <Button variant="ghost" size="icon"><MoreVertical size={20} /></Button>
                        </div>
                    </div>

                    {/* Messages List */}
                    <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50">
                        {loading ? (
                            <div className="text-center text-slate-400 mt-4">Loading messages...</div>
                        ) : (
                            messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[70%] rounded-2xl p-4 ${msg.isMe
                                            ? "bg-blue-600 text-white rounded-tr-none"
                                            : "bg-white border border-slate-100 text-slate-800 rounded-tl-none"
                                            }`}
                                    >
                                        <p className="text-sm">{msg.text}</p>
                                        <p
                                            className={`text-xs mt-1 text-right ${msg.isMe ? "text-blue-200" : "text-slate-400"
                                                }`}
                                        >
                                            {msg.time}
                                        </p>
                                    </div>
                                </div>
                            ))
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white border-t border-slate-100">
                        <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                            <Button type="button" variant="ghost" size="icon" className="text-slate-400">
                                <Paperclip size={20} />
                            </Button>
                            <input
                                type="text"
                                value={messageInput}
                                onChange={(e) => setMessageInput(e.target.value)}
                                placeholder="Type a message..."
                                className="flex-1 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                                <Send size={18} />
                            </Button>
                        </form>
                    </div>
                </div>
            ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-slate-400">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                        <Send size={32} />
                    </div>
                    <p>Select a contact to start messaging</p>
                </div>
            )}
        </div>
    )
}
