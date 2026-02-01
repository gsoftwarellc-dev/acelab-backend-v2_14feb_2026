import { cn } from "@/lib/utils"

interface StatCardProps {
    label: string
    value: string
    change?: string
    trend?: "up" | "down" | "neutral"
}

export function StatCard({ label, value, change, trend }: StatCardProps) {
    return (
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <p className="text-sm font-medium text-slate-500">{label}</p>
            <div className="flex items-end justify-between mt-2">
                <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
                {change && (
                    <span className={cn(
                        "text-xs font-medium px-2 py-1 rounded-full",
                        trend === "up" && "bg-green-100 text-green-700",
                        trend === "down" && "bg-red-100 text-red-700",
                        trend === "neutral" && "bg-slate-100 text-slate-700"
                    )}>
                        {change}
                    </span>
                )}
            </div>
        </div>
    )
}
