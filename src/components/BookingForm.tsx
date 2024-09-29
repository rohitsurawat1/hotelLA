'use client'

import { useState } from 'react'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

export default function BookingForm() {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  })
  const [guests, setGuests] = useState(1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle booking logic here
    console.log('Booking submitted:', { dateRange, guests })
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-t-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="dates" className="block text-sm font-medium text-gray-700 mb-1">Dates</label>
          <DateRangePicker
            ranges={[dateRange]}
            onChange={item => setDateRange(item.selection)}
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
          <input
            type="number"
            id="guests"
            min="1"
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex items-end">
          <button type="submit" className="w-full bg-gold text-white py-2 px-4 rounded hover:bg-gold-dark transition-colors">
            Check Availability
          </button>
        </div>
      </div>
    </form>
  )
}