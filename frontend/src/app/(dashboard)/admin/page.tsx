// import { MOCK_STATS } from "@/lib/mock-data"
import { StatCard } from "@/components/shared/stat-card"
import { ShieldCheck, Users, MoreHorizontal, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AdminDashboard() {
    const stats = [
        { label: "Total Revenue", value: "£12,450", change: "+15% vs last month", trend: "up" as const },
        { label: "Active Tutors", value: "45", change: "+2 this week", trend: "up" as const },
        { label: "New Students", value: "128", change: "+12% growth", trend: "up" as const },
    ]

    const users = [
        { id: 1, name: "Alex Johnson", role: "Student", status: "Active", joined: "Mar 1, 2024" },
        { id: 2, name: "Dr. Emily Chen", role: "Tutor", status: "Verified", joined: "Feb 15, 2024" },
        { id: 3, name: "Sarah Johnson", role: "Parent", status: "Active", joined: "Mar 1, 2024" },
        { id: 4, name: "James Wilson", role: "Tutor", status: "Pending", joined: "Yesterday" },
        { id: 5, name: "Admin User", role: "Admin", status: "Active", joined: "Jan 1, 2024" },
    ]

    return (
        <div className="space-y-8">
            <div className="p-4 bg-slate-900 text-white rounded-xl flex items-center justify-between shadow-lg">
                <div className="flex items-center space-x-4">
                    <div className="p-2 bg-white/10 rounded-lg">
                        <ShieldCheck size={24} />
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg">System Status: Operational</h2>
                        <p className="text-slate-400 text-sm">All systems running smoothly. Last check 2 mins ago.</p>
                    </div>
                </div>
                <Button size="sm" variant="secondary" className="bg-white/10 text-white hover:bg-white/20 border-none">
                    View Logs
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                    <StatCard key={i} {...stat} />
                ))}
            </div>

            <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900 flex items-center">
                        <Users size={20} className="mr-2 text-primary" /> User Management
                    </h3>
                    <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                            <Download size={16} className="mr-2" /> Export
                        </Button>
                        <Button size="sm">Add User</Button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b">
                            <tr>
                                <th className="px-6 py-3 font-medium">Name</th>
                                <th className="px-6 py-3 font-medium">Role</th>
                                <th className="px-6 py-3 font-medium">Status</th>
                                <th className="px-6 py-3 font-medium">Joined</th>
                                <th className="px-6 py-3 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-slate-50">
                                    <td className="px-6 py-4 font-medium text-slate-900">{user.name}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium 
                                    ${user.role === 'Admin' ? 'bg-purple-100 text-purple-700' :
                                                user.role === 'Tutor' ? 'bg-blue-100 text-blue-700' :
                                                    user.role === 'Parent' ? 'bg-orange-100 text-orange-700' :
                                                        'bg-slate-100 text-slate-700'}`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium 
                                    ${user.status === 'Active' || user.status === 'Verified' ? 'bg-green-100 text-green-700' :
                                                'bg-yellow-100 text-yellow-700'}`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-slate-500">{user.joined}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-slate-400 hover:text-slate-600">
                                            <MoreHorizontal size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-4 border-t border-slate-100 bg-slate-50 text-center text-xs text-slate-500">
                    Showing 5 of 128 users
                </div>
            </div>
        </div>
    )
}
