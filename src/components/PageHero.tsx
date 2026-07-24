import { useState, useEffect, useRef } from 'react';

interface PageHeroProps {
  breadcrumb?: string;
  title?: string;
  subtitle?: string;
  image?: string | string[];
  images?: string[];
  video?: string;
  mediaType?: 'image' | 'video';
  showOverlay?: boolean;
  overlayClassName?: string;
  transitionDurationMs?: number;
  imageAlt?: string;
}

const PageHero = ({ 
  breadcrumb, 
  title, 
  subtitle, 
  image, 
  images,
  video, 
  mediaType = 'image',
  showOverlay = true,
  overlayClassName = "bg-gradient-to-b from-primary via-pink-700/70 to-pink-700 opacity-50",
  transitionDurationMs = 6000,
  imageAlt = ""
}: PageHeroProps) => {
  const [videoError, setVideoError] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const imageSources = images ?? (Array.isArray(image) ? image : typeof image === 'string' ? [image] : []);
  const hasMedia = imageSources.length > 0 || !!video;
  const hasVideo = mediaType === 'video' && video && !videoError;
  const hasImageCarousel = !hasVideo && imageSources.length > 1;

  useEffect(() => {
    if (videoRef.current && hasVideo) {
      videoRef.current.load();
      videoRef.current.play().catch(e => console.log('Play error:', e));
    }
  }, [video, hasVideo]);

  useEffect(() => {
    if (!hasImageCarousel) {
      setActiveImageIndex(0);
      return;
    }

    const timer = window.setInterval(() => {
      setActiveImageIndex((current) => (current + 1) % imageSources.length);
    }, transitionDurationMs);

    return () => window.clearInterval(timer);
  }, [hasImageCarousel, imageSources.length, transitionDurationMs]);

  return (
    <section className={`
      relative bg-primary text-center overflow-hidden rounded-b-2xl
      ${!hasMedia ? 'py-8 md:py-12' : ''}
      ${hasMedia && !hasVideo ? 'py-16 md:py-20' : ''}
      ${hasVideo ? 'py-20 md:py-28 lg:py-32' : ''}
    `}>
      {(imageSources.length > 0 || video) && (
        <>
          {hasVideo ? (
            <video 
              ref={videoRef}
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              onError={() => setVideoError(true)}
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : imageSources.length > 0 && (
            <div className="absolute inset-0 overflow-hidden">
              {imageSources.map((src, index) => (
                <img
                  key={`${src}-${index}`}
                  src={src}
                  alt={imageAlt || ''}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1200ms ease-out ${
                    index === activeImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                />
              ))}
            </div>
          )}
          {showOverlay && (
            <div className={`absolute inset-0 ${overlayClassName}`} />
          )}
        </>
      )}
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {breadcrumb && (
          <p className="text-white text-xs uppercase tracking-widest font-semibold mb-3">
            {breadcrumb}
          </p>
        )}
        {title && (
          <h1 className="text-white font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-3">
            {title}
          </h1>
        )}
        {subtitle && (
          <p className="text-gray-50 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;