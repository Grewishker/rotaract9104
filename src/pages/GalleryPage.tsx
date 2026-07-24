import { useState, useEffect, useRef, useCallback, memo } from "react";
import PageHero from "../components/PageHero";
import OptimizedImage from "../components/OptimizedImage";
import heroAboutImg from "../assets/hero-about.jpg";
import { ChevronLeft, ChevronRight, ExternalLink, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { galleryEvents, getCarouselImages } from "../data/galleryData";
import type { GalleryEvent } from "../data/galleryData";
import heroimage1 from "../assets/heroImages/HANDOVER-100.jpg"
import heroimage2 from "../assets/heroImages/HANDOVER-64.jpg"
import heroimage3 from "../assets/heroImages/HANDOVER-80.jpg"

// ─── Hook: mount-aware intersection observer ──────────────────────────────────
function useIsVisible(rootMargin = "200px") {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, isVisible };
}

// ─── Hook: preload adjacent images ────────────────────────────────────────────
function usePreloadAdjacentImages(images: string[], scrollIndex: number) {
  useEffect(() => {
    const preloadImage = (src: string) => {
      const img = new Image();
      img.src = src;
    };

    const preloadRange = 2;
    for (let i = scrollIndex - preloadRange; i <= scrollIndex + preloadRange; i++) {
      if (i >= 0 && i < images.length) {
        preloadImage(images[i]);
      }
    }
  }, [images, scrollIndex]);
}

// ─── GalleryCarousel ──────────────────────────────────────────────────────────
const GalleryCarousel = memo(function GalleryCarousel({
  event,
  isFirstEvent = false,
}: {
  event: GalleryEvent;
  isFirstEvent?: boolean;
}) {
  // Only show 7 images in carousel
  const carouselImages = getCarouselImages(event);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollIndex, setScrollIndex] = useState(0);

  const { ref: wrapperRef, isVisible } = useIsVisible("300px");
  usePreloadAdjacentImages(carouselImages, scrollIndex);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / 320);
    setScrollIndex(index);
  }, []);

  useEffect(() => {
    if (!isVisible || isPaused) return;

    const interval = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      const { scrollLeft, scrollWidth, clientWidth } = el;
      if (scrollLeft >= scrollWidth - clientWidth - 1) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 320, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible, isPaused]);

  const scroll = useCallback((direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -420 : 420,
      behavior: "smooth",
    });
  }, []);

  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

  return (
    <div ref={wrapperRef} className="mb-16 last:mb-0">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between mb-4">
        <div>
          <h3 className="font-display font-bold text-primary text-xl md:text-2xl mb-2">
            {event.title}
          </h3>
          <p className="text-gray-600 text-sm mt-2 max-w-3xl">{event.description}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mt-1">
            <span className="flex items-center gap-1">
              <Calendar size={14} aria-hidden="true" />
              {event.date}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={14} aria-hidden="true" />
              {event.location}
            </span>
          </div>
        </div>
        <Link
          to={`/media/gallery/${event.id}`}
          className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:text-secondary transition-colors mt-2 md:mt-0"
        >
          VIEW ALL {event.images.length} PHOTOS <ExternalLink size={14} aria-hidden="true" />
        </Link>
      </div>

      {/* Carousel */}
      {isVisible ? (
        <div
          className="relative group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
          >
            <ChevronLeft size={20} className="text-primary" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
          >
            <ChevronRight size={20} className="text-primary" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 gallery-scrollbar-hide"
            onScroll={handleScroll}
          >
            {carouselImages.map((image, index) => {
              const isLCP = isFirstEvent && index === 0;
              return (
                <div
                  key={image}
                  className="flex-shrink-0 w-64 md:w-80 lg:w-96 group/item cursor-pointer"
                >
                  <div className="relative h-56 md:h-64 lg:h-72 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    <OptimizedImage
                      src={image}
                      alt={`${event.title} — photo ${index + 1} of ${event.images.length}`}
                      priority={isLCP}
                      className="gallery-img"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white text-sm font-medium">
                        {index + 1} / {event.images.length}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="h-64 md:h-72 lg:h-80 rounded-lg bg-gray-100 animate-pulse" />
      )}
    </div>
  );
});

// ─── Page ─────────────────────────────────────────────────────────────────────
const GalleryPage = () => {
  return (
    <div>
     <PageHero 
      breadcrumb="About" 
      title="District Rotaract Representative" 
      // image={heroAboutImg} 
      image={[
        heroimage1,
        heroimage2,
        heroimage3
      ]}
    />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Featured Event Banner */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-primary-dark800 to-secondary600 rounded-2xl p-8 md:p-12 text-secondary-dark">
              <span className="inline-block px-3 py-1 bg-accent600 text-secondary text-xs font-bold rounded-full mb-4">
                FEATURED
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">
                {galleryEvents[0].title}
              </h2>
              <p className="text-gray-600 text-lg mb-6 max-w-2xl">
                {galleryEvents[0].description}
              </p>
              <Link
                to={`/media/gallery/${galleryEvents[0].id}`}
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition"
              >
                VIEW FULL GALLERY <ExternalLink size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Event Carousels - each showing only 7 images */}
          {galleryEvents.map((event, index) => (
            <GalleryCarousel
              key={event.id}
              event={event}
              isFirstEvent={index === 0}
            />
          ))}
        </div>
      </section>

      <style>{`
        .gallery-scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .gallery-scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .gallery-img {
          transition: transform 500ms ease;
        }
        .group\\/item:hover .gallery-img {
          transform: scale(1.05);
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default GalleryPage;