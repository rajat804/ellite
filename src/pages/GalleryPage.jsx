// src/pages/GalleryPage.jsx

import React, { useState } from "react";

import {
  FaSearchPlus,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaInstagram,
} from "react-icons/fa";

import { assets } from "../assets/assets";

const GalleryPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gallery Data
  const galleryItems = [
    {
      id: 1,
      type: "image",
      src: assets.img2,
      title: "Pet Gallery",
    },
    {
      id: 2,
      type: "image",
      src: assets.img3,
      title: "Happy Dog",
    },
    {
      id: 3,
      type: "image",
      src: assets.img4,
      title: "Cute Cat",
    },
    {
      id: 4,
      type: "image",
      src: assets.img5,
      title: "Pet Moment",
    },
    {
      id: 5,
      type: "image",
      src: assets.dogInsideImg,
      title: "Dog Care",
    },
    {
      id: 6,
      type: "image",
      src: assets.dogSalonOne,
      title: "Pet Grooming",
    },
    {
      id: 7,
      type: "image",
      src: assets.dogSalonTwo,
      title: "Dog Salon",
    },
    {
      id: 8,
      type: "image",
      src: assets.dogSalonThree,
      title: "Pet Spa",
    },
    {
      id: 9,
      type: "image",
      src: assets.gateOne,
      title: "Pet Area",
    },
    {
      id: 10,
      type: "image",
      src: assets.gateTwo,
      title: "Pet Care",
    },
    {
      id: 11,
      type: "image",
      src: assets.gateThree,
      title: "Pet Family",
    },
    {
      id: 12,
      type: "image",
      src: assets.gateFour,
      title: "Happy Pets",
    },
    {
      id: 13,
      type: "image",
      src: assets.posterImgOne,
      title: "Poster",
    },
    {
      id: 14,
      type: "image",
      src: assets.posterImgTwo,
      title: "Pet Poster",
    },
    {
      id: 15,
      type: "image",
      src: assets.posterImgThree,
      title: "Animal Care",
    },
    {
      id: 16,
      type: "image",
      src: assets.outsideOne,
      title: "Outside Area",
    },
    {
      id: 17,
      type: "image",
      src: assets.swimmingOne,
      title: "Swimming Time",
    },
    {
      id: 18,
      type: "image",
      src: assets.swimmingTwo,
      title: "Pool Activity",
    },
    {
      id: 19,
      type: "image",
      src: assets.swimmingThree,
      title: "Pet Swimming",
    },
    {
      id: 20,
      type: "image",
      src: assets.swimmingFour,
      title: "Swimming Pool",
    },

    // Videos
    {
      id: 21,
      type: "video",
      src: assets.videoOne,
      title: "Pet Video",
    },
    {
      id: 22,
      type: "video",
      src: assets.videoTwo,
      title: "Funny Pet Video",
    },
  ];

  // Open Lightbox
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedItem(galleryItems[index]);
    setLightboxOpen(true);

    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";

    }
  };

  // Close Lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedItem(null);

    if (typeof document !== "undefined") {
      document.body.style.overflow = "auto";
    }
  };

  // Next Item
  const nextItem = () => {
    const nextIndex = (currentIndex + 1) % galleryItems.length;

    setCurrentIndex(nextIndex);
    setSelectedItem(galleryItems[nextIndex]);
  };

  // Previous Item
  const prevItem = () => {
    const prevIndex =
      (currentIndex - 1 + galleryItems.length) %
      galleryItems.length;

    setCurrentIndex(prevIndex);
    setSelectedItem(galleryItems[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-[#FDF8F0] overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1600)",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5">
            Our Gallery
          </h1>

          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Explore beautiful moments of our lovely pets,
            grooming sessions, swimming activities,
            happy memories and premium pet care services.
          </p>

        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-20">

        <div className="container mx-auto px-4 md:px-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">

            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >

                <div className="relative h-72 overflow-hidden">

                  {/* IMAGE */}
                  {item.type === "image" && (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}

                  {/* VIDEO */}
                  {item.type === "video" && (
                    <video
                      src={item.src}
                      muted
                      className="w-full h-full object-cover"
                    />
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">

                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-full">

                      <FaSearchPlus className="text-white text-2xl" />

                    </div>

                  </div>

                  {/* Video Badge */}
                  {item.type === "video" && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Video
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">

                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#8B5E3C] transition-colors">
                    {item.title}
                  </h3>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* INSTAGRAM SECTION */}
      <section className="py-20 bg-gradient-to-r from-[#8B5E3C] to-[#D4A054] relative overflow-hidden">

        {/* Blur */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">

          <div className="max-w-3xl mx-auto text-center text-white">

            {/* Icon */}
            <div className="w-24 h-24 mx-auto rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-2xl mb-6">

              <FaInstagram className="text-5xl text-white" />

            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              Follow Us On Instagram
            </h2>

            {/* Description */}
            <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Stay connected with us and explore daily moments,
              grooming sessions, swimming activities,
              happy memories and premium pet care updates.
            </p>

            {/* Button */}
            <a
              href="https://www.instagram.com/bru_nofamily/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#8B5E3C] px-8 py-4 rounded-full font-semibold text-lg hover:bg-black hover:text-white transition-all duration-500 hover:scale-105 shadow-xl"
            >

              <FaInstagram className="text-2xl" />

              @bru_nofamily


            </a>

          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxOpen && selectedItem && (

        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center px-4">

          {/* CLOSE */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-all duration-300"
          >

            <FaTimes size={22} />

          </button>

          {/* PREV */}
          <button
            onClick={prevItem}
            className="absolute left-5 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-all duration-300"
          >

            <FaChevronLeft size={22} />

          </button>

          {/* NEXT */}
          <button
            onClick={nextItem}
            className="absolute right-5 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-all duration-300"
          >

            <FaChevronRight size={22} />

          </button>

          {/* CONTENT */}
          <div className="max-w-5xl w-full">

            {/* IMAGE */}
            {selectedItem.type === "image" ? (
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                className="w-full max-h-[80vh] object-contain rounded-2xl"
              />
            ) : (
              <video
                src={selectedItem.src}
                controls
                autoPlay
                className="w-full max-h-[80vh] rounded-2xl"
              />
            )}

            {/* TITLE */}
            <h2 className="text-center text-white text-xl font-semibold mt-5">
              {selectedItem.title}
            </h2>

          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;