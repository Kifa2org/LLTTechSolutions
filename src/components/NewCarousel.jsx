import React, { useState, useEffect, useRef,forwardRef } from 'react';
import FireWall from "../assets/firewall.jpg";
import Switching from "../assets/switching.jpg";
import Vulnerbility from "../assets/Vulnerbility.jpg";

const slides = [
  {
    title: 'Firewall Configuration & Management Course',
    description: 'Advanced policy design, rule optimization, and zero-trust enforcement across leading firewall platforms.',
    imageUrl: FireWall,
  },
  {
    title: 'Networking Course',
    description: 'Secure network segmentation and resilient routing practices to ensure data integrity and high availability.',
    imageUrl: Switching,
  },
  {
    title: 'Vulnerability Assessment & Penetration Testing (VAPT) Course',
    description: 'Rigorous security evaluations to uncover and mitigate hidden weaknesses in your environment.',
    imageUrl: Vulnerbility,
  },
];

const NewCarousel = forwardRef((props,ref) => {
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
      // Disable transition for the jump from last to first slide
      setIsTransitionEnabled(false);
    } else {
      setIsTransitionEnabled(true);
    }
    prevIndexRef.current = currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div ref={ref} className="relative w-full  mx-auto overflow-hidden  shadow-lg">
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
}
)

export default NewCarousel;
