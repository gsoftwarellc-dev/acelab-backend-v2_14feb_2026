"use client"

import { useState } from "react"
import { StatCard } from "@/components/shared/stat-card"
import { Button } from "@/components/ui/button"
import { PlusCircle, Calendar, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ParentDashboard() {
    const [selectedChild, setSelectedChild] = useState("Alex")

    const stats = [
        { label: "Wallet Balance", value: "£120.00", change: "-£40 last week", trend: "down" as const },
        { label: "Total Sessions", value: "24", change: "+2 this month", trend: "up" as const },
        { label: "Reports Available", value: "3", trend: "neutral" as const },
    ]

    const children = [
        { id: "c1", name: "Alex", grade: "Year 10", attendance: "96%", nextClass: "Math (Tomorrow)" },
        { id: "c2", name: "Sophie", grade: "Year 8", attendance: "100%", nextClass: "English (Fri)" },
    ]

    const activeChild = children.find(c => c.name === selectedChild)

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-slate-800">Parent Overview</h1>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" /> Top Up Wallet
                </Button>
            </div>

            {/* Child Selector */}
            <div className="flex space-x-2 border-b border-slate-200">
                {children.map(child => (
                    <button
                        key={child.id}
                        onClick={() => setSelectedChild(child.name)}
                        className={cn(
                            "px-6 py-3 font-medium text-sm border-b-2 transition-colors",
                            selectedChild === child.name
                                ? "border-primary text-primary"
                                : "border-transparent text-slate-500 hover:text-slate-700"
                        )}
                    >
                        {child.name}
                    </button>
                ))}
                <button className="px-6 py-3 font-medium text-sm text-slate-400 hover:text-primary flex items-center">
                    <PlusCircle size={14} className="mr-1" /> Add Child
                </button>
            </div>

            {/* Main Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                    <StatCard key={i} {...stat} />
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Child Specific Details */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-semibold text-slate-900">
                                Updates for <span className="text-primary">{selectedChild}</span>
                            </h3>
                            <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{activeChild?.grade}</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            <div className="p-4 bg-green-50 rounded-xl border border-green-100 flex items-center">
                                <div className="h-10 w-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mr-4">
                                    <CheckCircle size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-green-600 font-bold uppercase">Attendance</p>
                                    <p className="text-xl font-bold text-slate-900">{activeChild?.attendance}</p>
                                </div>
                            </div>
                            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 flex items-center">
                                <div className="h-10 w-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-4">
                                    <Calendar size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-blue-600 font-bold uppercase">Next Class</p>
                                    <p className="text-sm font-bold text-slate-900">{activeChild?.nextClass}</p>
                                </div>
                            </div>
                        </div>

                        <h4 className="font-semibold text-slate-900 mb-4">Recent Activity</h4>
                        <div className="space-y-4">
                            <div className="flex items-start p-4 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-100">
                                <div className="h-2 w-2 mt-2 rounded-full bg-blue-500 mr-4 flex-shrink-0"></div>
                                <div>
                                    <p className="font-medium text-slate-900">Completed: Math Session</p>
                                    <p className="text-sm text-slate-500 mb-1">Yesterday • 4:00 PM</p>
                                    <p className="text-xs text-slate-400">Tutor: Dr. Emily Chen</p>
                                </div>
                                <span className="ml-auto font-bold text-slate-900">-£40.00</span>
                            </div>
                            <div className="flex items-start p-4 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-100">
                                <div className="h-2 w-2 mt-2 rounded-full bg-purple-500 mr-4 flex-shrink-0"></div>
                                <div>
                                    <p className="font-medium text-slate-900">New Homework Assigned</p>
                                    <p className="text-sm text-slate-500 mb-1">Physics: Forces Worksheet</p>
                                    <button className="text-xs text-primary hover:underline">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Side Panel: Tutors */}
                <div className="space-y-6">
                    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
                        <h3 className="text-lg font-bold text-slate-900 mb-4">Your Tutors</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="h-10 w-10 rounded-full bg-slate-200"></div>
                                <div className="flex-1">
                                    <p className="font-medium text-slate-900">Dr. Emily Chen</p>
                                    <p className="text-xs text-slate-500">Mathematics</p>
                                </div>
                                <Button size="sm" variant="outline" className="h-8">Message</Button>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="h-10 w-10 rounded-full bg-slate-200"></div>
                                <div className="flex-1">
                                    <p className="font-medium text-slate-900">James Wilson</p>
                                    <p className="text-xs text-slate-500">Physics</p>
                                </div>
                                <Button size="sm" variant="outline" className="h-8">Message</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
