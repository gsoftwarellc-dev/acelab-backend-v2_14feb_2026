import { DollarSign, TrendingUp, Calendar, CreditCard } from "lucide-react"

export default function TutorEarningsPage() {
    const earningsData = {
        totalEarnings: "$12,450",
        thisMonth: "$3,250",
        lastMonth: "$2,890",
        pendingPayment: "$1,150"
    }

    const recentEarnings = [
        { id: 1, student: "Alex Johnson", subject: "Mathematics", date: "Mar 15, 2026", duration: "1h", amount: "$50" },
        { id: 2, student: "Sarah Martinez", subject: "Physics", date: "Mar 14, 2026", duration: "1.5h", amount: "$75" },
        { id: 3, student: "Alex Johnson", subject: "Physics", date: "Mar 12, 2026", duration: "1h", amount: "$50" },
        { id: 4, student: "Emily Brown", subject: "Chemistry", date: "Mar 10, 2026", duration: "1h", amount: "$50" },
        { id: 5, student: "Michael Lee", subject: "Mathematics", date: "Mar 08, 2026", duration: "2h", amount: "$100" },
    ]

    const monthlyBreakdown = [
        { month: "January", earnings: "$2,450", classes: 35 },
        { month: "February", earnings: "$2,890", classes: 42 },
        { month: "March", earnings: "$3,250", classes: 48 },
    ]

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Earnings</h1>
                <p className="text-slate-600">Track your income and payment history</p>
            </div>

            {/* Earnings Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-semibold opacity-90">Total Earnings</h3>
                        <DollarSign size={20} />
                    </div>
                    <p className="text-3xl font-bold">{earningsData.totalEarnings}</p>
                    <p className="text-xs opacity-75 mt-1">All time</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl p-6 text-white">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-semibold opacity-90">This Month</h3>
                        <TrendingUp size={20} />
                    </div>
                    <p className="text-3xl font-bold">{earningsData.thisMonth}</p>
                    <p className="text-xs opacity-75 mt-1">+12% from last month</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-6 text-white">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-semibold opacity-90">Last Month</h3>
                        <Calendar size={20} />
                    </div>
                    <p className="text-3xl font-bold">{earningsData.lastMonth}</p>
                    <p className="text-xs opacity-75 mt-1">February 2026</p>
                </div>
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-6 text-white">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-semibold opacity-90">Pending</h3>
                        <CreditCard size={20} />
                    </div>
                    <p className="text-3xl font-bold">{earningsData.pendingPayment}</p>
                    <p className="text-xs opacity-75 mt-1">Processing</p>
                </div>
            </div>

            {/* Recent Earnings Table */}
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100">
                    <h2 className="text-xl font-bold text-slate-900">Recent Earnings</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b">
                            <tr>
                                <th className="px-6 py-3 font-medium text-left">Student</th>
                                <th className="px-6 py-3 font-medium text-left">Subject</th>
                                <th className="px-6 py-3 font-medium text-left">Date</th>
                                <th className="px-6 py-3 font-medium text-center">Duration</th>
                                <th className="px-6 py-3 font-medium text-right">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {recentEarnings.map((earning) => (
                                <tr key={earning.id} className="hover:bg-slate-50">
                                    <td className="px-6 py-4 font-medium text-slate-900">{earning.student}</td>
                                    <td className="px-6 py-4 text-slate-600">{earning.subject}</td>
                                    <td className="px-6 py-4 text-slate-600">{earning.date}</td>
                                    <td className="px-6 py-4 text-center text-slate-600">{earning.duration}</td>
                                    <td className="px-6 py-4 text-right">
                                        <span className="font-bold text-green-600">{earning.amount}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Monthly Breakdown */}
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Monthly Breakdown</h2>
                <div className="space-y-4">
                    {monthlyBreakdown.map((month, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                            <div>
                                <h4 className="font-semibold text-slate-900">{month.month}</h4>
                                <p className="text-sm text-slate-500">{month.classes} classes</p>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-bold text-slate-900">{month.earnings}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
