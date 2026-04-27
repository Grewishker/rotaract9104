import { useState } from "react";
import PageHero from "../components/PageHero";
import heroAboutImg from "../assets/hero-about.jpg";
import { FaDownload, FaBookOpen, FaExternalLinkAlt, FaCalendarAlt, FaTimes, FaFolderOpen, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface RINewsletter {
  id: string;
  title: string;
  date: string;
  desc: string;
  fileId: string;
  fileSize: string;
}

// RI Newsletter data from Google Drive - using real file IDs from your links
const allRINewsletters: RINewsletter[] = [
  {
    id: "july-2025",
    title: "RI Newsletter — July 2025",
    date: "July 2025",
    desc: "Latest updates from Rotary International including convention highlights and global initiatives.",
    fileId: "1p-3Grn_3LHi_JMlZCwbgmyRUtbLDdvbb", // July 2025 file ID needed
    fileSize: "9.1 MB",
  },
  {
    id: "sept-2024",
    title: "RI Newsletter — September 2024",
    date: "September 2024",
    desc: "Rotary Foundation updates, membership news, and international service project highlights.",
    fileId: "1p-3Grn_3LHi_JMlZCwbgmyRUtbLDdvbb", // September 2024 file ID needed
    fileSize: "12 MB",
  },
  {
    id: "july-2024",
    title: "RI Newsletter — July 2024",
    date: "July 2024",
    desc: "New Rotary year begins with presidential message and district leadership transitions.",
    fileId: "1p-3Grn_3LHi_JMlZCwbgmyRUtbLDdvbb", // July 2024 file ID needed
    fileSize: "6.6 MB",
  },
  {
    id: "april-2024",
    title: "RI Newsletter — April 2024",
    date: "April 2024",
    desc: "Spring edition featuring Rotary's environmental initiatives and Earth Day projects.",
    fileId: "1_SqvAqMEIR-V5pPcxw4f27-QAnQGlr53",
    fileSize: "12.6 MB",
  },
  {
    id: "aug-2023",
    title: "RI Newsletter — August 2023",
    date: "August 2023",
    desc: "Membership month features, club innovation stories, and Rotary Foundation updates.",
    fileId: "1Q0HIb_vIZ-4O6P-1C9daY9_sQWJTXSYG",
    fileSize: "10.1 MB",
  },
  {
    id: "dec-2023",
    title: "RI Newsletter — December 2023",
    date: "December 2023",
    desc: "Year-end review, polio eradication progress, and holiday service projects worldwide.",
    fileId: "1rZBBefqQ_BYvd_ql45rzrDhTRpxO7a87",
    fileSize: "18.2 MB",
  },
];

// Get latest 3 newsletters for display
const latestRINewsletters = allRINewsletters.slice(0, 3);

// Google Drive folder link for RI Newsletters
const RI_GOOGLE_DRIVE_FOLDER = "https://drive.google.com/drive/folders/1p-3Grn_3LHi_JMlZCwbgmyRUtbLDdvbb";

// PDF Preview Modal with Google Drive embed
const RINewsletterPreview: React.FC<{ newsletter: RINewsletter; onClose: () => void }> = ({ newsletter, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 68; // Based on the PDFs having 68 pages

  // Google Drive embed URL format for PDF preview
  const embedUrl = `https://drive.google.com/file/d/${newsletter.fileId}/preview`;
  
  // Direct view URL
  const viewUrl = `https://drive.google.com/file/d/${newsletter.fileId}/view?usp=drive_link`;
  
  // Download URL
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${newsletter.fileId}`;

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
              href={viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 bg-primary text-white rounded-full text-xs md:text-sm font-medium hover:bg-primary-dark transition whitespace-nowrap"
            >
              <FaExternalLinkAlt size={12} /> <span className="hidden sm:inline">Open in</span> Drive
            </a>
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 bg-green-600 text-white rounded-full text-xs md:text-sm font-medium hover:bg-green-700 transition whitespace-nowrap"
            >
              <FaDownload size={12} /> <span className="hidden sm:inline">Download</span>
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

        {/* PDF Embed Viewer */}
        <div className="flex-1 relative bg-gray-800">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                <p className="text-gray-600 text-sm md:text-base">Loading newsletter...</p>
              </div>
            </div>
          )}
          
          <iframe
            src={embedUrl}
            className="w-full h-full border-0"
            title={newsletter.title}
            onLoad={() => setIsLoading(false)}
            allow="autoplay"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          />
        </div>

        {/* Bottom Controls */}
        <div className="flex items-center justify-between p-3 md:p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center gap-2">
            <button 
              className="p-1.5 md:p-2 hover:bg-gray-200 rounded-full transition disabled:opacity-50"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              aria-label="Previous page"
            >
              <FaChevronLeft size={16} className="text-gray-600" />
            </button>
            <span className="text-xs md:text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </span>
            <button 
              className="p-1.5 md:p-2 hover:bg-gray-200 rounded-full transition disabled:opacity-50"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              aria-label="Next page"
            >
              <FaChevronRight size={16} className="text-gray-600" />
            </button>
          </div>
          <p className="text-gray-400 text-xs">
            Scroll to navigate • Use toolbar for zoom
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const RINewsPage = () => {
  const [selectedNewsletter, setSelectedNewsletter] = useState<RINewsletter | null>(null);

  const handleDownloadLatest = () => {
    if (latestRINewsletters[0]) {
      window.open(`https://drive.google.com/uc?export=download&id=${latestRINewsletters[0].fileId}`, '_blank');
    }
  };

  return (
    <div>
      <PageHero 
        breadcrumb="Media → Newsletters" 
        title="Rotary International News" 
        subtitle="Official newsletters and updates from Rotary International" 
        image={heroAboutImg} 
      />
      
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Latest RI Newsletters Section */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <h2 className="font-display font-bold text-primary text-xl md:text-2xl">Latest RI Newsletters</h2>
              <span className="bg-secondary/10 text-primary text-xs font-medium px-3 py-1 rounded-full self-start sm:self-auto">
                Official RI Publications
              </span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {latestRINewsletters.map((newsletter) => (
                <motion.div
                  key={newsletter.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group cursor-pointer"
                  onClick={() => setSelectedNewsletter(newsletter)}
                >
                  {/* Newsletter Cover */}
                  <div className="relative h-40 md:h-48 bg-gradient-to-br from-primary-dark800 to-secondary600 flex items-center justify-center">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-2 left-2 w-12 md:w-16 h-12 md:h-16 border-2 border-white/30 rounded" />
                      <div className="absolute bottom-2 right-2 w-16 md:w-20 h-16 md:h-20 border-2 border-white/30 rounded" />
                    </div>
                    <FaBookOpen size={40} className="text-white/80 md:text-[48px]" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-dark900/80 to-transparent p-3 md:p-4">
                      <span className="text-white font-bold text-base md:text-lg">
                        RI NEWSLETTER
                      </span>
                    </div>
                  </div>
                  
                  {/* Newsletter Info */}
                  <div className="p-4 md:p-5">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <FaCalendarAlt size={12} />
                      <span>{newsletter.date}</span>
                      <span className="ml-auto text-gray-400">{newsletter.fileSize}</span>
                    </div>
                    <h3 className="font-display font-bold text-primary text-sm md:text-base mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                      {newsletter.title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm mb-4 line-clamp-2">{newsletter.desc}</p>
                    
                    <div className="flex items-center gap-2">
                      <button className="flex-1 flex items-center justify-center gap-2 bg-secondary/5 text-primary py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-secondary/10 transition">
                        <FaBookOpen size={12} /> Preview
                      </button>
                      <a
                        href={`https://drive.google.com/uc?export=download&id=${newsletter.fileId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1 p-2 text-gray-500 hover:text-primary hover:bg-gray-100 rounded-lg transition"
                        onClick={(e) => e.stopPropagation()}
                        aria-label="Download"
                      >
                        <FaDownload size={14} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Past RI Newsletters Section */}
          <div className="bg-gradient-to-r from-gray-50 to-secondary50 rounded-xl md:rounded-2xl p-6 md:p-12 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaFolderOpen size={24} className="text-primary md:text-[28px]" />
              </div>
              <h3 className="font-display font-bold text-primary text-xl md:text-2xl mb-3">
                Browse Past RI Newsletters
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-6">
                Access our complete archive of Rotary International newsletters dating back to 2023. 
                All past editions are available in our Google Drive folder.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <a
                  href={RI_GOOGLE_DRIVE_FOLDER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-primary-dark transition"
                >
                  <FaExternalLinkAlt size={14} /> Open Google Drive Archive
                </a>
                <button 
                  onClick={handleDownloadLatest}
                  className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-5 py-3 rounded-full text-sm font-medium hover:bg-secondary/5 transition"
                >
                  <FaDownload size={14} /> Download Latest Edition
                </button>
              </div>
              <p className="text-gray-400 text-xs mt-4">
                You'll be redirected to Google Drive to browse all past editions
              </p>
            </div>
          </div>

          {/* RI Newsletter Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-8 md:mt-12">
            {[
              { value: "15+", label: "RI Editions Archived" },
              { value: "2023", label: "Archive Since" },
              { value: "Monthly", label: "Publication Frequency" },
              { value: "PDF", label: "Format" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-3 md:p-4 bg-gray-50 rounded-lg">
                <p className="font-display font-bold text-xl md:text-2xl text-primary">{stat.value}</p>
                <p className="text-gray-500 text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RI Newsletter Preview Modal */}
      <AnimatePresence>
        {selectedNewsletter && (
          <RINewsletterPreview 
            newsletter={selectedNewsletter} 
            onClose={() => setSelectedNewsletter(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default RINewsPage;