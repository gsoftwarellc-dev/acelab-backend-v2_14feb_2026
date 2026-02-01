import { Users, GraduationCap } from "lucide-react"
import Link from "next/link"

export default function PerformancePage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">View Performance</h1>
                <p className="text-slate-600">Track student and teacher performance metrics</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Student Performance */}
                <Link href="/admin/performance/students">
                    <div className="group bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-8 text-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                        <div className="flex items-center justify-between mb-6">
                            <Users size={48} className="opacity-80" />
                            <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                →
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold mb-2">Student Performance</h2>
                        <p className="text-blue-100">View detailed analytics for all students including attendance, courses, and activity</p>
                    </div>
                </Link>

                {/* Teacher Performance */}
                <Link href="/admin/performance/teachers">
                    <div className="group bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 text-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                        <div className="flex items-center justify-between mb-6">
                            <GraduationCap size={48} className="opacity-80" />
                            <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                →
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold mb-2">Teacher Performance</h2>
                        <p className="text-purple-100">Monitor teacher metrics including courses taught, hours, and schedules</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
