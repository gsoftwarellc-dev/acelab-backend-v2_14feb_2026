"use client"

import { Quote } from "lucide-react"

export function Testimonials() {
    const testimonials = [
        { quote: "My grades improved by two letter grades in one semester. The tutors are amazing!", author: "Sarah M.", role: "Student" },
        { quote: "Finally found a platform that understands my child's learning style. Highly recommend.", author: "James L.", role: "Parent" },
        { quote: "Flexible schedule and supportive students. Best tutoring platform I've worked with.", author: "Dr. Emily R.", role: "Tutor" },
    ]

    return (
        <section id="testimonials" className="py-24 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Success Stories</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">See what students, parents, and tutors are saying about Acelab.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                            <Quote className="w-10 h-10 text-primary/30 mb-4" />
                            <p className="text-slate-700 mb-6">&ldquo;{t.quote}&rdquo;</p>
                            <div>
                                <div className="font-semibold text-slate-900">{t.author}</div>
                                <div className="text-sm text-slate-500">{t.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
