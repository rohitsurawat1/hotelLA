/* eslint-disable @next/next/no-img-element */
import React from 'react';
import HeroSection from '../../components/HeroSection';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const RoomPage = () => {
  return (
    <>
    <Header/>
    <HeroSection /><div className="bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Hotel LA - View Our Rooms</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roomData.map((room, index) => (
          <li key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={room.image} alt={room.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{room.title}</h2>
              <p className="text-gray-600">{room.description}</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                Details
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    <Footer/>
    </>
  );
};

const roomData = [
  {
    title: 'Royal Mansion Majilis at Atlantis The Royal',
    description: 'Experience luxury in our Royal Mansion Majilis.',
    image: 'path/to/image1.jpg'
  },
  {
    title: 'Signature Penthouses',
    description: 'Stay in our exquisite Signature Penthouses.',
    image: 'path/to/image2.jpg'
  },
  {
    title: 'Sky Pool Villa Living Room at Atlantis The Royal',
    description: 'Relax in the Sky Pool Villa Living Room.',
    image: 'path/to/image3.jpg'
  },
  {
    title: 'Suites',
    description: 'Enjoy comfort in our luxurious suites.',
    image: 'path/to/image4.jpg'
  },
  {
    title: 'Royal Club Lounge at Atlantis The Royal',
    description: 'Unwind in the exclusive Royal Club Lounge.',
    image: 'path/to/image5.jpg'
  },
  {
    title: 'Palmscape Queen Bedroom at Atlantis The Royal',
    description: 'Stay in our beautiful Palmscape Queen Bedroom.',
    image: 'path/to/image6.jpg'
  },
  // Add more room data as needed
];

export default RoomPage;