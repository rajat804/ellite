// src/components/HeroSection.jsx

import React, { useState, useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaStar,
  FaHeart,
} from "react-icons/fa";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // All Slider Images
  const sliderItems = [
    {
      type: "image",
      src: assets.img1,
    },
    {
      type: "image",
      src: assets.img2,
    },
    {
      type: "image",
      src: assets.img3,
    },
    {
      type: "image",
      src: assets.img4,
    },
    {
      type: "image",
      src: assets.img5,
    },
    {
      type: "image",
      src: assets.dogInsideImg,
    },
    {
      type: "image",
      src: assets.dogSalonOne,
    },
    {
      type: "image",
      src: assets.dogSalonTwo,
    },
    {
      type: "image",
      src: assets.dogSalonThree,
    },
    {
      type: "image",
      src: assets.gateOne,
    },
    {
      type: "image",
      src: assets.gateTwo,
    },
    {
      type: "image",
      src: assets.gateThree,
    },
    {
      type: "image",
      src: assets.gateFour,
    },
    {
      type: "image",
      src: assets.outsideOne,
    },
    {
      type: "image",
      src: assets.posterImgOne,
    },
    {
      type: "image",
      src: assets.posterImgTwo,
    },
    {
      type: "image",
      src: assets.posterImgThree,
    },
    {
      type: "image",
      src: assets.posterImgFour,
    },
    {
      type: "image",
      src: assets.swimmingOne,
    },
    {
      type: "image",
      src: assets.swimmingTwo,
    },
    {
      type: "image",
      src: assets.swimmingThree,
    },
    {
      type: "image",
      src: assets.swimmingFour,
    },
    {
      type: "video",
      src: assets.videoOne,
    },
    {
      type: "video",
      src: assets.videoTwo,
    },
  ];

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === sliderItems.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [sliderItems.length]);

  // Next Slide
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === sliderItems.length - 1 ? 0 : prev + 1
    );
  };

  // Prev Slide
  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? sliderItems.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* Slider */}
      <div className="relative w-full h-full">
        {sliderItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              currentSlide === index
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-110 z-0"
            }`}
          >
            {/* Images */}
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={`slide-${index}`}
                className="w-full h-full object-cover"
              />
            ) : (
              /* Videos */
              <video
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full mb-6">
            <FaHeart className="text-[#D4A054]" />
            <span className="text-white text-sm md:text-base font-medium">
              Welcome To Bruno's Family Cafe
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Luxury Care <br />
            For Your Pets
          </h1>

          {/* Description */}
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Premium pet boarding, grooming, daycare and cafe experience
            where your furry friends feel at home with love, care and fun.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="bg-[#D4A054] hover:bg-[#c08d35] text-black px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Book Appointment
            </Link>

            <Link
              to="/gallery"
              className="flex items-center gap-2 border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              <FaPlay />
              Watch Gallery
            </Link>
          </div>

          {/* Rating */}
          <div className="flex items-center justify-center gap-2 mt-10">
            <div className="flex items-center gap-1">
              <FaStar className="text-[#D4A054]" />
              <FaStar className="text-[#D4A054]" />
              <FaStar className="text-[#D4A054]" />
              <FaStar className="text-[#D4A054]" />
              <FaStar className="text-[#D4A054]" />
            </div>

            <span className="text-white/80 text-sm md:text-base">
              4.9 Rating • 10k+ Happy Customers
            </span>
          </div>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#D4A054] hover:text-black transition-all duration-300"
      >
        <FaChevronLeft size={18} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#D4A054] hover:text-black transition-all duration-300"
      >
        <FaChevronRight size={18} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {sliderItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index
                ? "w-10 h-3 bg-[#D4A054]"
                : "w-3 h-3 bg-white/50 hover:bg-white"
            }`}
          ></button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 z-30 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-white text-sm">
        {currentSlide + 1} / {sliderItems.length}
      </div>
    </section>
  );
};

export default HeroSection;