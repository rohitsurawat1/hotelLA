'use client'

import { useState } from 'react'
import { Calendar, ChevronDown } from 'lucide-react'
import { useToast } from "../hooks/use-toast"
import { Button } from "@/components/ui/button"

export default function BookingSection() {
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    adults: 2,
    children: 0
  })
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setBookingData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log('Booking submitted:', bookingData)
    
    // Show a success toast
    toast({
      title: "Booking Request Submitted",
      description: `Check-in: ${bookingData.checkIn}, Check-out: ${bookingData.checkOut}, Adults: ${bookingData.adults}, Children: ${bookingData.children}`,
    })

    // Reset form after submission
    setBookingData({
      checkIn: '',
      checkOut: '',
      adults: 2,
      children: 0
    })
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
                name="checkIn"
                type="date"
                value={bookingData.checkIn}
                onChange={handleInputChange}
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
                name="checkOut"
                type="date"
                value={bookingData.checkOut}
                onChange={handleInputChange}
                required
              />
              <Calendar className="absolute right-3 top-2 text-gray-400" size={20} />
            </div>
          </div>
          <div className="w-full md:w-1/4 px-2 mb-4 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="adults">
              Adults
            </label>
            <div className="relative">
              <select
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="adults"
                name="adults"
                value={bookingData.adults}
                onChange={handleInputChange}
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
                name="children"
                value={bookingData.children}
                onChange={handleInputChange}
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
            <Button
              className="bg-[#0b132d] hover:bg-[#162044] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-300"
              type="submit"
            >
              Check Availability
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}