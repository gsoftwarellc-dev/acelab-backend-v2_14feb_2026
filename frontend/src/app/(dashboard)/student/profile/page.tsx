"use client"

import { useState } from "react"
import { Camera, Calendar, Edit2, Save } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProfilePage() {
    const [isEditing, setIsEditing] = useState(false)
    const [profileData, setProfileData] = useState({
        name: "Alex Johnson",
        joinDate: "January 2025",
        bio: "Passionate about mathematics and science. Currently preparing for university entrance exams and looking to excel in calculus and physics.",
        avatar: "/logo.png" // Default avatar
    })

    const handleSave = () => {
        setIsEditing(false)
        // Here you would typically save to a backend
        console.log("Profile saved:", profileData)
    }

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setProfileData({ ...profileData, avatar: reader.result as string })
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">My Profile</h1>
                    <p className="text-slate-600">Manage your personal information and preferences</p>
                </div>
                <Button
                    onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                    className={isEditing ? "bg-green-600 hover:bg-green-700" : ""}
                >
                    {isEditing ? (
                        <>
                            <Save size={16} className="mr-2" /> Save Changes
                        </>
                    ) : (
                        <>
                            <Edit2 size={16} className="mr-2" /> Edit Profile
                        </>
                    )}
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Profile Picture Section */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
                        <div className="flex flex-col items-center">
                            <div className="relative">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={profileData.avatar}
                                    alt="Profile"
                                    className="w-32 h-32 rounded-full object-cover border-4 border-slate-100"
                                />
                                {isEditing && (
                                    <label className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full cursor-pointer hover:bg-primary/90 transition-colors">
                                        <Camera size={18} />
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                            className="hidden"
                                        />
                                    </label>
                                )}
                            </div>
                            <h2 className="text-xl font-bold text-slate-900 mt-4">{profileData.name}</h2>
                            <p className="text-sm text-slate-500">Student</p>
                            <div className="mt-4 w-full space-y-3">
                                <div className="flex items-center text-sm text-slate-600">
                                    <Calendar size={16} className="mr-2 text-slate-400" />
                                    Joined {profileData.joinDate}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Profile Information */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Basic Information */}
                    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
                        <h3 className="text-lg font-bold text-slate-900 mb-4">Basic Information</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Full Name
                                </label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={profileData.name}
                                        onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                    />
                                ) : (
                                    <p className="text-slate-900">{profileData.name}</p>
                                )}
                            </div>


                        </div>
                    </div>

                    {/* Bio Section */}
                    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
                        <h3 className="text-lg font-bold text-slate-900 mb-4">About Me</h3>
                        {isEditing ? (
                            <textarea
                                value={profileData.bio}
                                onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                                rows={5}
                                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                                placeholder="Tell us about yourself, your goals, and interests..."
                            />
                        ) : (
                            <p className="text-slate-600 leading-relaxed">{profileData.bio}</p>
                        )}
                    </div>

                    {/* Academic Information */}
                    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
                        <h3 className="text-lg font-bold text-slate-900 mb-4">Academic Stats</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="text-center p-4 bg-blue-50 rounded-lg">
                                <div className="text-2xl font-bold text-blue-600">48</div>
                                <div className="text-xs text-slate-600 mt-1">Total Classes</div>
                            </div>
                            <div className="text-center p-4 bg-green-50 rounded-lg">
                                <div className="text-2xl font-bold text-green-600">98%</div>
                                <div className="text-xs text-slate-600 mt-1">Attendance</div>
                            </div>
                            <div className="text-center p-4 bg-purple-50 rounded-lg">
                                <div className="text-2xl font-bold text-purple-600">91.7%</div>
                                <div className="text-xs text-slate-600 mt-1">Avg. Score</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
