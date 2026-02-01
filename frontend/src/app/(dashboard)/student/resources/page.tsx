import { BookOpen, Download, FileText, Video } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ResourcesPage() {
    const resources = [
        {
            id: 1,
            title: "Mathematics - Algebra Notes",
            tutor: "Dr. Emily Chen",
            subject: "Mathematics",
            type: "PDF",
            size: "2.4 MB",
            uploadedDate: "Mar 15, 2026",
            icon: FileText,
            color: "blue"
        },
        {
            id: 2,
            title: "Physics - Quantum Mechanics Lecture",
            tutor: "James Wilson",
            subject: "Physics",
            type: "Video",
            size: "145 MB",
            uploadedDate: "Mar 12, 2026",
            icon: Video,
            color: "purple"
        },
        {
            id: 3,
            title: "Chemistry - Periodic Table Study Guide",
            tutor: "Sarah Davis",
            subject: "Chemistry",
            type: "PDF",
            size: "1.8 MB",
            uploadedDate: "Mar 10, 2026",
            icon: FileText,
            color: "green"
        },
        {
            id: 4,
            title: "Mathematics - Past Exam Papers (2020-2025)",
            tutor: "Dr. Emily Chen",
            subject: "Mathematics",
            type: "ZIP",
            size: "5.2 MB",
            uploadedDate: "Mar 08, 2026",
            icon: FileText,
            color: "blue"
        }
    ]

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Study Resources</h1>
                <p className="text-slate-600">Access notes, past papers, and materials shared by your tutors</p>
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources.map((resource) => (
                    <div
                        key={resource.id}
                        className="group bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-xl bg-${resource.color}-50 text-${resource.color}-600 group-hover:scale-110 transition-transform`}>
                                <resource.icon size={24} />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">
                                    {resource.title}
                                </h3>
                                <p className="text-sm text-slate-500 mb-2">Shared by {resource.tutor}</p>
                                <div className="flex items-center gap-4 text-xs text-slate-400">
                                    <span className="px-2 py-1 bg-slate-100 rounded">{resource.type}</span>
                                    <span>{resource.size}</span>
                                    <span>{resource.uploadedDate}</span>
                                </div>
                            </div>
                            <Button size="sm" variant="outline" className="hover:bg-primary hover:text-white hover:border-primary">
                                <Download size={16} className="mr-1" /> Download
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State (if no resources) */}
            {resources.length === 0 && (
                <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-200">
                    <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">No Resources Yet</h3>
                    <p className="text-slate-500">Your tutors will share study materials here</p>
                </div>
            )}
        </div>
    )
}
