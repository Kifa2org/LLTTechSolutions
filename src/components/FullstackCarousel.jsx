import React, { useState, useEffect, useRef } from 'react';
import FullStackimg from "../assets/FullStackimg.webp";

const slides = [
  {
    title: 'Robust Web Applications',
    description: 'Build scalable and efficient web applications tailored to your business needs.',
    imageUrl: FullStackimg,
  },
  {
    title: 'End-to-End Development',
    description: 'Comprehensive fullstack solutions from frontend to backend and database management.',
    imageUrl: FullStackimg,
  },
  {
    title: 'Modern Technologies',
    description: 'Utilize the latest frameworks and tools to deliver high-quality software products.',
    imageUrl: FullStackimg,
  },
];

const FullstackCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const prevIndexRef = useRef(currentIndex);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (prevIndexRef.current === slides.length - 1 && currentIndex === 0) {
      setIsTransitionEnabled(false);
    } else {
      setIsTransitionEnabled(true);
    }
    prevIndexRef.current = currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mx-auto overflow-hidden shadow-lg bg-gradient-to-r from-green-700 via-green-400 to-green-800 text-white">
      <div
        className={`flex duration-700 ${isTransitionEnabled ? 'transition-transform' : ''}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex flex-col md:flex-row items-center  p-8"
          >
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="rounded-lg object-cover w-68 h-48"
            />
            <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
              <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
              <p className="text-lg">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
        aria-label="Previous Slide"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
        aria-label="Next Slide"
      >
        &#10095;
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FullstackCarousel;
