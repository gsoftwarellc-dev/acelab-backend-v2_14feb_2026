"use client"

import { useState } from "react"
// import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog" 

import { X, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface BookingModalProps {
    isOpen: boolean
    onClose: () => void
    tutorName: string
    rate: number
}

export function BookingModal({ isOpen, onClose, tutorName, rate }: BookingModalProps) {
    const [step, setStep] = useState<"select" | "confirm" | "success">("select")
    const [date, setDate] = useState<string | null>(null)
    const [time, setTime] = useState<string | null>(null)

    if (!isOpen) return null

    const dates = ["Mon 15 Apr", "Tue 16 Apr", "Wed 17 Apr"]
    const times = ["16:00", "17:00", "18:30"]

    const handleBook = () => {
        setStep("success")
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <div className="p-6 border-b flex items-center justify-between">
                    <h2 className="font-bold text-lg">
                        {step === "success" ? "Booking Confirmed" : `Book Session with ${tutorName}`}
                    </h2>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
                        <X size={20} />
                    </button>
                </div>

                <div className="p-6">
                    {step === "select" && (
                        <div className="space-y-6">
                            <div>
                                <label className="text-sm font-medium text-slate-900 mb-2 block">Select Date</label>
                                <div className="grid grid-cols-3 gap-2">
                                    {dates.map(d => (
                                        <button
                                            key={d}
                                            onClick={() => setDate(d)}
                                            className={cn(
                                                "p-2 text-sm border rounded-lg transition-colors hover:border-primary",
                                                date === d ? "bg-primary/10 border-primary text-primary font-medium" : "border-slate-200 text-slate-600"
                                            )}
                                        >
                                            {d}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-slate-900 mb-2 block">Select Time</label>
                                <div className="grid grid-cols-3 gap-2">
                                    {times.map(t => (
                                        <button
                                            key={t}
                                            onClick={() => setTime(t)}
                                            className={cn(
                                                "p-2 text-sm border rounded-lg transition-colors hover:border-primary",
                                                time === t ? "bg-primary/10 border-primary text-primary font-medium" : "border-slate-200 text-slate-600"
                                            )}
                                        >
                                            {t}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {step === "confirm" && (
                        <div className="space-y-4">
                            <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500">Tutor</span>
                                    <span className="font-medium">{tutorName}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500">Date & Time</span>
                                    <span className="font-medium">{date} at {time}</span>
                                </div>
                                <div className="flex justify-between text-sm border-t pt-2 mt-2">
                                    <span className="text-slate-900 font-medium">Total</span>
                                    <span className="font-bold text-lg">£{rate}</span>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 text-center">By clicking confirm, you agree to our cancellation policy.</p>
                        </div>
                    )}

                    {step === "success" && (
                        <div className="text-center py-6">
                            <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">You&apos;re all set!</h3>
                            <p className="text-slate-500">A confirmation email has been sent to you.</p>
                        </div>
                    )}
                </div>

                <div className="p-6 border-t bg-slate-50 flex justify-end gap-3">
                    {step === "select" && (
                        <Button onClick={() => setStep("confirm")} disabled={!date || !time} className="w-full">Continue</Button>
                    )}
                    {step === "confirm" && (
                        <>
                            <Button variant="outline" onClick={() => setStep("select")}>Back</Button>
                            <Button onClick={handleBook} className="flex-1 bg-green-600 hover:bg-green-700">Confirm Booking</Button>
                        </>
                    )}
                    {step === "success" && (
                        <Button onClick={onClose} className="w-full">Close</Button>
                    )}
                </div>
            </div>
        </div>
    )
}
