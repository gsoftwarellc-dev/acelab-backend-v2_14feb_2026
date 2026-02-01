"use client"

import { usePathname } from "next/navigation"
import { Sidebar } from "@/components/shared/sidebar"
import { DashboardHeader } from "@/components/shared/dashboard-header"
import { UserRole } from "@/lib/mock-data"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()

    // Simple role detection based on URL for demo purposes
    // In a real app, this would come from auth context
    const role = pathname.split('/')[1] as UserRole

    return (
        <div className="min-h-screen bg-slate-50">
            <Sidebar role={role} />
            <div className="md:ml-64 min-h-screen flex flex-col">
                <DashboardHeader role={role} />
                <main className="flex-1 p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}
