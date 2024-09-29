import Image from 'next/image'
import Link from 'next/link'

const experiences = [
  {
    title: 'Luxurious Suites',
    description: 'Unwind in our spacious and elegantly designed suites',
    image: '/images/suite.jpg',
    link: '/rooms',
  },
  {
    title: 'Fine Dining',
    description: 'Savor exquisite cuisine crafted by world-renowned chefs',
    image: '/images/dining.jpg',
    link: '/dining',
  },
  {
    title: 'Spa Retreat',
    description: 'Rejuvenate your body and mind in our state-of-the-art spa',
    image: '/images/spa.jpg',
    link: '/spa',
  },
  {
    title: 'Exclusive Events',
    description: 'Host unforgettable gatherings in our stunning venues',
    image: '/images/events.jpg',
    link: '/experiences',
  },
]

export default function ExperiencesSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Unforgettable Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src={experience.image}
                alt={experience.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                <p className="text-gray-600 mb-4">{experience.description}</p>
                <Link
                  href={experience.link}
                  className="text-gold hover:text-gold-dark transition-colors"
                >
                  Discover More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}