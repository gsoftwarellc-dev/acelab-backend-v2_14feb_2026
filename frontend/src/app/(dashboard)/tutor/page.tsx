// import { MOCK_STATS, MOCK_SESSIONS } from "@/lib/mock-data"
import { StatCard } from "@/components/shared/stat-card"
import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TutorDashboard() {
    const stats = [
        { label: "Active Students", value: "12", change: "+3 new", trend: "up" as const },
        { label: "Hours Taught", value: "145", change: "+12 this week", trend: "up" as const },
        { label: "Pending Reports", value: "4", trend: "neutral" as const },
    ]

    const todayClasses = [
        { id: 1, time: "16:00", student: "Alex Johnson", subject: "Mathematics", level: "GCSE" },
        { id: 2, time: "17:30", student: "Sophie Miller", subject: "Physics", level: "A-Level" },
    ]

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                    <StatCard key={i} {...stat} />
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Column: Schedule & Tasks */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Today's Schedule */}
                    <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-slate-900 flex items-center">
                                <Calendar size={20} className="mr-2 text-primary" /> Today&apos;s Classes
                            </h3>
                            <span className="text-sm text-slate-500">{new Date().toLocaleDateString()}</span>
                        </div>
                        <div className="divide-y divide-slate-100">
                            {todayClasses.map((cls) => (
                                <div key={cls.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                                    <div className="flex items-center space-x-6">
                                        <span className="text-lg font-bold text-slate-700 w-16">{cls.time}</span>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{cls.student}</h4>
                                            <p className="text-sm text-slate-500">{cls.subject} • {cls.level}</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2">
                                        <Button size="sm" variant="outline">Reschedule</Button>
                                        <Button size="sm">Join Class</Button>
                                    </div>
                                </div>
                            ))}
                            {todayClasses.length === 0 && (
                                <div className="p-8 text-center text-slate-500">No classes scheduled for today.</div>
                            )}
                        </div>
                    </div>

                    {/* Class History / Recent */}
                    <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-slate-100">
                            <h3 className="text-lg font-semibold text-slate-900">Recent Sessions</h3>
                        </div>
                        <div className="p-6">
                            <p className="text-slate-500 text-sm italic">Showing last 5 completed sessions...</p>
                            {/* Mock table could go here, keeping it simple for now to avoid scroll fatigue */}
                        </div>
                    </div>
                </div>

                {/* Sidebar: Student List */}
                <div className="space-y-6">
                    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold text-slate-900">My Students</h3>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0"><ArrowRight size={16} /></Button>
                        </div>
                        <div className="space-y-4">
                            {["Alex Johnson", "Sophie Miller", "James Smith", "Emma Wilson", "Oliver Brown"].map((student, i) => (
                                <div key={i} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer group">
                                    <div className="flex items-center space-x-3">
                                        <div className="h-8 w-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-xs">
                                            {student.charAt(0)}
                                        </div>
                                        <span className="text-sm font-medium text-slate-700 group-hover:text-primary transition-colors">{student}</span>
                                    </div>
                                    <span className="text-xs text-slate-400">Year 10</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
