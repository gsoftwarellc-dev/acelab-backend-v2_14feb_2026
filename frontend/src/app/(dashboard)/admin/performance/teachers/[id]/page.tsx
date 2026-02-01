import { ArrowLeft, BookOpen, Users, Clock, Calendar } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TeacherDetailPage({ params }: { params: { id: string } }) {
    const teacher = {
        id: params.id,
        name: "Dr. Emily Chen",
        email: "emily@acelab.com",
        phone: "+1 (555) 987-6543",
        courses: [
            { name: "Mathematics - Calculus", students: 12, hours: 85 },
            { name: "Mathematics - Algebra", students: 15, hours: 60 }
        ],
        totalStudents: 15,
        totalHours: 145,
        weeklySchedule: [
            { day: "Monday", classes: 3, hours: "9:00 AM - 5:00 PM" },
            { day: "Tuesday", classes: 2, hours: "10:00 AM - 3:00 PM" },
            { day: "Wednesday", classes: 4, hours: "9:00 AM - 6:00 PM" },
            { day: "Friday", classes: 2, hours: "1:00 PM - 5:00 PM" },
        ],
        recentActivity: [
            { date: "Mar 18, 2026", course: "Mathematics - Calculus", student: "Alex Johnson", duration: "1h" },
            { date: "Mar 18, 2026", course: "Mathematics - Algebra", student: "Michael Lee", duration: "1.5h" },
            { date: "Mar 17, 2026", course: "Mathematics - Calculus", student: "Sarah Martinez", duration: "1h" },
        ]
    }

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-4">
                <Link href="/admin/performance/teachers">
                    <Button variant="outline" size="sm">
                        <ArrowLeft size={16} className="mr-2" /> Back to Teachers
                    </Button>
                </Link>
            </div>

            <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">{teacher.name}</h1>
                <p className="text-slate-600">{teacher.email} • {teacher.phone}</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-6 text-white">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-semibold opacity-90">Total Hours</h3>
                        <Clock size={20} />
                    </div>
                    <p className="text-3xl font-bold">{teacher.totalHours}h</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl p-6 text-white">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-semibold opacity-90">Students</h3>
                        <Users size={20} />
                    </div>
                    <p className="text-3xl font-bold">{teacher.totalStudents}</p>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-semibold opacity-90">Courses</h3>
                        <BookOpen size={20} />
                    </div>
                    <p className="text-3xl font-bold">{teacher.courses.length}</p>
                </div>
            </div>

            {/* Courses Teaching */}
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Courses Teaching</h2>
                <div className="space-y-4">
                    {teacher.courses.map((course, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                            <div>
                                <h4 className="font-semibold text-slate-900">{course.name}</h4>
                                <p className="text-sm text-slate-500">{course.students} students enrolled</p>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-slate-900">{course.hours}h</p>
                                <p className="text-xs text-slate-500">taught</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Weekly Schedule */}
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                    <Calendar className="mr-2" size={20} /> Weekly Schedule
                </h2>
                <div className="space-y-3">
                    {teacher.weeklySchedule.map((schedule, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 border border-slate-100 rounded-lg">
                            <div className="flex items-center gap-4">
                                <span className="font-bold text-slate-900 w-24">{schedule.day}</span>
                                <span className="text-sm text-slate-600">{schedule.hours}</span>
                            </div>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                                {schedule.classes} classes
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100">
                    <h2 className="text-xl font-bold text-slate-900">Recent Activity</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b">
                            <tr>
                                <th className="px-6 py-3 font-medium text-left">Date</th>
                                <th className="px-6 py-3 font-medium text-left">Course</th>
                                <th className="px-6 py-3 font-medium text-left">Student</th>
                                <th className="px-6 py-3 font-medium text-center">Duration</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {teacher.recentActivity.map((activity, idx) => (
                                <tr key={idx} className="hover:bg-slate-50">
                                    <td className="px-6 py-4 text-slate-900">{activity.date}</td>
                                    <td className="px-6 py-4 text-slate-600">{activity.course}</td>
                                    <td className="px-6 py-4 text-slate-600">{activity.student}</td>
                                    <td className="px-6 py-4 text-center text-slate-600">{activity.duration}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
