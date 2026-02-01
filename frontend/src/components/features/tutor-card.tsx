import Link from "next/link"
import { Star, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { User } from "@/lib/mock-data"

interface TutorCardProps {
    tutor: User
}

export function TutorCard({ tutor }: TutorCardProps) {
    return (
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
                <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center text-2xl font-bold text-slate-400">
                            {tutor.avatar ? (
                                <img src={tutor.avatar} alt={tutor.name} className="h-full w-full rounded-full object-cover" />
                            ) : (
                                tutor.name.charAt(0)
                            )}
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-slate-900">{tutor.name}</h3>
                            <div className="flex items-center text-sm text-yellow-500 mb-1">
                                <Star size={14} fill="currentColor" className="mr-1" />
                                <span className="font-semibold">{tutor.rating}</span>
                                <span className="text-slate-400 font-normal ml-1">(24 reviews)</span>
                            </div>
                            <p className="text-sm text-slate-500">{tutor.subjects?.join(", ")}</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <span className="block text-xl font-bold text-slate-900">£{tutor.hourlyRate}</span>
                        <span className="text-xs text-slate-500">/hour</span>
                    </div>
                </div>

                <div className="mt-4">
                    <p className="text-sm text-slate-600 line-clamp-2">{tutor.bio}</p>
                </div>

                <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-50">
                    <div className="flex space-x-4 text-xs text-slate-500">
                        <span className="flex items-center"><MapPin size={12} className="mr-1" /> Online</span>
                        <span className="flex items-center"><Clock size={12} className="mr-1" /> Available Today</span>
                    </div>
                    <Link href={`/tutor/${tutor.id}`}>
                        <Button size="sm">View Profile</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
