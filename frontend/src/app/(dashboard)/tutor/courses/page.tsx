import { BookOpen, Users, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function TutorCoursesPage() {
    const courses = [
        {
            id: 1,
            name: "Mathematics - Calculus",
            level: "Advanced",
            studentCount: 12,
            color: "from-blue-500 to-cyan-600",
            icon: "📐"
        },
        {
            id: 2,
            name: "Physics - Quantum Mechanics",
            level: "Advanced",
            studentCount: 8,
            color: "from-purple-500 to-pink-600",
            icon: "⚛️"
        },
        {
            id: 3,
            name: "Chemistry - Organic Chemistry",
            level: "Intermediate",
            studentCount: 6,
            color: "from-green-500 to-emerald-600",
            icon: "🧪"
        },
        {
            id: 4,
            name: "Mathematics - Algebra",
            level: "Intermediate",
            studentCount: 15,
            color: "from-amber-500 to-orange-600",
            icon: "📊"
        }
    ]

    const totalStudents = courses.reduce((sum, course) => sum + course.studentCount, 0)

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">My Courses</h1>
                <p className="text-slate-600">Manage your courses and view student enrollments</p>
            </div>

            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl p-6 text-white">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-semibold opacity-90">Total Courses</h3>
                        <BookOpen size={20} />
                    </div>
                    <p className="text-3xl font-bold">{courses.length}</p>
                    <p className="text-xs opacity-75 mt-1">Active courses</p>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-semibold opacity-90">Total Enrollments</h3>
                        <Users size={20} />
                    </div>
                    <p className="text-3xl font-bold">{totalStudents}</p>
                    <p className="text-xs opacity-75 mt-1">Across all courses</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-6 text-white">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-semibold opacity-90">Avg. per Course</h3>
                        <TrendingUp size={20} />
                    </div>
                    <p className="text-3xl font-bold">{Math.round(totalStudents / courses.length)}</p>
                    <p className="text-xs opacity-75 mt-1">Students per course</p>
                </div>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.map((course) => (
                    <Link key={course.id} href={`/tutor/courses/${course.id}`}>
                        <div className="group bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer">
                            <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="text-4xl">{course.icon}</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg group-hover:text-primary transition-colors">
                                                {course.name}
                                            </h3>
                                            <p className="text-sm text-slate-500">{course.level}</p>
                                        </div>
                                    </div>
                                    <ArrowRight className="text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all" size={20} />
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                    <div className="flex items-center text-slate-600">
                                        <Users size={16} className="mr-2" />
                                        <span className="text-sm font-medium">{course.studentCount} Students</span>
                                    </div>
                                    <div className={`px-3 py-1 bg-gradient-to-r ${course.color} text-white rounded-full text-xs font-bold`}>
                                        Active
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
