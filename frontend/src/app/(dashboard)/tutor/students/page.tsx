"use client"

import { useState, useEffect } from "react"
import { BookOpen, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Student {
    id: number;
    name: string;
    email: string;
    totalClasses: number;
    attendance: string;
    subjects: string[];
}

export default function TutorStudentsPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [students, setStudents] = useState<Student[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const res = await fetch('http://127.0.0.1:8000/api/tutor/students')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setStudents(data)
            } catch (error) {
                console.error("Error fetching students:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchStudents()
    }, [])

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase())
    )

    if (loading) {
        return <div className="p-8 text-center text-slate-500">Loading students...</div>
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">My Students</h1>
                <p className="text-slate-600">View all your enrolled students (Fed from Laravel DB)</p>
            </div>

            {/* Search */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input
                    type="text"
                    placeholder="Search students by name..."
                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Students List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredStudents.map((student) => (
                    <div key={student.id} className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center space-x-3">
                                <div className="h-12 w-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                    {student.name.split(' ').map((n: string) => n[0]).join('')}
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">{student.name}</h3>
                                    <p className="text-sm text-slate-500">{student.totalClasses} classes completed</p>
                                </div>
                            </div>
                            {/* Link to detail page */}
                            <Link href={`/tutor/students/${student.id}`}>
                                <Button size="sm" variant="outline">
                                    View Profile
                                </Button>
                            </Link>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center text-sm text-slate-600">
                                <BookOpen size={14} className="mr-2 text-slate-400" />
                                <div className="flex flex-wrap gap-1">
                                    {student.subjects.map((subject: string, idx: number) => (
                                        <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                                            {subject}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-sm text-slate-500">Attendance</span>
                            <span className="text-sm font-bold text-green-600">{student.attendance}</span>
                        </div>
                    </div>
                ))}

                {filteredStudents.length === 0 && (
                    <div className="col-span-1 md:col-span-2 text-center py-12 text-slate-500">
                        No students found matching &quot;{searchTerm}&quot;
                    </div>
                )}
            </div>
        </div>
    )
}
