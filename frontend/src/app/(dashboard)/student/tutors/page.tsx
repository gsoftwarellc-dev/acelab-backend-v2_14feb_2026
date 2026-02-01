"use client"

import { useState } from "react"
import { MOCK_TUTORS } from "@/lib/mock-data"
import { TutorCard } from "@/components/features/tutor-card"
import { Search, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FindTutorPage() {
    const [searchTerm, setSearchTerm] = useState("")

    const filteredTutors = MOCK_TUTORS.filter(tutor =>
        tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tutor.subjects?.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
    )

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Find a Tutor</h1>
                    <p className="text-slate-500">Browse our expert tutors and book your session.</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search by subject or name..."
                        className="w-full h-12 pl-10 pr-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <Button variant="outline" className="h-12 px-6">
                    <SlidersHorizontal size={18} className="mr-2" /> Filters
                </Button>
            </div>

            {filteredTutors.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredTutors.map(tutor => (
                        <TutorCard key={tutor.id} tutor={tutor} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-200">
                    <p className="text-slate-500">No tutors found matching your search.</p>
                    <Button variant="link" onClick={() => setSearchTerm("")} className="mt-2 text-primary">Clear Filters</Button>
                </div>
            )}
        </div>
    )
}
