import { MOCK_USERS } from "@/lib/mock-data"
import { UserRole } from "@/lib/mock-data"
import { Bell } from "lucide-react"

interface DashboardHeaderProps {
    role: UserRole
}

export function DashboardHeader({ role }: DashboardHeaderProps) {
    const user = MOCK_USERS[role]

    return (
        <header className="h-16 bg-white border-b flex items-center justify-between px-6 sticky top-0 z-10">
            <h2 className="text-lg font-semibold text-slate-800 capitalize">{role} Dashboard</h2>

            <div className="flex items-center space-x-4">
                <button className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-50 relative">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                <div className="flex items-center space-x-3 pl-4 border-l">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-medium text-slate-900">{user.name}</p>
                        <p className="text-xs text-slate-500 capitalize">{user.role}</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                        {user.name.charAt(0)}
                    </div>
                </div>
            </div>
        </header>
    )
}
