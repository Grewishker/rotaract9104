import { useState, useEffect, useRef, ImgHTMLAttributes } from "react";

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholder?: string;
  aspectRatio?: "square" | "video" | "portrait" | "auto";
  priority?: boolean;
}

/**
 * OptimizedImage component with blur-up placeholder, lazy loading, and performance optimizations.
 * Use this instead of raw <img> tags throughout the app for consistent image performance.
 */
export const OptimizedImage = ({
  src,
  alt,
  placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23f3f4f6' width='400' height='300'/%3E%3C/svg%3E",
  aspectRatio = "auto",
  priority = false,
  className = "",
  ...props
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(placeholder);
  const imgRef = useRef<HTMLImageElement>(null);

  const aspectRatioClass = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    auto: "",
  }[aspectRatio];

  // Preload the actual image
  useEffect(() => {
    if (!src) return;

    const img = new Image();
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
    img.onerror = () => {
      console.error(`Failed to load image: ${src}`);
    };
    img.src = src;
  }, [src]);

  return (
    <div className={`relative overflow-hidden bg-gray-100 ${aspectRatioClass}`}>
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-50 blur-sm"
        } ${className}`}
        {...props}
      />
      {/* CSS-based skeleton during load */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      )}
    </div>
  );
};

export default OptimizedImage;
