import { DollarSign, TrendingUp, CheckCircle, Clock } from "lucide-react"

export default function AdminFinancePage() {
    const stats = {
        totalRevenue: "$45,230",
        thisMonth: "$12,450",
        pending: "$3,200",
        paid: "$42,030"
    }

    const payments = [
        { id: 1, student: "Alex Johnson", amount: "$150", date: "Mar 18, 2026", status: "Paid", method: "Credit Card" },
        { id: 2, student: "Sarah Martinez", amount: "$225", date: "Mar 17, 2026", status: "Paid", method: "PayPal" },
        { id: 3, student: "Emily Brown", amount: "$150", date: "Mar 16, 2026", status: "Pending", method: "Bank Transfer" },
        { id: 4, student: "Michael Lee", amount: "$300", date: "Mar 15, 2026", status: "Paid", method: "Credit Card" },
        { id: 5, student: "Oliver Brown", amount: "$150", date: "Mar 14, 2026", status: "Paid", method: "Debit Card" },
    ]

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Finance</h1>
                <p className="text-slate-600">Monitor platform revenue and payment transactions</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-semibold opacity-90">Total Revenue</h3>
                        <DollarSign size={20} />
                    </div>
                    <p className="text-3xl font-bold">{stats.totalRevenue}</p>
                    <p className="text-xs opacity-75 mt-1">All time</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl p-6 text-white">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-semibold opacity-90">This Month</h3>
                        <TrendingUp size={20} />
                    </div>
                    <p className="text-3xl font-bold">{stats.thisMonth}</p>
                    <p className="text-xs opacity-75 mt-1">March 2026</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-6 text-white">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-semibold opacity-90">Paid</h3>
                        <CheckCircle size={20} />
                    </div>
                    <p className="text-3xl font-bold">{stats.paid}</p>
                    <p className="text-xs opacity-75 mt-1">Successfully processed</p>
                </div>
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-6 text-white">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-semibold opacity-90">Pending</h3>
                        <Clock size={20} />
                    </div>
                    <p className="text-3xl font-bold">{stats.pending}</p>
                    <p className="text-xs opacity-75 mt-1">Awaiting payment</p>
                </div>
            </div>

            {/* Recent Payments */}
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100">
                    <h2 className="text-xl font-bold text-slate-900">Recent Payments</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b">
                            <tr>
                                <th className="px-6 py-3 font-medium text-left">Student</th>
                                <th className="px-6 py-3 font-medium text-left">Amount</th>
                                <th className="px-6 py-3 font-medium text-left">Date</th>
                                <th className="px-6 py-3 font-medium text-left">Payment Method</th>
                                <th className="px-6 py-3 font-medium text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {payments.map((payment) => (
                                <tr key={payment.id} className="hover:bg-slate-50">
                                    <td className="px-6 py-4 font-medium text-slate-900">{payment.student}</td>
                                    <td className="px-6 py-4 font-bold text-green-600">{payment.amount}</td>
                                    <td className="px-6 py-4 text-slate-600">{payment.date}</td>
                                    <td className="px-6 py-4 text-slate-600">{payment.method}</td>
                                    <td className="px-6 py-4 text-center">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${payment.status === "Paid"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-amber-100 text-amber-700"
                                            }`}>
                                            {payment.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
