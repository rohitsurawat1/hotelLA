'use client'

import { useState } from 'react'
import { Calendar, ChevronDown } from 'lucide-react'

export default function BookingSection() {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle booking logic here
    console.log('Booking submitted:', { checkIn, checkOut, adults, children })
  }

  return (
    <section className="bg-white shadow-lg -mt-20 relative z-10">
      <div className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/4 px-2 mb-4 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="check-in">
              Check In
            </label>
            <div className="relative">
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="check-in"
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                required
              />
              <Calendar className="absolute right-3 top-2 text-gray-400" size={20} />
            </div>
          </div>
          <div className="w-full md:w-1/4 px-2 mb-4 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="check-out">
              Check Out
            </label>
            <div className="relative">
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="check-out"
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                required
              />
              <Calendar className="absolute right-3 top-2 text-gray-400" size={20} />
            </div>
          </div>
          <div className="w-full md:w-1/4 px-2 mb-4 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guests">
              Guests
            </label>
            <div className="relative">
              <select
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="adults"
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num} Adult{num !== 1 ? 's' : ''}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-2 text-gray-400" size={20} />
            </div>
          </div>
          <div className="w-full md:w-1/4 px-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="children">
              Children
            </label>
            <div className="relative">
              <select
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="children"
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
              >
                {[0, 1, 2, 3, 4].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Child' : 'Children'}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-2 text-gray-400" size={20} />
            </div>
          </div>
          <div className="w-full mt-6">
            <button
              className="bg-gold hover:bg-gold-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Check Availability
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}