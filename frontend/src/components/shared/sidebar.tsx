"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "@/context/auth-context"
import { cn } from "@/lib/utils"
import {
    LayoutDashboard,
    Calendar,
    Users,
    LogOut,
    BookOpen,
    CreditCard,
    FileText,
    User,
    MessageSquare
} from "lucide-react"

interface SidebarProps {
    role: "student" | "parent" | "tutor" | "admin"
}

export function Sidebar({ role }: SidebarProps) {
    const pathname = usePathname()
    const { logout } = useAuth()

    const links = {
        student: [
            { href: "/student", label: "Dashboard", icon: LayoutDashboard },
            { href: "/student/schedule", label: "My Schedule", icon: Calendar },

            { href: "/student/exams", label: "Exams & Result", icon: FileText },
            { href: "/student/resources", label: "Resources", icon: BookOpen },
            { href: "/student/messages", label: "Messages", icon: MessageSquare },
            { href: "/student/profile", label: "Profile", icon: User },
        ],
        parent: [
            { href: "/parent", label: "Overview", icon: LayoutDashboard },
            { href: "/parent/children", label: "Children", icon: Users },
            { href: "/parent/messages", label: "Messages", icon: MessageSquare },
            { href: "/parent/billing", label: "Billing", icon: CreditCard },
            { href: "/parent/reports", label: "Progress Reports", icon: FileText },
        ],
        tutor: [
            { href: "/tutor", label: "Dashboard", icon: LayoutDashboard },
            { href: "/tutor/schedule", label: "My Schedule", icon: Calendar },
            { href: "/tutor/students", label: "My Students", icon: Users },
            { href: "/tutor/courses", label: "Courses", icon: BookOpen },
            { href: "/tutor/messages", label: "Messages", icon: MessageSquare },
            { href: "/tutor/earnings", label: "Earnings", icon: CreditCard },
        ],
        admin: [
            { href: "/admin", label: "Overview", icon: LayoutDashboard },
            { href: "/admin/performance", label: "View Performance", icon: FileText },
            { href: "/admin/users", label: "User Management", icon: Users },
            { href: "/admin/messages", label: "Messages", icon: MessageSquare },
            { href: "/admin/finance", label: "Finance", icon: CreditCard },
        ]
    }

    const currentLinks = links[role] || links.student

    return (
        <div className="w-64 bg-white border-r h-screen hidden md:flex flex-col fixed left-0 top-0">
            <div className="p-6 border-b">
                <Link href="/" className="flex items-center space-x-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/logo.png" alt="Acelab" className="h-8 w-auto object-contain" />
                    <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Acelab
                    </span>
                </Link>
            </div>

            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                {currentLinks.map((link) => {
                    const Icon = link.icon
                    const isActive = pathname === link.href

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                                isActive
                                    ? "bg-primary/10 text-primary"
                                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                            )}
                        >
                            <Icon size={18} />
                            <span>{link.label}</span>
                        </Link>
                    )
                })}
            </nav>

            <div className="p-4 border-t">
                <button
                    type="button"
                    onClick={() => logout()}
                    className="flex items-center space-x-3 w-full px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-50 rounded-lg transition-colors text-left"
                >
                    <LogOut size={18} />
                    <span>Sign Out</span>
                </button>
            </div>
        </div>
    )
}
