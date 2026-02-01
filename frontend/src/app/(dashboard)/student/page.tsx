import { MOCK_SESSIONS } from "@/lib/mock-data"
import { StatCard } from "@/components/shared/stat-card"
import { Clock, CheckCircle, Calendar, BookOpen, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function StudentDashboard() {
    const stats = [
        { label: "Total Classes", value: "48", change: "+12", trend: "up" as const },
        { label: "Attendance", value: "98%", change: "+2%", trend: "up" as const },
        { label: "Upcoming Classes", value: "2", trend: "neutral" as const },
    ]

    const upcomingClasses = MOCK_SESSIONS.filter(s => s.studentName === "Alex Johnson" && s.status === "scheduled")

    const history = [
        { id: 1, subject: "Mathematics", tutor: "Dr. Emily Chen", date: "Mar 10, 2024", duration: "1h", status: "Completed" },
        { id: 2, subject: "Physics", tutor: "James Wilson", date: "Mar 08, 2024", duration: "1.5h", status: "Completed" },
        { id: 3, subject: "Chemistry", tutor: "Sarah Davis", date: "Mar 05, 2024", duration: "1h", status: "Completed" },
        { id: 4, subject: "Mathematics", tutor: "Dr. Emily Chen", date: "Mar 01, 2024", duration: "1h", status: "Completed" },
    ]

    const upcomingExams = [
        { id: 1, subject: "Mathematics", topic: "Algebra & Geometry", date: "Apr 20, 2026", duration: "2h" },
        { id: 2, subject: "Physics", topic: "Quantum Mechanics", date: "Apr 25, 2026", duration: "1.5h" },
    ]

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                    <StatCard key={i} {...stat} />
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content: Classes & History */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Upcoming Classes with Join Now Button */}
                    <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-slate-900">Upcoming Classes</h3>
                            <button className="text-sm text-primary hover:underline">View Calendar</button>
                        </div>
                        <div className="divide-y divide-slate-100">
                            {upcomingClasses.map((session) => (
                                <div key={session.id} className="p-6 flex items-start justify-between hover:bg-slate-50 transition-colors">
                                    <div className="flex items-start space-x-4 flex-1">
                                        <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-xl flex flex-col items-center justify-center flex-shrink-0 border border-blue-100">
                                            <span className="text-xs font-bold uppercase">{new Date(session.date).toLocaleDateString('en-US', { month: 'short' })}</span>
                                            <span className="text-lg font-bold leading-none">{new Date(session.date).getDate()}</span>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-slate-900">{session.subject}</h4>
                                            <p className="text-sm text-slate-500">with {session.tutorName}</p>
                                            <div className="flex items-center text-sm font-medium text-slate-600 mt-1">
                                                <Clock size={14} className="mr-1 text-slate-400" /> {session.time}
                                            </div>
                                        </div>
                                    </div>
                                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                        Join Now
                                    </Button>
                                </div>
                            ))}
                            {upcomingClasses.length === 0 && (
                                <div className="p-8 text-center text-slate-500">
                                    No upcoming sessions scheduled.
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Class History Table */}
                    <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-slate-100">
                            <h3 className="text-lg font-semibold text-slate-900">Class History</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b">
                                    <tr>
                                        <th className="px-6 py-3 font-medium">Subject</th>
                                        <th className="px-6 py-3 font-medium">Tutor</th>
                                        <th className="px-6 py-3 font-medium">Date</th>
                                        <th className="px-6 py-3 font-medium">Duration</th>
                                        <th className="px-6 py-3 font-medium">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {history.map((item) => (
                                        <tr key={item.id} className="hover:bg-slate-50">
                                            <td className="px-6 py-4 font-medium text-slate-900">{item.subject}</td>
                                            <td className="px-6 py-4 text-slate-600">{item.tutor}</td>
                                            <td className="px-6 py-4 text-slate-600">{item.date}</td>
                                            <td className="px-6 py-4 text-slate-600">{item.duration}</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                                                    <CheckCircle size={12} className="mr-1" /> {item.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Upcoming Exams Section */}
                    <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-slate-900 flex items-center">
                                <FileText size={20} className="mr-2 text-amber-600" /> Upcoming Exams
                            </h3>
                        </div>
                        <div className="divide-y divide-slate-100">
                            {upcomingExams.map((exam) => (
                                <div key={exam.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                                    <div className="flex items-center space-x-4 flex-1">
                                        <div className="h-12 w-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 border border-amber-100">
                                            <FileText size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{exam.subject}</h4>
                                            <p className="text-sm text-slate-500">{exam.topic}</p>
                                            <p className="text-xs text-slate-400 mt-1">{exam.date} • {exam.duration}</p>
                                        </div>
                                    </div>
                                    <Button variant="outline" size="sm">
                                        View Details
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar: Weekly Schedule & Resources */}
                <div className="space-y-8">
                    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
                        <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                            <Calendar size={18} className="mr-2 text-primary" /> My Schedule
                        </h3>
                        <div className="space-y-3">
                            {upcomingClasses.map((session) => (
                                <div key={session.id} className="p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="font-semibold text-sm text-slate-900">{session.subject}</span>
                                        <span className="text-xs text-slate-500">{session.time}</span>
                                    </div>
                                    <p className="text-xs text-slate-600">{session.date}</p>
                                </div>
                            ))}
                            {upcomingClasses.length === 0 && (
                                <p className="text-sm text-slate-500 text-center py-4">No upcoming classes</p>
                            )}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-primary to-blue-700 rounded-xl shadow-lg p-6 text-white">
                        <div className="flex items-center mb-2">
                            <BookOpen size={20} className="mr-2" />
                            <h3 className="font-bold text-lg">Resources</h3>
                        </div>
                        <p className="text-blue-100 text-sm mb-4">Access notes, past papers, and study materials shared by your tutors.</p>
                        <a href="/student/resources">
                            <Button variant="secondary" className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-none">
                                View Resources
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
