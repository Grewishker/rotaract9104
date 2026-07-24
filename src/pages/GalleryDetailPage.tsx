import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import PageHero from "../components/PageHero";
import OptimizedImage from "../components/OptimizedImage";
import heroAboutImg from "../assets/hero-about.jpg";
import { ChevronLeft, Calendar, MapPin } from "lucide-react";
import { galleryEvents } from "../data/galleryData";

const GalleryDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  // Get data from the shared source
  const gallery = useMemo(
    () => galleryEvents.find((item) => item.id === id),
    [id]
  );

  if (!gallery) {
    return (
      <div className="min-h-screen bg-slate-50 px-6 py-16">
        <div className="max-w-4xl mx-auto rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <h1 className="font-display text-3xl font-bold text-primary">Gallery not found</h1>
          <p className="mt-3 text-slate-600">The requested gallery could not be loaded.</p>
          <Link to="/media/gallery" className="mt-6 inline-flex items-center gap-2 text-primary font-semibold">
            <ChevronLeft size={16} /> Back to gallery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHero
        breadcrumb="Media"
        title={gallery.title}
        subtitle={gallery.description}
        image={heroAboutImg}
        showOverlay
      />

      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Full gallery</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-primary">{gallery.title}</h2>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mt-2">
                <span className="flex items-center gap-1">
                  <Calendar size={14} aria-hidden="true" />
                  {gallery.date}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} aria-hidden="true" />
                  {gallery.location}
                </span>
                <span className="text-primary font-medium">
                  {gallery.images.length} photos
                </span>
              </div>
            </div>
            <Link to="/media/gallery" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors">
              <ChevronLeft size={16} /> Back to gallery
            </Link>
          </div>

          {/* Show ALL images here */}
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {gallery.images.map((image, index) => (
              <div 
                key={`${gallery.id}-${index}`} 
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <OptimizedImage 
                  src={image} 
                  alt={`${gallery.title} — photo ${index + 1}`} 
                  className="h-72 w-full object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryDetailPage;