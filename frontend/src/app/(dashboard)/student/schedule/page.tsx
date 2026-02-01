import { MOCK_SESSIONS } from "@/lib/mock-data"
import { Calendar, Clock, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SchedulePage() {
    const upcomingClasses = MOCK_SESSIONS.filter(s => s.studentName === "Alex Johnson" && s.status === "scheduled")

    const upcomingExams = [
        { id: 1, subject: "Mathematics", topic: "Algebra & Geometry", date: "Apr 20, 2026", time: "10:00 AM", duration: "2h" },
        { id: 2, subject: "Physics", topic: "Quantum Mechanics", date: "Apr 25, 2026", time: "2:00 PM", duration: "1.5h" },
    ]

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">My Schedule</h1>
                <p className="text-slate-600">View your upcoming classes and exams</p>
            </div>

            {/* Upcoming Classes */}
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-blue-50 to-cyan-50">
                    <h2 className="text-xl font-bold text-slate-900 flex items-center">
                        <Calendar className="mr-2 text-blue-600" size={24} />
                        Upcoming Classes
                    </h2>
                </div>
                <div className="divide-y divide-slate-100">
                    {upcomingClasses.map((session) => (
                        <div key={session.id} className="p-6 flex items-start justify-between hover:bg-slate-50 transition-colors">
                            <div className="flex items-start space-x-4 flex-1">
                                <div className="h-14 w-14 bg-blue-50 text-blue-600 rounded-xl flex flex-col items-center justify-center flex-shrink-0 border border-blue-100">
                                    <span className="text-xs font-bold uppercase">{new Date(session.date).toLocaleDateString('en-US', { month: 'short' })}</span>
                                    <span className="text-lg font-bold leading-none">{new Date(session.date).getDate()}</span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-slate-900 text-lg">{session.subject}</h4>
                                    <p className="text-sm text-slate-500">with {session.tutorName}</p>
                                    <div className="flex items-center gap-4 mt-2">
                                        <span className="flex items-center text-sm font-medium text-slate-600">
                                            <Clock size={14} className="mr-1 text-slate-400" /> {session.time}
                                        </span>
                                        <span className="text-sm text-slate-500">{session.duration}</span>
                                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                                            {session.level}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                Join Now
                            </Button>
                        </div>
                    ))}
                    {upcomingClasses.length === 0 && (
                        <div className="p-12 text-center text-slate-500">
                            <Calendar className="w-12 h-12 mx-auto mb-3 text-slate-300" />
                            <p>No upcoming classes scheduled</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Upcoming Exams */}
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-amber-50 to-orange-50">
                    <h2 className="text-xl font-bold text-slate-900 flex items-center">
                        <FileText className="mr-2 text-amber-600" size={24} />
                        Upcoming Exams
                    </h2>
                </div>
                <div className="divide-y divide-slate-100">
                    {upcomingExams.map((exam) => (
                        <div key={exam.id} className="p-6 flex items-start justify-between hover:bg-slate-50 transition-colors">
                            <div className="flex items-start space-x-4 flex-1">
                                <div className="h-14 w-14 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 border border-amber-100">
                                    <FileText size={24} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-slate-900 text-lg">{exam.subject}</h4>
                                    <p className="text-sm text-slate-500 mb-2">{exam.topic}</p>
                                    <div className="flex items-center gap-4 text-sm text-slate-600">
                                        <span className="flex items-center">
                                            <Calendar size={14} className="mr-1" /> {exam.date}
                                        </span>
                                        <span className="flex items-center">
                                            <Clock size={14} className="mr-1" /> {exam.time}
                                        </span>
                                        <span className="px-2 py-1 bg-slate-100 rounded text-xs">
                                            {exam.duration}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <Button variant="outline" size="sm" className="hover:bg-amber-50 hover:border-amber-600">
                                View Details
                            </Button>
                        </div>
                    ))}
                    {upcomingExams.length === 0 && (
                        <div className="p-12 text-center text-slate-500">
                            <FileText className="w-12 h-12 mx-auto mb-3 text-slate-300" />
                            <p>No upcoming exams scheduled</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Weekly Calendar View (Optional Enhancement) */}
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                    <Calendar className="mr-2 text-primary" size={20} />
                    This Week at a Glance
                </h3>
                <div className="grid grid-cols-7 gap-2">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                        <div key={day} className="text-center">
                            <div className="text-xs font-semibold text-slate-500 mb-2">{day}</div>
                            <div className={`h-20 rounded-lg ${index === 1 ? 'bg-blue-100 border-2 border-blue-500' : 'bg-slate-50'} flex items-center justify-center`}>
                                {index === 1 && (
                                    <div className="text-xs">
                                        <div className="font-bold text-blue-700">2 classes</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
