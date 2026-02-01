import { FileText, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ExamsPage() {
    const upcomingExams = [
        {
            id: 1,
            subject: "Mathematics",
            topic: "Algebra & Geometry",
            date: "Apr 20, 2026",
            time: "10:00 AM",
            duration: "2 hours",
            status: "upcoming"
        },
        {
            id: 2,
            subject: "Physics",
            topic: "Quantum Mechanics",
            date: "Apr 25, 2026",
            time: "2:00 PM",
            duration: "1.5 hours",
            status: "upcoming"
        }
    ]

    const pastResults = [
        {
            id: 1,
            subject: "Chemistry",
            topic: "Organic Chemistry",
            date: "Mar 15, 2026",
            score: "92%",
            grade: "A",
            status: "passed"
        },
        {
            id: 2,
            subject: "Mathematics",
            topic: "Calculus",
            date: "Mar 10, 2026",
            score: "88%",
            grade: "A-",
            status: "passed"
        },
        {
            id: 3,
            subject: "English Literature",
            topic: "Shakespearean Analysis",
            date: "Mar 05, 2026",
            score: "95%",
            grade: "A+",
            status: "passed"
        }
    ]

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Exams & Results</h1>
                <p className="text-slate-600">Track your upcoming exams and view past results</p>
            </div>

            {/* Upcoming Exams */}
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-amber-50 to-orange-50">
                    <h2 className="text-xl font-bold text-slate-900 flex items-center">
                        <Clock className="mr-2 text-amber-600" size={24} />
                        Upcoming Exams
                    </h2>
                </div>
                <div className="divide-y divide-slate-100">
                    {upcomingExams.map((exam) => (
                        <div key={exam.id} className="p-6 hover:bg-slate-50 transition-colors">
                            <div className="flex items-start justify-between">
                                <div className="flex items-start space-x-4 flex-1">
                                    <div className="h-14 w-14 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <FileText size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-slate-900 mb-1">{exam.subject}</h3>
                                        <p className="text-sm text-slate-600 mb-2">{exam.topic}</p>
                                        <div className="flex flex-wrap gap-3 text-sm text-slate-500">
                                            <span className="flex items-center">
                                                <Clock size={14} className="mr-1" /> {exam.date} at {exam.time}
                                            </span>
                                            <span className="px-2 py-1 bg-slate-100 rounded text-xs">
                                                {exam.duration}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <Button className="bg-amber-600 hover:bg-amber-700">
                                    View Details
                                </Button>
                            </div>
                        </div>
                    ))}
                    {upcomingExams.length === 0 && (
                        <div className="p-12 text-center text-slate-500">
                            <Clock className="w-12 h-12 mx-auto mb-3 text-slate-300" />
                            <p>No upcoming exams scheduled</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Past Results */}
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-green-50 to-emerald-50">
                    <h2 className="text-xl font-bold text-slate-900 flex items-center">
                        <CheckCircle className="mr-2 text-green-600" size={24} />
                        Past Results
                    </h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b">
                            <tr>
                                <th className="px-6 py-3 font-medium text-left">Subject</th>
                                <th className="px-6 py-3 font-medium text-left">Topic</th>
                                <th className="px-6 py-3 font-medium text-left">Date</th>
                                <th className="px-6 py-3 font-medium text-center">Score</th>
                                <th className="px-6 py-3 font-medium text-center">Grade</th>
                                <th className="px-6 py-3 font-medium text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {pastResults.map((result) => (
                                <tr key={result.id} className="hover:bg-slate-50">
                                    <td className="px-6 py-4 font-medium text-slate-900">{result.subject}</td>
                                    <td className="px-6 py-4 text-slate-600">{result.topic}</td>
                                    <td className="px-6 py-4 text-slate-600">{result.date}</td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="font-bold text-slate-900">{result.score}</span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold
                                            ${result.grade.startsWith('A') ? 'bg-green-100 text-green-700' :
                                                result.grade.startsWith('B') ? 'bg-blue-100 text-blue-700' :
                                                    'bg-slate-100 text-slate-700'}`}>
                                            {result.grade}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                                            <CheckCircle size={12} className="mr-1" /> Passed
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Statistics Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-semibold opacity-90">Average Score</h3>
                        <CheckCircle size={20} />
                    </div>
                    <p className="text-3xl font-bold">91.7%</p>
                    <p className="text-xs opacity-75 mt-1">Above class average</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl p-6 text-white">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-semibold opacity-90">Exams Taken</h3>
                        <FileText size={20} />
                    </div>
                    <p className="text-3xl font-bold">{pastResults.length}</p>
                    <p className="text-xs opacity-75 mt-1">This semester</p>
                </div>
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-6 text-white">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-semibold opacity-90">Upcoming</h3>
                        <Clock size={20} />
                    </div>
                    <p className="text-3xl font-bold">{upcomingExams.length}</p>
                    <p className="text-xs opacity-75 mt-1">Next 30 days</p>
                </div>
            </div>
        </div>
    )
}
