import { useState } from "react";
import PageHero from "../components/PageHero";
import heroAboutImg from "../assets/hero-about.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Search, 
  MapPin, 
  Calendar, 
  Users, 
  Phone, 
  Mail, 
  Globe, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Clock,
  Award,
  ChevronLeft,
  ChevronRight,
  Filter
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const AnimatedSection = ({ children, className }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
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

const clubs = [
  { 
    name: "RAC University of Ghana, Legon", 
    region: "Greater Accra", 
    charter: 2012, 
    meeting: "Wednesdays, 6:00 PM", 
    venue: "UG Campus, Great Hall",
    email: "racug@rotaract9104.org",
    phone: "+233 50 123 4567",
    website: "www.racuglegon.org",
    social: {
      facebook: "racuglegon",
      twitter: "@racuglegon",
      instagram: "@racuglegon",
      linkedin: "rac-university-of-ghana"
    },
    members: 45,
    president: "Rtr. John Mensah"
  },
  { 
    name: "RAC KNUST", 
    region: "Ashanti", 
    charter: 2010, 
    meeting: "Thursdays, 5:30 PM", 
    venue: "KNUST Campus, Engineering Block",
    email: "racknust@rotaract9104.org",
    phone: "+233 50 234 5678",
    website: "www.racknust.org",
    social: {
      facebook: "racknust",
      twitter: "@racknust",
      instagram: "@racknust",
      linkedin: "rac-knust"
    },
    members: 52,
    president: "Rtr. Akua Serwaa"
  },
  { 
    name: "RAC Accra Metro", 
    region: "Greater Accra", 
    charter: 2015, 
    meeting: "Tuesdays, 6:00 PM", 
    venue: "Accra City Hotel, Conference Room",
    email: "racaccrametro@rotaract9104.org",
    phone: "+233 50 345 6789",
    website: "www.racaccrametro.org",
    social: {
      facebook: "racaccrametro",
      twitter: "@racaccrametro",
      instagram: "@racaccrametro",
      linkedin: "rac-accra-metro"
    },
    members: 38,
    president: "Rtr. David Osei"
  },
  { 
    name: "RAC Cape Coast", 
    region: "Central", 
    charter: 2013, 
    meeting: "Mondays, 5:00 PM", 
    venue: "UCC Campus, Science Block",
    email: "raccapecoast@rotaract9104.org",
    phone: "+233 50 456 7890",
    website: "www.raccapecoast.org",
    social: {
      facebook: "raccapecoast",
      twitter: "@raccapecoast",
      instagram: "@raccapecoast",
      linkedin: "rac-cape-coast"
    },
    members: 35,
    president: "Rtr. Efua Dadzie"
  },
  { 
    name: "RAC Tamale", 
    region: "Northern", 
    charter: 2016, 
    meeting: "Fridays, 5:00 PM", 
    venue: "Tamale Community Centre",
    email: "ractamale@rotaract9104.org",
    phone: "+233 50 567 8901",
    website: "www.ractamale.org",
    social: {
      facebook: "ractamale",
      twitter: "@ractamale",
      instagram: "@ractamale",
      linkedin: "rac-tamale"
    },
    members: 28,
    president: "Rtr. Abdul Rashid"
  },
  { 
    name: "RAC Takoradi", 
    region: "Western", 
    charter: 2014, 
    meeting: "Wednesdays, 5:30 PM", 
    venue: "Takoradi Hub, Beach Road",
    email: "ractakoradi@rotaract9104.org",
    phone: "+233 50 678 9012",
    website: "www.ractakoradi.org",
    social: {
      facebook: "ractakoradi",
      twitter: "@ractakoradi",
      instagram: "@ractakoradi",
      linkedin: "rac-takoradi"
    },
    members: 32,
    president: "Rtr. Kojo Sam"
  },
  { 
    name: "RAC Ho Technical University", 
    region: "Volta", 
    charter: 2017, 
    meeting: "Thursdays, 6:00 PM", 
    venue: "HTU Campus Auditorium",
    email: "rachotu@rotaract9104.org",
    phone: "+233 50 789 0123",
    website: "www.rachotu.org",
    social: {
      facebook: "rachotu",
      twitter: "@rachotu",
      instagram: "@rachotu",
      linkedin: "rac-ho-technical"
    },
    members: 30,
    president: "Rtr. Edem Agbo"
  },
  { 
    name: "RAC Sunyani", 
    region: "Bono", 
    charter: 2018, 
    meeting: "Wednesdays, 5:00 PM", 
    venue: "Sunyani Municipal Hall",
    email: "racsunyani@rotaract9104.org",
    phone: "+233 50 890 1234",
    website: "www.racsunyani.org",
    social: {
      facebook: "racsunyani",
      twitter: "@racsunyani",
      instagram: "@racsunyani",
      linkedin: "rac-sunyani"
    },
    members: 25,
    president: "Rtr. Yaa Konadu"
  },
  { 
    name: "RAC Koforidua", 
    region: "Eastern", 
    charter: 2011, 
    meeting: "Fridays, 6:00 PM", 
    venue: "Koforidua Technical University",
    email: "rackoforidua@rotaract9104.org",
    phone: "+233 50 901 2345",
    website: "www.rackoforidua.org",
    social: {
      facebook: "rackoforidua",
      twitter: "@rackoforidua",
      instagram: "@rackoforidua",
      linkedin: "rac-koforidua"
    },
    members: 40,
    president: "Rtr. Kwame Asante"
  },
  { 
    name: "RAC Bolgatanga", 
    region: "Upper East", 
    charter: 2019, 
    meeting: "Saturdays, 4:00 PM", 
    venue: "Bolgatanga Youth Centre",
    email: "racbolgatanga@rotaract9104.org",
    phone: "+233 50 012 3456",
    website: "www.racbolgatanga.org",
    social: {
      facebook: "racbolgatanga",
      twitter: "@racbolgatanga",
      instagram: "@racbolgatanga",
      linkedin: "rac-bolgatanga"
    },
    members: 22,
    president: "Rtr. Anita Azure"
  },
  { 
    name: "RAC Wa", 
    region: "Upper West", 
    charter: 2020, 
    meeting: "Fridays, 5:30 PM", 
    venue: "Wa Community Library",
    email: "racwa@rotaract9104.org",
    phone: "+233 50 111 2222",
    website: "www.racwa.org",
    social: {
      facebook: "racwa",
      twitter: "@racwa",
      instagram: "@racwa",
      linkedin: "rac-wa"
    },
    members: 20,
    president: "Rtr. Peter Dery"
  },
  { 
    name: "RAC Tema", 
    region: "Greater Accra", 
    charter: 2013, 
    meeting: "Tuesdays, 6:30 PM", 
    venue: "Tema International Centre",
    email: "ractema@rotaract9104.org",
    phone: "+233 50 222 3333",
    website: "www.ractema.org",
    social: {
      facebook: "ractema",
      twitter: "@ractema",
      instagram: "@ractema",
      linkedin: "rac-tema"
    },
    members: 35,
    president: "Rtr. Grace Tetteh"
  },
];

const regions = ["All Regions", "Greater Accra", "Ashanti", "Central", "Northern", "Western", "Volta", "Bono", "Eastern", "Upper East", "Upper West"];

const ITEMS_PER_PAGE = 6;

const ClubLocatorPage = () => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All Regions");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedClub, setSelectedClub] = useState(null);

  const filtered = clubs.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
    const matchRegion = region === "All Regions" || c.region === region;
    return matchSearch && matchRegion;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedClubs = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <PageHero 
        breadcrumb="Contact" 
        title="Club Locator" 
        subtitle="Find a Rotaract club near you and connect with young leaders in your community" 
        image={heroAboutImg} 
      />
      
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Search and Filter Section */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-6 mb-10 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Search clubs by name..." 
                  value={search} 
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1);
                  }} 
                  className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:border-accent600 focus:ring-2 focus:ring-accent600/20 transition-all"
                />
              </div>
              
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <select 
                  value={region} 
                  onChange={(e) => {
                    setRegion(e.target.value);
                    setCurrentPage(1);
                  }} 
                  className="pl-12 pr-10 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:border-accent600 focus:ring-2 focus:ring-accent600/20 transition-all appearance-none bg-white"
                >
                  {regions.map((r) => <option key={r}>{r}</option>)}
                </select>
              </div>
            </div>
            
            {/* Results Count */}
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
              <Users size={16} />
              <span>{filtered.length} clubs found</span>
            </div>
          </motion.div>

          {/* Clubs Grid */}
          <AnimatedSection className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {paginatedClubs.map((club, index) => (
              <motion.div
                key={club.name}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer"
                onClick={() => setSelectedClub(selectedClub?.name === club.name ? null : club)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-display font-bold text-primary text-lg group-hover:text-accent600 transition-colors">
                      {club.name}
                    </h3>
                  </div>
                  
                  <span className="inline-flex items-center gap-1 bg-accent600/10 text-accent600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    <MapPin size={12} />
                    {club.region}
                  </span>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Award size={14} className="text-accent600" />
                      <span>Chartered: {club.charter}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Calendar size={14} className="text-accent600" />
                      <span>{club.meeting}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <MapPin size={14} className="text-accent600" />
                      <span>{club.venue}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Users size={14} className="text-accent600" />
                      <span>{club.members} members</span>
                    </div>
                  </div>
                  
                  {/* Social Media Icons */}
                  <div className="flex gap-3 pt-4 border-t border-gray-100">
                    <a 
                      href={`https://facebook.com/${club.social.facebook}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Facebook size={18} />
                    </a>
                    <a 
                      href={`https://twitter.com/${club.social.twitter}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-sky-500 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Twitter size={18} />
                    </a>
                    <a 
                      href={`https://instagram.com/${club.social.instagram}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-pink-600 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Instagram size={18} />
                    </a>
                    <a 
                      href={`https://linkedin.com/in/${club.social.linkedin}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-700 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
                
                {/* Expandable Contact Info */}
                <AnimatePresence>
                  {selectedClub?.name === club.name && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 space-y-3">
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                          <Users size={14} className="text-accent600" />
                          <span>President: {club.president}</span>
                        </div>
                        <a 
                          href={`mailto:${club.email}`}
                          className="flex items-center gap-2 text-gray-600 text-sm hover:text-accent600 transition-colors"
                        >
                          <Mail size={14} />
                          <span>{club.email}</span>
                        </a>
                        <a 
                          href={`tel:${club.phone}`}
                          className="flex items-center gap-2 text-gray-600 text-sm hover:text-accent600 transition-colors"
                        >
                          <Phone size={14} />
                          <span>{club.phone}</span>
                        </a>
                        <a 
                          href={`https://${club.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-600 text-sm hover:text-accent600 transition-colors"
                        >
                          <Globe size={14} />
                          <span>{club.website}</span>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatedSection>

          {/* Empty State */}
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <Search size={48} className="text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-400 mb-2">No clubs found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div 
              className="flex justify-center items-center gap-2 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-3 rounded-xl border border-gray-200 hover:border-accent600 hover:bg-accent600/5 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft size={20} />
              </motion.button>
              
              {[...Array(totalPages)].map((_, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handlePageChange(i + 1)}
                  className={`w-10 h-10 rounded-xl font-semibold text-sm transition-all ${
                    currentPage === i + 1
                      ? "bg-accent600 text-white shadow-lg"
                      : "border border-gray-200 hover:border-accent600 text-gray-600"
                  }`}
                >
                  {i + 1}
                </motion.button>
              ))}
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-3 rounded-xl border border-gray-200 hover:border-accent600 hover:bg-accent600/5 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight size={20} />
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default ClubLocatorPage;