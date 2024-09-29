"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Search, Phone, Mail } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isHovered ? 'bg-black bg-opacity-80' : 'bg-transparent'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="tel:+1234567890" className="text-white hover:text-gold transition-colors">
              <Phone size={20} />
            </Link>
            <Link href="mailto:info@hotella.com" className="text-white hover:text-gold transition-colors">
              <Mail size={20} />
            </Link>
            <Select>
              <SelectTrigger className="w-[80px] bg-transparent text-white border-none">
                <SelectValue placeholder="EN" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">EN</SelectItem>
                <SelectItem value="es">ES</SelectItem>
                <SelectItem value="fr">FR</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Link href="/" className="text-3xl font-bold text-white pl-28">
            HotelLA
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="py-1 px-3 pr-8 rounded bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-75 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white" size={18} />
            </div>
            <Link href="/book" className="bg-gold text-black px-4 py-2 rounded hover:bg-gold-dark transition-colors">
              Book Now
            </Link>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <nav className="hidden lg:flex space-x-8">
            <Link href="/rooms" className="text-white hover:text-gold transition-colors">Rooms</Link>
            <Link href="/rooms" className="text-white hover:text-gold transition-colors">Suites</Link>
            <Link href="/dining" className="text-white hover:text-gold transition-colors">Dining</Link>
            <Link href="/spa" className="text-white hover:text-gold transition-colors">Spa</Link>
            <Link href="/experiences" className="text-white hover:text-gold transition-colors">Experiences</Link>
            <Link href="/offers" className="text-white hover:text-gold transition-colors">Offers</Link>
          </nav>
          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-black bg-opacity-90 text-white">
          <nav className="flex flex-col items-center py-4">
            <Link href="/rooms" className="py-2 hover:text-gold transition-colors">Rooms & Suites</Link>
            <Link href="/dining" className="py-2 hover:text-gold transition-colors">Dining</Link>
            <Link href="/spa" className="py-2 hover:text-gold transition-colors">Spa</Link>
            <Link href="/experiences" className="py-2 hover:text-gold transition-colors">Experiences</Link>
            <Link href="/offers" className="py-2 hover:text-gold transition-colors">Offers</Link>
          </nav>
        </div>
      )}
    </header>
  )
}