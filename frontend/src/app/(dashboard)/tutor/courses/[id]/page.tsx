"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Users, Calendar } from "lucide-react"

export default function TutorCourseDetailPage() {
    const params = useParams()
    const id = params.id as string

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center space-x-4">
                <Link href="/tutor/courses">
                    <Button variant="ghost" size="icon">
                        <ArrowLeft size={20} />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Course Details</h1>
                    <p className="text-slate-500">Course ID: {id}</p>
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                        <BookOpen className="w-7 h-7 text-white" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-slate-900">Course #{id}</h2>
                        <p className="text-slate-500">View enrollments and schedule</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-slate-600">
                    <div className="flex items-center gap-2">
                        <Users size={18} />
                        <span>Enrolled students</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar size={18} />
                        <span>Schedule</span>
                    </div>
                </div>
                <p className="mt-6 text-slate-500 text-sm">Course detail content can be expanded here (enrollments, sessions, materials).</p>
            </div>
        </div>
    )
}
