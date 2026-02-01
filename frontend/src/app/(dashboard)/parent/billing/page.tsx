"use client"

import { useState } from "react"
import { CreditCard, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MOCK_CARDS } from "@/lib/mock-data"

export default function BillingPage() {
    const [cards, setCards] = useState(MOCK_CARDS)
    const [showAddForm, setShowAddForm] = useState(false)
    const [newCard, setNewCard] = useState({
        cardholderName: "",
        cardNumber: "",
        expiry: "",
        cvc: ""
    })

    const handleAddCard = (e: React.FormEvent) => {
        e.preventDefault()
        const cardAdd = {
            id: `card${cards.length + 1}`,
            parentId: "p1", // hardcoded for parent view
            cardholderName: newCard.cardholderName,
            last4: newCard.cardNumber.slice(-4),
            expiryDate: newCard.expiry,
            brand: "visa" as const
        }
        setCards([...cards, cardAdd])
        setShowAddForm(false)
        setNewCard({ cardholderName: "", cardNumber: "", expiry: "", cvc: "" })
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Billing & Payments</h1>
                <p className="text-slate-600">Manage your payment methods and billing history</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-slate-900">Payment Methods</h2>
                    <Button onClick={() => setShowAddForm(!showAddForm)}>
                        <Plus size={16} className="mr-2" /> Add New Card
                    </Button>
                </div>

                {showAddForm && (
                    <div className="mb-8 p-6 bg-slate-50 rounded-lg border border-slate-200">
                        <h3 className="font-semibold mb-4">Add New Card</h3>
                        <form onSubmit={handleAddCard} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Cardholder Name</label>
                                <input
                                    required
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-lg"
                                    value={newCard.cardholderName}
                                    onChange={e => setNewCard({ ...newCard, cardholderName: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Card Number</label>
                                <input
                                    required
                                    type="text"
                                    maxLength={16}
                                    className="w-full px-4 py-2 border rounded-lg"
                                    value={newCard.cardNumber}
                                    onChange={e => setNewCard({ ...newCard, cardNumber: e.target.value })}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Expiry (MM/YY)</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="MM/YY"
                                        className="w-full px-4 py-2 border rounded-lg"
                                        value={newCard.expiry}
                                        onChange={e => setNewCard({ ...newCard, expiry: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">CVC</label>
                                    <input
                                        required
                                        type="text"
                                        maxLength={3}
                                        className="w-full px-4 py-2 border rounded-lg"
                                        value={newCard.cvc}
                                        onChange={e => setNewCard({ ...newCard, cvc: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end gap-2">
                                <Button type="button" variant="ghost" onClick={() => setShowAddForm(false)}>Cancel</Button>
                                <Button type="submit">Save Card</Button>
                            </div>
                        </form>
                    </div>
                )}

                <div className="space-y-4">
                    {cards.map((card) => (
                        <div key={card.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50">
                            <div className="flex items-center space-x-4">
                                <div className="p-2 bg-blue-50 text-blue-600 rounded">
                                    <CreditCard size={24} />
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-900">
                                        <span className="capitalize">{card.brand}</span> ending in {card.last4}
                                    </p>
                                    <p className="text-sm text-slate-500">Expires {card.expiryDate}</p>
                                </div>
                            </div>
                            <Button variant="ghost" className="text-red-500 hover:text-red-700 hover:bg-red-50">
                                <Trash2 size={18} />
                            </Button>
                        </div>
                    ))}
                    {cards.length === 0 && (
                        <p className="text-center text-slate-500 py-4">No cards saved. Add a payment method to get started.</p>
                    )}
                </div>
            </div>
        </div>
    )
}
