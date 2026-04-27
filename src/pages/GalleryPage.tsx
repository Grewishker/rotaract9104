import { useState, useEffect, useRef } from "react";
import PageHero from "../components/PageHero";
import heroAboutImg from "../assets/hero-about.jpg";
import dlacImg from "../assets/dlac-event.jpg";
import healthImg from "../assets/health-outreach.jpg";
import fellowshipImg from "../assets/fellowship.jpg";
import trainingImg from "../assets/training.jpg";
import greenImg from "../assets/green-ghana.jpg";
import heroSlide1 from "../assets/hero-slide-1.jpg";
import careerImg from "../assets/career-expo.jpg";
import bloodImg from "../assets/blood-donation.jpg";
import heroSlide3 from "../assets/hero-slide-3.jpg";
import { ChevronLeft, ChevronRight, ExternalLink, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface GalleryEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  images: string[];
}

const galleryEvents: GalleryEvent[] = [
  {
    id: "rtls-2025-day3",
    title: "Day 3: Regional Team Learning Seminar 2025",
    date: "8th - 11th May, 2025",
    location: "Accra, Ghana",
    description: "The final day of the Regional Team Learning Seminar featured collaborative sessions and closing ceremonies.",
    images: [dlacImg, heroSlide1, heroSlide3, trainingImg, careerImg]
  },
  {
    id: "rtls-2025-day2",
    title: "Day 2: Regional Team Learning Seminar 2025",
    date: "8th - 11th May, 2025",
    location: "Accra, Ghana",
    description: "Day two focused on leadership development and strategic planning workshops.",
    images: [heroSlide1, dlacImg, trainingImg, heroSlide3, careerImg]
  },
  {
    id: "health-outreach-tamale",
    title: "Health Outreach - Tamale",
    date: "December 15, 2024",
    location: "Tamale, Northern Region",
    description: "District-wide health screening reaching over 500 beneficiaries.",
    images: [healthImg, bloodImg, dlacImg, heroSlide1, fellowshipImg]
  },
  {
    id: "green-ghana-2024",
    title: "Green Ghana Tree Planting",
    date: "November 20, 2024",
    location: "Nationwide",
    description: "Rotaract clubs across Ghana planted over 10,000 trees.",
    images: [greenImg, heroSlide3, healthImg, trainingImg, dlacImg]
  },
  {
    id: "fellowship-night-accra",
    title: "Inter-Club Fellowship Night",
    date: "November 10, 2024",
    location: "Accra, Ghana",
    description: "Rotaractors from 12 clubs gathered for networking and fellowship.",
    images: [fellowshipImg, careerImg, heroSlide1, dlacImg, greenImg]
  },
  {
    id: "club-officers-training",
    title: "Club Officers Training 2024",
    date: "December 1, 2024",
    location: "Kumasi, Ghana",
    description: "Over 200 club officers trained for the upcoming Rotary year.",
    images: [trainingImg, heroSlide3, dlacImg, fellowshipImg, careerImg]
  },
];

const GalleryCarousel: React.FC<{ event: GalleryEvent; reversed?: boolean }> = ({ event, reversed = false }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        
        if (scrollLeft >= maxScroll) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, reversed]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-16 last:mb-0">
      {/* Event Header */}
      <div className="flex flex-wrap items-end justify-between mb-4">
        <div>
          <h3 className="font-display font-bold text-primary text-xl md:text-2xl mb-2">
            {event.title}
          </h3>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {event.date}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={14} />
              {event.location}
            </span>
          </div>
          <p className="text-gray-600 text-sm mt-2 max-w-3xl">{event.description}</p>
        </div>
        <Link 
          to={`/media/gallery/${event.id}`}
          className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:text-secondary transition-colors"
        >
          VIEW FULL GALLERY <ExternalLink size={14} />
        </Link>
      </div>

      {/* Carousel Container */}
      <div 
        className="relative group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Scroll Buttons */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} className="text-primary" />
        </button>
        
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} className="text-primary" />
        </button>

        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-[5] pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-r from-transparent to-white z-[5] pointer-events-none" />

        {/* Scrollable Images */}
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {event.images.map((image, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-72 md:w-80 lg:w-96 group/item cursor-pointer"
            >
              <div className="relative h-56 md:h-64 lg:h-72 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src={image} 
                  alt={`${event.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark900/70 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-sm font-medium">
                    Image {index + 1} of {event.images.length}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const GalleryPage = () => {
  return (
    <div>
      <PageHero 
        breadcrumb="Media" 
        title="Gallery" 
        subtitle="Moments captured from events, projects, and fellowship across District 9104" 
        image={heroAboutImg} 
      />
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Featured Event - Hero Section */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-primary-dark800 to-secondary600 rounded-2xl p-8 md:p-12 text-white">
              <span className="inline-block px-3 py-1 bg-accent600 text-primary-dark text-xs font-bold rounded-full mb-4">
                FEATURED
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">
                2025-2026 Rotary District 9104 Investiture
              </h2>
              <p className="text-gray-600 text-lg mb-6 max-w-2xl">
                Celebrating the installation of new district leadership and the beginning of a new Rotary year of service.
              </p>
              <Link 
                to="/media/gallery/investiture-2025"
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition"
              >
                VIEW FULL GALLERY <ExternalLink size={16} />
              </Link>
            </div>
          </div>

          {/* Event Carousels */}
          {galleryEvents.map((event, index) => (
            <GalleryCarousel 
              key={event.id} 
              event={event} 
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </section>

      {/* Add custom CSS to hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default GalleryPage;