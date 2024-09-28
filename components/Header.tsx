'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-80' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          HotelLA
        </Link>
        <nav className="hidden lg:flex space-x-8">
          <Link href="/rooms" className="text-white hover:text-gold transition-colors">Rooms & Suites</Link>
          <Link href="/dining" className="text-white hover:text-gold transition-colors">Dining</Link>
          <Link href="/spa" className="text-white hover:text-gold transition-colors">Spa</Link>
          <Link href="/experiences" className="text-white hover:text-gold transition-colors">Experiences</Link>
          <Link href="/offers" className="text-white hover:text-gold transition-colors">Offers</Link>
        </nav>
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/book" className="bg-gold text-black px-4 py-2 rounded hover:bg-gold-dark transition-colors">
            Book Now
          </Link>
          <button className="text-white hover:text-gold transition-colors">
            EN
          </button>
        </div>
        <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-black bg-opacity-90 text-white">
          <nav className="flex flex-col items-center py-4">
            <Link href="/rooms" className="py-2 hover:text-gold transition-colors">Rooms & Suites</Link>
            <Link href="/dining" className="py-2 hover:text-gold transition-colors">Dining</Link>
            <Link href="/spa" className="py-2 hover:text-gold transition-colors">Spa</Link>
            <Link href="/experiences" className="py-2 hover:text-gold transition-colors">Experiences</Link>
            <Link href="/offers" className="py-2 hover:text-gold transition-colors">Offers</Link>
            <Link href="/book" className="mt-4 bg-gold text-black px-4 py-2 rounded hover:bg-gold-dark transition-colors">
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}