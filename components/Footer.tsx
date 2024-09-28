import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">HotelLA</h3>
            <p>Experience luxury in the heart of Los Angeles</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/rooms" className="hover:text-gold">Rooms & Suites</Link></li>
              <li><Link href="/dining" className="hover:text-gold">Dining</Link></li>
              <li><Link href="/spa" className="hover:text-gold">Spa</Link></li>
              <li><Link href="/events" className="hover:text-gold">Events</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p>123 Luxury Avenue</p>
            <p>Los Angeles, CA 90001</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@hotella.com</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 HotelLA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}