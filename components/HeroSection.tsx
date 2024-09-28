'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const images = [
  '/images/hero1.jpg',
  '/images/hero2.jpg',
  '/images/hero3.jpg',
]

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Luxury Hotel LA ${index + 1}`}
          layout="fill"
          objectFit="cover"
          priority
          className={`transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">
          Experience Unrivaled Luxury
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-center max-w-3xl">
          Indulge in the epitome of opulence at HotelLA, where every moment is crafted for perfection
        </p>
        <div className="space-x-4">
          <Link
            href="/book"
            className="bg-gold text-black px-8 py-3 rounded text-lg font-semibold hover:bg-gold-dark transition-colors"
          >
            Book Now
          </Link>
          <Link
            href="/experiences"
            className="border-2 border-white text-white px-8 py-3 rounded text-lg font-semibold hover:bg-white hover:text-black transition-colors"
          >
            Explore
          </Link>
        </div>
      </div>
    </section>
  )
}