import { useState } from "react";
import PageHero from "../components/PageHero";
import heroAboutImg from "@/assets/heroImages/page of impact newletter logo mockup.png";
import { FaDownload, FaBookOpen, FaExternalLinkAlt, FaCalendarAlt, FaTimes, FaFolderOpen, FaChevronLeft, FaChevronRight, FaFilePdf, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Newsletter data - Now using Heyzine embed for the latest edition
const allNewsletters = [
  {
    id: "jul-2026",
    title: "Pages of Impact — July 2026 Edition #1",
    date: "July 2026",
    desc: "Our inaugural edition! Welcome to the first official newsletter of Rotaract District 9104 for the 2026-27 Rotary Year.",
    fileSize: "Flip-book",
    isLatest: true,
    // Heyzine embed URL for the first edition
    embedUrl: "https://heyzine.com/flip-book/a302166fdb.html",
    thumbnail: null,
  },
  // Future editions will be added here with their own embed URLs
  // {
  //   id: "aug-2026",
  //   title: "Pages of Impact — August 2026 Edition #2",
  //   date: "August 2026",
  //   desc: "Second edition featuring district projects and member spotlights.",
  //   fileSize: "Flip-book",
  //   isLatest: false,
  //   embedUrl: "https://heyzine.com/flip-book/your-next-edition-id.html",
  //   thumbnail: null,
  // },
];

// Google Drive folder link for archive
const GOOGLE_DRIVE_FOLDER = "https://drive.google.com/drive/folders/1FZ2eJshFzN8sWjlPZgsAE72ym0KcUjRy";

// Flip-book Preview Modal
const NewsletterPreview: React.FC<{ newsletter: typeof allNewsletters[0]; onClose: () => void }> = ({ newsletter, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4 bg-black/90"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        className="bg-white rounded-xl md:rounded-2xl overflow-hidden w-full max-w-6xl h-[95vh] md:h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Preview Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 md:p-4 border-b border-gray-200 bg-gray-50">
          <div className="flex-1 min-w-0">
            <h3 className="font-display font-bold text-primary text-base md:text-lg truncate">
              {newsletter.title}
            </h3>
            <p className="text-gray-500 text-xs md:text-sm flex items-center gap-2">
              <FaCalendarAlt size={12} />
              {newsletter.date} • {newsletter.fileSize}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={newsletter.embedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 bg-primary text-white rounded-full text-xs md:text-sm font-medium hover:bg-primary-dark transition whitespace-nowrap"
            >
              <FaExternalLinkAlt size={12} /> <span className="hidden sm:inline">Open Full</span> Screen
            </a>
            <button
              onClick={onClose}
              className="p-1.5 md:p-2 hover:bg-gray-200 rounded-full transition"
              aria-label="Close preview"
            >
              <FaTimes size={18} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Heyzine Flip-book Embed */}
        <div className="flex-1 relative bg-gray-100">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                <p className="text-gray-600 text-sm md:text-base">Loading newsletter...</p>
              </div>
            </div>
          )}
          
          <iframe
            src={newsletter.embedUrl}
            className="w-full h-full border-0"
            title={newsletter.title}
            onLoad={() => setIsLoading(false)}
            allow="autoplay; fullscreen; clipboard-write"
            scrolling="no"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          />
        </div>

        {/* Bottom Controls */}
        <div className="flex items-center justify-between p-3 md:p-4 border-t border-gray-200 bg-gray-50">
          <p className="text-gray-400 text-xs">
            Use the toolbar to navigate pages • Click arrows to flip
          </p>
          <span className="text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
            Interactive Flip-book
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

const DistrictNewslettersPage = () => {
  const [selectedNewsletter, setSelectedNewsletter] = useState<typeof allNewsletters[0] | null>(null);
  
  // Get the latest newsletter (first one)
  const latestNewsletter = allNewsletters[0];
  
  // Get past newsletters (excluding the latest)
  const pastNewsletters = allNewsletters.slice(1);

  return (
    <div>
      <PageHero 
        breadcrumb="Media → Newsletters" 
        title="District Newsletters" 
        subtitle="Quarterly publications from Rotaract District 9104" 
        image={heroAboutImg}
        showOverlay={true} 
      />
      
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* ─── FEATURED / LATEST NEWSLETTER ────────────────────────────── */}
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <span className="inline-block px-3 py-1 bg-accent600/10 text-accent600 text-xs font-bold uppercase tracking-wider rounded-full mb-2">
                  Latest Edition
                </span>
                <h2 className="font-display font-bold text-primary text-xl md:text-2xl">
                  Our Inaugural Edition
                </h2>
              </div>
              <span className="bg-secondary/10 text-primary text-xs font-medium px-3 py-1 rounded-full self-start sm:self-auto">
                July 2026
              </span>
            </div>
            
            {/* Featured Newsletter Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-primary-dark to-primary rounded-2xl overflow-hidden shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedNewsletter(latestNewsletter)}
            >
              <div className="grid md:grid-cols-[1fr_1.2fr] gap-0">
                {/* Left side - Cover */}
                <div className="relative h-56 md:h-auto bg-gradient-to-br from-primary-dark800 to-primary-dark600 flex items-center justify-center p-8">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-20 h-20 border-2 border-white/30 rounded" />
                    <div className="absolute bottom-4 right-4 w-24 h-24 border-2 border-white/30 rounded" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-white/20 rounded-full" />
                  </div>
                  <div className="relative text-center">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <FaBookOpen size={40} className="text-white/80" />
                    </div>
                    <h3 className="text-white font-bold text-2xl md:text-3xl">
                      Pages of Impact
                    </h3>
                    <p className="text-white/70 text-sm mt-1">Vol. 1 • July 2026</p>
                    <div className="mt-3 inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Flip to Read
                    </div>
                  </div>
                </div>
                
                {/* Right side - Info */}
                <div className="p-6 md:p-8 flex flex-col justify-center text-white">
                  <div className="flex items-center gap-2 text-white/70 text-sm mb-3">
                    <FaCalendarAlt size={14} />
                    <span>{latestNewsletter.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl md:text-3xl mb-3">
                    {latestNewsletter.title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
                    {latestNewsletter.desc}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedNewsletter(latestNewsletter);
                      }}
                      className="inline-flex items-center gap-2 bg-white text-primary font-bold px-5 py-2.5 rounded-full hover:bg-gray-100 transition"
                    >
                      <FaBookOpen size={14} /> Read Now
                    </button>
                    <a
                      href={latestNewsletter.embedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 border-2 border-white/60 text-white font-medium px-5 py-2.5 rounded-full hover:bg-white/10 transition"
                    >
                      <FaExternalLinkAlt size={14} /> Open Full Screen
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ─── PAST NEWSLETTERS ──────────────────────────────────────────── */}
          {pastNewsletters.length > 0 && (
            <div className="mb-12">
              <h2 className="font-display font-bold text-primary text-xl md:text-2xl mb-6">
                Past Editions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {pastNewsletters.map((newsletter) => (
                  <motion.div
                    key={newsletter.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group cursor-pointer"
                    onClick={() => setSelectedNewsletter(newsletter)}
                  >
                    <div className="relative h-40 bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
                      <FaFilePdf size={48} className="text-red-400" />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800/80 to-transparent p-3">
                        <span className="text-white font-bold text-sm">
                          {newsletter.title.includes("Pages of Impact") ? "Pages of Impact" : "RD9104"}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <FaCalendarAlt size={12} />
                        <span>{newsletter.date}</span>
                      </div>
                      <h3 className="font-display font-bold text-primary text-sm mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                        {newsletter.title}
                      </h3>
                      <p className="text-gray-600 text-xs mb-4 line-clamp-2">{newsletter.desc}</p>
                      <button className="w-full flex items-center justify-center gap-2 bg-secondary/5 text-primary py-2 rounded-lg text-xs font-medium hover:bg-secondary/10 transition">
                        <FaBookOpen size={12} /> View Flip-book
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* ─── ARCHIVE / GOOGLE DRIVE SECTION ───────────────────────────── */}
          {/* <div className="bg-gradient-to-r from-gray-50 to-secondary50 rounded-xl md:rounded-2xl p-6 md:p-12 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaFolderOpen size={24} className="text-primary md:text-[28px]" />
              </div>
              <h3 className="font-display font-bold text-primary text-xl md:text-2xl mb-3">
                Browse Our Archive
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-6">
                Access our complete archive of district newsletters. 
                All past editions are available in our Google Drive folder.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <a
                  href={GOOGLE_DRIVE_FOLDER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-primary-dark transition"
                >
                  <FaExternalLinkAlt size={14} /> Open Google Drive Archive
                </a>
                <Link
                  to="/resources"
                  className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-5 py-3 rounded-full text-sm font-medium hover:bg-secondary/5 transition"
                >
                  <FaArrowRight size={14} /> More Resources
                </Link>
              </div>
              <p className="text-gray-400 text-xs mt-4">
                You'll be redirected to Google Drive to browse all past editions
              </p>
            </div>
          </div> */}

          {/* ─── STATS ──────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-8 md:mt-12">
            {[
              { value: "1", label: "Edition Published" },
              { value: "2026", label: "Archive Since" },
              { value: "Quarterly", label: "Publication Frequency" },
              { value: "Flip-book", label: "Format" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-3 md:p-4 bg-gray-50 rounded-lg">
                <p className="font-display font-bold text-xl md:text-2xl text-primary">{stat.value}</p>
                <p className="text-gray-500 text-xs">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* ─── COMING SOON NOTE ──────────────────────────────────────────── */}
          <div className="mt-8 p-4 md:p-6 bg-amber-50 border border-amber-200 rounded-xl">
            <div className="flex items-start gap-3">
              <span className="text-2xl">!!!</span>
              <div>
                <h4 className="font-bold text-amber-800 text-sm md:text-base">Stay Tuned!</h4>
                <p className="text-amber-700 text-sm">
                  Our next edition is coming soon. Subscribe to our newsletter to receive updates directly in your inbox.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flip-book Preview Modal */}
      <AnimatePresence>
        {selectedNewsletter && (
          <NewsletterPreview 
            newsletter={selectedNewsletter} 
            onClose={() => setSelectedNewsletter(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default DistrictNewslettersPage;