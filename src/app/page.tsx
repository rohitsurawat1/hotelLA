import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import ExperiencesSection from '../components/ExpirienceSection'
import BookingSection from '../components/BookingSection'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <BookingSection />
        <ExperiencesSection />
        
        {/* Add more sections here as needed */}
      </main>
      <Footer />
    </div>
  )
}