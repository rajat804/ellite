// src/pages/GalleryPage.jsx
import React, { useState, useEffect } from "react";
import {
  FaPaw,
  FaHeart,
  FaCamera,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaInstagram,
  FaThumbsUp,
  FaComment,
  FaEye,
  FaShare,
  FaDownload,
  FaSearchPlus,
  FaGem,
  FaCoffee
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const GalleryPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("gallery-page");
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    { id: "all", name: "All Photos", icon: <FaCamera />, count: 16 },
    { id: "dogs", name: "Dogs", icon: <FaPaw />, count: 8 },
    { id: "cats", name: "Cats", icon: <FaPaw />, count: 8 },
  ];

  const galleryImages = [
    // Dog Photos
    {
      id: 1,
      category: "dogs",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800",
      thumbnail: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400",
      title: "Happy Golden Retriever",
      description: "Bruno enjoying his boarding stay",
      likes: 234,
      comments: 45,
      views: 1234,
      date: "March 15, 2024",
    },
    {
      id: 2,
      category: "dogs",
      image: "https://images.unsplash.com/photo-1587300003387-592e2f1b61e1?w=800",
      thumbnail: "https://images.unsplash.com/photo-1587300003387-592e2f1b61e1?w=400",
      title: "Playful Labrador",
      description: "Max playing with his favorite toy",
      likes: 189,
      comments: 32,
      views: 987,
      date: "March 12, 2024",
    },
    {
      id: 3,
      category: "dogs",
      image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800",
      thumbnail: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400",
      title: "Beagle Adventure",
      description: "Charlie exploring the play area",
      likes: 267,
      comments: 41,
      views: 1456,
      date: "March 10, 2024",
    },
    {
      id: 4,
      category: "dogs",
      image: "https://images.unsplash.com/photo-1544568100-847a5145851d?w=800",
      thumbnail: "https://images.unsplash.com/photo-1544568100-847a5145851d?w=400",
      title: "Pomeranian Cutie",
      description: "Bella getting her grooming session",
      likes: 312,
      comments: 56,
      views: 1890,
      date: "March 8, 2024",
    },
    {
      id: 5,
      category: "dogs",
      image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800",
      thumbnail: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400",
      title: "Husky Smile",
      description: "Snow enjoying her stay",
      likes: 278,
      comments: 48,
      views: 1567,
      date: "March 5, 2024",
    },
    {
      id: 6,
      category: "dogs",
      image: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=800",
      thumbnail: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=400",
      title: "French Bulldog",
      description: "Rocky posing for the camera",
      likes: 198,
      comments: 34,
      views: 1098,
      date: "March 3, 2024",
    },
    {
      id: 7,
      category: "dogs",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800",
      thumbnail: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400",
      title: "German Shepherd",
      description: "King during training session",
      likes: 345,
      comments: 67,
      views: 2100,
      date: "Feb 28, 2024",
    },
    {
      id: 8,
      category: "dogs",
      image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=800",
      thumbnail: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400",
      title: "Corgi Love",
      description: "Daisy making new friends",
      likes: 289,
      comments: 52,
      views: 1678,
      date: "Feb 25, 2024",
    },
    // Cat Photos
    {
      id: 9,
      category: "cats",
      image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=800",
      thumbnail: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=400",
      title: "Persian Cat",
      description: "Kitty relaxing in her cozy corner",
      likes: 223,
      comments: 39,
      views: 1345,
      date: "Feb 22, 2024",
    },
    {
      id: 10,
      category: "cats",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800",
      thumbnail: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400",
      title: "Orange Tabby",
      description: "Oliver enjoying window perch",
      likes: 167,
      comments: 23,
      views: 987,
      date: "Feb 20, 2024",
    },
    {
      id: 11,
      category: "cats",
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800",
      thumbnail: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400",
      title: "Black Cat",
      description: "Luna during playtime",
      likes: 198,
      comments: 31,
      views: 1123,
      date: "Feb 18, 2024",
    },
    {
      id: 12,
      category: "cats",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800",
      thumbnail: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400",
      title: "Calico Cat",
      description: "Milo getting grooming",
      likes: 256,
      comments: 44,
      views: 1456,
      date: "Feb 15, 2024",
    },
    {
      id: 13,
      category: "cats",
      image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=800",
      thumbnail: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400",
      title: "Siamese Cat",
      description: "Simba in her cozy bed",
      likes: 189,
      comments: 28,
      views: 1098,
      date: "Feb 12, 2024",
    },
    {
      id: 14,
      category: "cats",
      image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=800",
      thumbnail: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=400",
      title: "White Cat",
      description: "Snowball enjoying treats",
      likes: 234,
      comments: 37,
      views: 1234,
      date: "Feb 10, 2024",
    },
    {
      id: 15,
      category: "cats",
      image: "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?w=800",
      thumbnail: "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?w=400",
      title: "Grey Cat",
      description: "Ash during nap time",
      likes: 178,
      comments: 26,
      views: 987,
      date: "Feb 8, 2024",
    },
    {
      id: 16,
      category: "cats",
      image: "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?w=800",
      thumbnail: "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?w=400",
      title: "Two Cats",
      description: "Best friends playing together",
      likes: 312,
      comments: 53,
      views: 1678,
      date: "Feb 5, 2024",
    },
  ];

  const filteredImages = selectedCategory === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.style.overflow = lightboxOpen ? "hidden" : "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [lightboxOpen]);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(filteredImages[index]);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxOpen) {
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "Escape") closeLightbox();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, currentIndex]);

  return (
    <div id="gallery-page" className="min-h-screen bg-gradient-to-b from-white to-[#FDF8F0]">
      {/* Hero Section - Bruno's Theme */}
      <section className="relative bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] h-screen max-h-[700px] min-h-[550px] flex items-center justify-center overflow-hidden">
        {/* Background Blur Circles */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#D4A054] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4A054] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className={`max-w-3xl mx-auto text-center text-white transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full mb-6 mx-auto w-fit">
              <FaCamera className="text-[#D4A054]" />
              <span className="text-sm font-medium">Happy Moments Gallery</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Our{" "}
              <span className="text-[#D4A054] relative inline-block">
                Happy Pettings
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              A glimpse into the joyful lives of our furry friends and the
              beautiful moments shared with their loving families.
            </p>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#FDF8F0" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section - Bruno's Theme */}
      <div className="container mx-auto px-4 md:px-8 -mt-12 relative z-20">
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {[
            { icon: <FaCamera className="text-xl" />, value: "500+", label: "Happy Moments", color: "#8B5E3C", bg: "from-[#8B5E3C]/10 to-[#A0714F]/20" },
            { icon: <FaHeart className="text-xl" />, value: "10k+", label: "Likes Received", color: "#D4A054", bg: "from-[#D4A054]/10 to-[#F5C27B]/20" },
            { icon: <FaEye className="text-xl" />, value: "50k+", label: "Total Views", color: "#6B2E2E", bg: "from-[#6B2E2E]/10 to-[#4A3728]/20" },
            { icon: <FaThumbsUp className="text-xl" />, value: "5k+", label: "Happy Reactions", color: "#D4A054", bg: "from-[#D4A054]/10 to-[#F5C27B]/20" },
          ].map((stat, idx) => (
            <div key={idx} className={`bg-gradient-to-br ${stat.bg} rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer group`}>
              <div className="flex justify-center mb-2 group-hover:scale-110 transition-transform" style={{ color: stat.color }}>{stat.icon}</div>
              <div className="text-xl md:text-2xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Filters - Bruno's Theme */}
      <div className="container mx-auto px-4 md:px-8 pt-12 pb-8">
        <div className={`flex flex-wrap justify-center gap-3 mb-10 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-[#D4A054]/20 hover:text-[#8B5E3C] shadow-md"
              }`}
            >
              {category.icon}
              {category.name}
              <span className={`text-xs px-2 py-0.5 rounded-full ${selectedCategory === category.id ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"}`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid - Bruno's Theme */}
      <div className="container mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, idx) => (
            <div
              key={image.id}
              className={`group cursor-pointer transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${0.3 + idx * 0.05}s` }}
              onClick={() => openLightbox(idx)}
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-3">
                {/* Image Container */}
                <div className="relative overflow-hidden h-64">
                  <img src={image.thumbnail} alt={image.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  {/* Hover Content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-5 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-5 group-hover:translate-y-0">
                    <div className="flex justify-end gap-2">
                      <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all">
                        <FaSearchPlus className="text-white text-sm" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                      <p className="text-white/80 text-sm mb-2">{image.description}</p>
                      <div className="flex items-center gap-3 text-white/70 text-xs">
                        <span className="flex items-center gap-1"><FaHeart className="text-[#D4A054]" /> {image.likes}</span>
                        <span className="flex items-center gap-1"><FaComment /> {image.comments}</span>
                        <span className="flex items-center gap-1"><FaEye /> {image.views}</span>
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${image.category === "dogs" ? "bg-gradient-to-r from-[#D4A054] to-[#F5C27B] text-[#2C1810]" : "bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] text-white"}`}>
                      {image.category === "dogs" ? "🐕 Dog" : "🐱 Cat"}
                    </span>
                  </div>
                </div>

                {/* Image Footer */}
                <div className="p-4 bg-white">
                  <h3 className="font-bold text-gray-800 mb-1 group-hover:text-[#8B5E3C] transition-colors">{image.title}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400 text-xs">{image.date}</p>
                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                      <span className="flex items-center gap-1"><FaHeart className="text-[#D4A054]" /> {image.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <FaCamera className="text-6xl text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600">No photos found</h3>
            <p className="text-gray-400">Try selecting a different category</p>
          </div>
        )}
      </div>

      {/* Instagram Section - Bruno's Theme */}
      <section className="py-16 bg-gradient-to-r from-[#D4A054]/10 to-[#F5C27B]/20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <div className={`max-w-2xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="w-20 h-20 bg-gradient-to-br from-[#D4A054] to-[#F5C27B] rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg">
              <FaInstagram className="text-3xl text-[#2C1810]" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Follow Our Journey</h2>
            <p className="text-gray-600 mb-6">Get daily updates and cute moments on Instagram</p>
            <button className="bg-gradient-to-r from-[#D4A054] to-[#F5C27B] text-[#2C1810] px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105 inline-flex items-center gap-2">
              <FaInstagram /> @brunosfamilycafe
            </button>
          </div>
        </div>
      </section>

      {/* Premium Badge */}
      <div className="text-center pb-8">
        <div className="inline-flex items-center gap-2 bg-white shadow-md px-5 py-2 rounded-full">
          <FaGem className="text-[#D4A054] text-sm" />
          <span className="text-xs text-gray-500">Trusted by pet parents since 2008</span>
          <FaCoffee className="text-[#D4A054] text-sm" />
        </div>
      </div>

      {/* Lightbox Modal - Bruno's Theme */}
      {lightboxOpen && selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-10 backdrop-blur-sm">
            <FaTimes className="text-2xl" />
          </button>

          <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-10 backdrop-blur-sm">
            <FaChevronLeft className="text-2xl" />
          </button>

          <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-10 backdrop-blur-sm">
            <FaChevronRight className="text-2xl" />
          </button>

          <div className="max-w-5xl max-h-[90vh] mx-4" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.image} alt={selectedImage.title} className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl" />

            <div className="bg-black/50 backdrop-blur-md rounded-xl p-5 mt-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-white font-bold text-xl mb-1">{selectedImage.title}</h3>
                  <p className="text-white/70 mb-3">{selectedImage.description}</p>
                  <div className="flex items-center gap-4 text-white/60 text-sm">
                    <span className="flex items-center gap-1"><FaHeart /> {selectedImage.likes} likes</span>
                    <span className="flex items-center gap-1"><FaComment /> {selectedImage.comments} comments</span>
                    <span className="flex items-center gap-1"><FaEye /> {selectedImage.views} views</span>
                    <span>{selectedImage.date}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="bg-white/20 px-4 py-2 rounded-full text-white hover:bg-white/30 transition-all text-sm flex items-center gap-2">
                    <FaThumbsUp /> Like
                  </button>
                  <button className="bg-white/20 px-4 py-2 rounded-full text-white hover:bg-white/30 transition-all text-sm flex items-center gap-2">
                    <FaShare /> Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes dash {
          to { stroke-dashoffset: -200; }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-dash { animation: dash 20s linear infinite; }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
      `}</style>
    </div>
  );
};

export default GalleryPage;