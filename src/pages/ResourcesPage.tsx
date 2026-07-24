import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaDownload,
  FaSearch,
  FaFilter,
  FaTimes,
  FaFilePdf,
  FaFileWord,
  FaFileExcel,
  FaFileAlt,
  FaFile,
  FaFolder,
  FaArrowRight,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";
import PageHero from "../components/PageHero";
import heroAboutImg from "../assets/hero-about.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } }
};

const AnimatedSection = ({ children, className }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Full Resources Data
const allResources = [
  // Song Books
  { 
    id: 1,
    title: "District 9104 Song Book",
    description: "Official collection of Rotaract and Rotary songs for District 9104",
    category: "Song Book",
    subcategory: "District Resources",
    type: "PDF",
    // fileSize: "2.4 MB",
    url: "/files/District 9104 Song Book.pdf",
    dateAdded: "2026-06-15",
    // downloadCount: 245
  },
  // Bylaws
  { 
    id: 2,
    title: "District Bylaw 2026-27",
    description: "Official district bylaws and governance guidelines for the 2026-27 term",
    category: "Bylaws",
    subcategory: "Governance",
    type: "PDF",
    // fileSize: "1.8 MB",
    url: "/files/District Bylaw 2026-2027.pdf",
    dateAdded: "2026-05-20",
    // downloadCount: 189
  },
  // Oaths
  { 
    id: 3,
    title: "Oath of Membership",
    description: "Official oath for new Rotaract members joining the movement",
    category: "Oaths",
    subcategory: "Membership",
    type: "PDF",
    // fileSize: "0.5 MB",
    url: "/files/Oath of Membership.pdf",
    dateAdded: "2026-04-10",
    // downloadCount: 312
  },
  { 
    id: 4,
    title: "Oath of Office for Presidents",
    description: "Official oath for club presidents and incoming leaders",
    category: "Oaths",
    subcategory: "Leadership",
    type: "PDF",
    // fileSize: "0.6 MB",
    url: "/files/Oath of Office FOR PRESIDENTS.pdf",
    dateAdded: "2026-04-10",
    // downloadCount: 178
  },
  // Club Resources
  { 
    id: 5,
    title: "Meeting Order",
    description: "Official meeting order for Rotaract clubs in District 9104",
    category: "Club Resources",
    subcategory: "Meeting",
    type: "PDF",
    // fileSize: "0.8 MB",
    url: "/files/Meeting Order.pdf",
    dateAdded: "2026-03-15",
    // downloadCount: 156
  },
  // { 
  //   id: 6,
  //   title: "Club Strategic Planning Guide",
  //   description: "Comprehensive guide for strategic planning and goal setting",
  //   category: "Club Resources",
  //   subcategory: "Planning",
  //   type: "PDF",
  //   fileSize: "1.2 MB",
  //   url: "/files/Strategic-Planning-Guide.pdf",
  //   dateAdded: "2026-02-20",
  //   downloadCount: 134
  // },
  // // Leadership Resources
  // { 
  //   id: 7,
  //   title: "Leadership Development Handbook",
  //   description: "Essential leadership skills and development resources for club leaders",
  //   category: "Leadership",
  //   subcategory: "Development",
  //   type: "PDF",
  //   fileSize: "3.1 MB",
  //   url: "/files/Leadership-Development-Handbook.pdf",
  //   dateAdded: "2026-01-15",
  //   downloadCount: 267
  // },
  // { 
  //   id: 8,
  //   title: "RYLA Participant Guide",
  //   description: "Complete guide for RYLA participants and facilitators",
  //   category: "Leadership",
  //   subcategory: "RYLA",
  //   type: "PDF",
  //   fileSize: "2.2 MB",
  //   url: "/files/RYLA-Guide.pdf",
  //   dateAdded: "2025-12-01",
  //   downloadCount: 423
  // },
  // // Service Resources
  // { 
  //   id: 9,
  //   title: "Service Project Planning Kit",
  //   description: "Complete toolkit for planning and executing successful service projects",
  //   category: "Service",
  //   subcategory: "Project Planning",
  //   type: "PDF",
  //   fileSize: "4.5 MB",
  //   url: "/files/Service-Project-Planning-Kit.pdf",
  //   dateAdded: "2025-11-10",
  //   downloadCount: 389
  // },
  // { 
  //   id: 10,
  //   title: "Community Needs Assessment Guide",
  //   description: "Guide for conducting effective community needs assessments",
  //   category: "Service",
  //   subcategory: "Community",
  //   type: "PDF",
  //   fileSize: "1.5 MB",
  //   url: "/files/Community-Needs-Assessment.pdf",
  //   dateAdded: "2025-10-20",
  //   downloadCount: 201
  // },
  // // International Resources
  // { 
  //   id: 11,
  //   title: "Rotaract Global Guide 2026",
  //   description: "Comprehensive guide to Rotaract operations and best practices",
  //   category: "International",
  //   subcategory: "Global Resources",
  //   type: "PDF",
  //   fileSize: "5.2 MB",
  //   url: "/files/Rotaract-Global-Guide-2026.pdf",
  //   dateAdded: "2026-01-01",
  //   downloadCount: 567
  // },
  // { 
  //   id: 12,
  //   title: "Global Exchange Program Guide",
  //   description: "Information and guidelines for international exchange programs",
  //   category: "International",
  //   subcategory: "Exchanges",
  //   type: "PDF",
  //   fileSize: "2.8 MB",
  //   url: "/files/Global-Exchange-Guide.pdf",
  //   dateAdded: "2025-09-15",
  //   downloadCount: 145
  // },
];

// Get unique categories for filter
const categories = ["All Categories", ...new Set(allResources.map(r => r.category))];

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [expandedResource, setExpandedResource] = useState(null);

  // Filter resources
  const filteredResources = useMemo(() => {
    return allResources.filter(resource => {
      const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           resource.subcategory.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All Categories" || resource.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Get file icon
  const getFileIcon = (type) => {
    switch(type.toUpperCase()) {
      case 'PDF': return <FaFilePdf className="text-red-500" />;
      case 'DOCX': return <FaFileWord className="text-blue-500" />;
      case 'XLSX': return <FaFileExcel className="text-green-500" />;
      default: return <FaFileAlt className="text-gray-500" />;
    }
  };

  // Get file color
  const getFileColor = (type) => {
    switch(type.toUpperCase()) {
      case 'PDF': return "bg-red-50 border-red-200";
      case 'DOCX': return "bg-blue-50 border-blue-200";
      case 'XLSX': return "bg-green-50 border-green-200";
      default: return "bg-gray-50 border-gray-200";
    }
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  // Get category icon
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Song Book': return '';
      case 'Bylaws': return '';
      case 'Oaths': return '';
      case 'Club Resources': return '';
      case 'Leadership': return '';
      case 'Service': return '';
      case 'International': return '';
      default: return '';
    }
  };

  return (
    <div>
      <PageHero 
        breadcrumb="Resources" 
        title="Rotaract Resources"
        subtitle="Essential guides, documents, and downloads for District 9104" 
        image={heroAboutImg}
      />

      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          {/* Stats Bar */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-primary">{allResources.length}</div>
              <div className="text-sm text-gray-500">Total Resources</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-accent600">{new Set(allResources.map(r => r.category)).size}</div>
              <div className="text-sm text-gray-500">Categories</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-green-600">8.6 MB</div>
              <div className="text-sm text-gray-500">Total Storage</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-purple-600">{allResources.reduce((sum, r) => sum + r.downloadCount, 0).toLocaleString()}</div>
              <div className="text-sm text-gray-500">Total Downloads</div>
            </div>
          </div> */}

          {/* Search and Filter */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search resources by name, description, or category..." 
                  value={searchTerm} 
                  onChange={(e) => setSearchTerm(e.target.value)} 
                  className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:border-accent600 focus:ring-2 focus:ring-accent600/20 transition-all"
                />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="relative min-w-[200px]">
                <FaFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <select 
                  value={selectedCategory} 
                  onChange={(e) => setSelectedCategory(e.target.value)} 
                  className="w-full pl-12 pr-10 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:border-accent600 focus:ring-2 focus:ring-accent600/20 transition-all appearance-none bg-white"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat} {cat !== "All Categories" ? `(${allResources.filter(r => r.category === cat).length})` : ''}
                    </option>
                  ))}
                </select>
                <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>

              {/* View Toggle */}
              <div className="flex gap-1 bg-gray-100 p-1 rounded-xl">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all ${viewMode === "grid" ? "bg-white shadow-md text-accent600" : "text-gray-400 hover:text-gray-600"}`}
                  title="Grid view"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="7" height="7" rx="1" strokeWidth="2" />
                    <rect x="14" y="3" width="7" height="7" rx="1" strokeWidth="2" />
                    <rect x="3" y="14" width="7" height="7" rx="1" strokeWidth="2" />
                    <rect x="14" y="14" width="7" height="7" rx="1" strokeWidth="2" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-all ${viewMode === "list" ? "bg-white shadow-md text-accent600" : "text-gray-400 hover:text-gray-600"}`}
                  title="List view"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="4" rx="1" strokeWidth="2" />
                    <rect x="3" y="10" width="18" height="4" rx="1" strokeWidth="2" />
                    <rect x="3" y="17" width="18" height="4" rx="1" strokeWidth="2" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Results Count */}
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
              <FaFile className="text-accent600" />
              <span>{filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''} found</span>
              {searchTerm && <span className="text-accent600">· "{searchTerm}"</span>}
              {selectedCategory !== "All Categories" && <span className="text-accent600">· {selectedCategory}</span>}
            </div>
          </motion.div>

          {/* Resources Grid/List */}
          <AnimatedSection className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
            {filteredResources.map((resource) => (
              <motion.div
                key={resource.id}
                variants={fadeInUp}
                className={`bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group ${
                  viewMode === "list" ? "flex items-start p-4 gap-4" : "p-6"
                }`}
              >
                {viewMode === "grid" ? (
                  // Grid View
                  <>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl">{getCategoryIcon(resource.category)}</span>
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${getFileColor(resource.type)}`}>
                        {resource.type}
                      </span>
                    </div>
                    
                    <h3 className="font-semibold text-primary text-base group-hover:text-accent600 transition-colors line-clamp-2 mb-2">
                      {resource.title}
                    </h3>
                    
                    <p className="text-gray-500 text-sm line-clamp-2 mb-3">
                      {resource.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                        {resource.subcategory}
                      </span>
                      {/* <span className="text-xs text-gray-400">
                        {resource.fileSize}
                      </span>
                      <span className="text-xs text-gray-400">
                        {resource.downloadCount} downloads
                      </span> */}
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                      <span className="text-xs text-gray-400">
                        Added: {formatDate(resource.dateAdded)}
                      </span>
                      <motion.a 
                        href={resource.url} 
                        download
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 bg-accent600 text-white text-sm font-bold px-4 py-2 rounded-full hover:bg-primary-dark transition-colors"
                      >
                        <FaDownload size={12} /> Download
                      </motion.a>
                    </div>
                  </>
                ) : (
                  // List View
                  <>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-xl">{getCategoryIcon(resource.category)}</span>
                        <h3 className="font-semibold text-primary text-base group-hover:text-accent600 transition-colors">
                          {resource.title}
                        </h3>
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${getFileColor(resource.type)}`}>
                          {resource.type}
                        </span>
                        <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                          {resource.subcategory}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                        {resource.description}
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
                        {/* <span>{resource.fileSize}</span>
                        <span>{resource.downloadCount} downloads</span> */}
                        <span>Added: {formatDate(resource.dateAdded)}</span>
                      </div>
                    </div>
                    <motion.a 
                      href={resource.url} 
                      download
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 bg-accent600 text-white text-sm font-bold px-4 py-2 rounded-full hover:bg-primary-dark transition-colors shrink-0"
                    >
                      <FaDownload size={12} /> Download
                    </motion.a>
                  </>
                )}
              </motion.div>
            ))}
          </AnimatedSection>

          {/* Empty State */}
          {filteredResources.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <FaSearch size={48} className="text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-400 mb-2">No resources found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => { setSearchTerm(""); setSelectedCategory("All Categories"); }}
                className="mt-4 text-accent600 font-semibold hover:underline"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};
export default ResourcesPage;