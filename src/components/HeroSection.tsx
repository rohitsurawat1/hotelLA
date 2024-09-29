'use client'

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Play, Pause } from 'lucide-react';
import Video01 from '../../public/Videos/hero1.mp4';
import Video02 from '../../public/Videos/hero2.mp4';
import Video03 from '../../public/Videos/hero3.mp4';
import Video04 from '../../public/Videos/hero4.mp4';

const videos = [Video01, Video02, Video03, Video04];

export default function HeroSection() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRefs = useRef(videos.map(() => React.createRef<HTMLVideoElement>()));
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startVideoRotation = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 10000);
  };

  useEffect(() => {
    if (isPlaying) {
      videoRefs.current[currentVideo].current?.play();
      startVideoRotation();
    } else {
      videoRefs.current[currentVideo].current?.pause();
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentVideo, isPlaying]);

  const handleVideoChange = (index: number) => {
    setCurrentVideo(index);
    setIsPlaying(true);
    startVideoRotation();
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {videos.map((src, index) => (
        <video
          key={src}
          ref={videoRefs.current[index]}
          src={src}
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentVideo ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white p-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-center">
          Experience Unrivaled Luxury
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-center max-w-3xl">
          Indulge in the epitome of opulence at HotelLA, where every moment is crafted for perfection
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            href="/book"
            className="bg-white text-black px-8 py-3 rounded text-lg font-semibold hover:bg-[#0b132d] hover:text-white transition-colors text-center"
          >
            Book Now
          </Link>
          <Link
            href="/experiences"
            className="border-2 border-white text-white px-8 py-3 rounded text-lg font-semibold hover:bg-white hover:text-black transition-colors text-center"
          >
            Explore
          </Link>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
        <button
          onClick={togglePlayPause}
          className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-colors"
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => handleVideoChange(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentVideo ? 'bg-white' : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </section>
  );
}