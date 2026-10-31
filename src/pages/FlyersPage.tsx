import PageHero from "../components/PageHero";
import { Download, ZoomIn, X } from "lucide-react";
import { useState } from "react";
import heroAboutImg from "../assets/hero-about.jpg";
import rotaryyear from "../assets/flyers/HAPPY NEW YEAR ROTARY.png";
import strategicplan from "../assets/flyers/THREE YEAR DISTRICT PLAN.png";
import cleanandgreenghana from "../assets/flyers/CLEAN AND GREEN GHANA.png";
import iyd from "../assets/flyers/IYD.png";
import iydcelebration from "../assets/flyers/IYDCELEBRATION.png";
import maternityrenovation from "../assets/flyers/MATERNITY RENOVATION.png";
import drrrofficialvisit from "../assets/flyers/2025OFFICIALDRRVISIT.png";
import vcls1 from "../assets/flyers/VIRTUAL CLUB LEARNING SEMINAR.png";
import vcls2 from "../assets/flyers/VIRTUAL CLUB LEARNING SEMINAR2.png";
import dlac2027 from "../assets/flyers/DLAC2027.png";

const flyers = [
  { title: "2026-27 Rotary Year", date: "Jul 2026", image: rotaryyear, download: rotaryyear },
  { title: "Three-year District Strategic Plan", date: "", image: strategicplan, download: strategicplan},
  { title: "Clean and Green Ghana", date: "", image: cleanandgreenghana, download: cleanandgreenghana },
  { title: "IYDr", date: "", image: iyd, download: iyd },
  { title: "IYD CELEBRATION", date: "", image: iydcelebration, download: iydcelebration },
  { title: "Maternity Renovation", date: "", image: maternityrenovation, download: maternityrenovation },
  { title: "2025-26 DRR OFFICIAL VISIT", date: "", image: drrrofficialvisit , download: drrrofficialvisit },
  { title: "VIrtual CLub Learning Seminar 1", date: "", image: vcls1, download: vcls1 },
  { title: "VIrtual CLub Learning Seminar 2", date: "", image: vcls2 , download: vcls2 },
  { title: "DLAC 2027", date: "", image: dlac2027, download: dlac2027 }];

const FlyersPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  const handleDownload = (imageUrl: string, title: string) => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `${title.toLowerCase().replace(/[^a-z0-9]/g, "-")}.jpg`;
    link.target = "_blank";
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openImageViewer = (imageUrl: string, title: string) => {
    setSelectedImage(imageUrl);
    setSelectedTitle(title);
    document.body.style.overflow = "hidden";
  };

  const closeImageViewer = () => {
    setSelectedImage(null);
    setSelectedTitle("");
    document.body.style.overflow = "auto";
  };

  return (
    <div>
      {/* Page Hero */}
      {/* <PageHero 
        title="Flyers & Events"
        subtitle="Download our event flyers and promotional materials"
        image={heroAboutImg}
      /> */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Grid Layout */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {flyers.map((f, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image Container with Aspect Ratio */}
                <div 
                  className="relative w-full bg-gray-100 cursor-pointer group"
                  style={{ paddingBottom: "141.4%" }} // 3:4 aspect ratio
                  onClick={() => openImageViewer(f.image, f.title)}
                >
                  <img 
                    src={f.image} 
                    alt={f.title} 
                    className="absolute inset-0 w-full h-full object-contain bg-gray-50 transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Zoom Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ZoomIn className="w-12 h-12 text-white drop-shadow-lg" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {f.date}
                  </p>
                  <button
                    onClick={() => handleDownload(f.download, f.title)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    <Download size={18} />
                    Download Flyer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Viewer Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={closeImageViewer}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeImageViewer}
              className="absolute top-4 right-4 z-10 p-2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full text-white transition-colors duration-200"
              aria-label="Close viewer"
            >
              <X size={24} />
            </button>

            {/* Image Display */}
            <div className="w-full h-full flex items-center justify-center p-4 bg-white">
              <img 
                src={selectedImage} 
                alt={selectedTitle}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>

            {/* Title Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h3 className="text-white text-xl font-semibold">
                {selectedTitle}
              </h3>
              <button
                onClick={() => handleDownload(selectedImage, selectedTitle)}
                className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors duration-200"
              >
                <Download size={18} />
                Download Full Resolution
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlyersPage;