import { ReactNode, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaUsers, FaMapMarkerAlt, FaHandHoldingHeart, FaCalendarAlt, FaArrowRight, FaDownload, FaChevronRight } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import HighlightBox from "../components/HighlightBox";
import EventItem from "../components/EventItem";
import { THEME } from "@/lib/theme";
import heroSlide1 from "../assets/hero-1.jpg";
import heroSlide2 from "../assets/hero-2.jpg";
import heroSlide3 from "../assets/hero-3.jpg";
import healthImg from "../assets/fighting-disease.jpg";
import literacyImg from "../assets/education.jpg";
import greenImg from "../assets/green-ghana.jpg";
import drrImg from "../assets/drr-portrait.jpg";
import vdrRImg from "../assets/TeamImages/vdrr-portrait.jpg";
import vdrRImg2 from "../assets/TeamImages/VDRR Tetteh Kojo Boampong Adesa.jpeg";
import secretaryimg from "../assets/TeamImages/Abigail Buwernorkuor Puplampu Secretary.jpeg";
import peacefulImg from "../assets/promoting-peace.jpg";
import waterImg from "../assets/water-sanitation.jpg";
import maternalImg from "../assets/maternal-child-health.jpg";
import economyImg from "../assets/growing-economies.png";

// ─── ADD YOUR NEW IMAGE IMPORTS HERE ───────────────────────────────────────────
// import galleryImg1 from "../assets/gallery/gallery-1.jpg";
// import galleryImg2 from "../assets/gallery/gallery-2.jpg";
// import galleryImg3 from "../assets/gallery/gallery-3.jpg";
// import galleryImg4 from "../assets/gallery/gallery-4.jpg";
// import galleryImg5 from "../assets/gallery/gallery-5.jpg";
// import galleryImg6 from "../assets/gallery/gallery-6.jpg";
// import sponsorLogo1 from "../assets/sponsors/sponsor-1.png";
// import sponsorLogo2 from "../assets/sponsors/sponsor-2.png";
// import partnerImg from "../assets/partners/partner-feature.jpg";
// import communityImg from "../assets/community-impact.jpg";
// import awardsImg from "../assets/awards.jpg";
// ────────────────────────────────────────────────────────────────────────────────

// ─── CRANBERRY COLOR TOKENS ───────────────────────────────────────────────────
const CRANBERRY = {
  50:  "#fdf2f6",
  100: "#fce7ef",
  200: "#fbcfe0",
  300: "#f9a8c4",
  400: "#f472a0",
  500: "#e54d7e",
  600: "#cc2d60",
  700: "#a8174a",  // ← Rotaract cranberry core
  800: "#8B1A4A",  // ← Rotaract cranberry deep (primary brand)
  900: "#6b1238",
  950: "#3f0820",
};
// ─────────────────────────────────────────────────────────────────────────────

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

const AnimatedSection = ({ children, className }: AnimatedSectionProps) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
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

const slides = [
  { title: "Elevating Service Through Inspired Leadership", sub: "Empowering young leaders across Ghana to create lasting change in their communities.", cta1: { label: "Join Rotaract", to: "/join" }, cta2: { label: "Learn More", to: "/about/rotaract" }, image: heroSlide1 },
  { title: THEME.name, sub: "Under the leadership of RI President Stephanie Urchick, we embrace the magic within us all.", cta1: { label: "Explore the Theme", to: "/about/rotary-international" }, cta2: { label: "Our Projects", to: "/projects/signature" }, image: heroSlide2 },
  { title: "Relive the Experiences of DLAC 2026", sub: "Discover the magic of Rotary International's largest gathering of young leaders.", cta1: { label: "Gallery", to: "/gallery" }, cta2: { label: "View Events", to: "/events/calendar" }, image: heroSlide3 },
];

const stats = [
  { value: "60+", label: "Clubs" },
  { value: "1,800+", label: "Members" },
  { value: "200+", label: "Projects" },
  { value: "10", label: "Clusters" },
];

const highlights = [
  { image: healthImg, cat: "Health", title: "Free Health Outreach in Tamale", excerpt: "Over 500 community members received free medical screenings during our annual health initiative.", date: "Dec 12, 2024" },
  { image: literacyImg, cat: "Education", title: "Rotaract Reads: Literacy Campaign", excerpt: "Distributing 2,000 books across 15 schools in underserved communities in the Greater Accra Region.", date: "Nov 28, 2024" },
  { image: greenImg, cat: "Environment", title: "Green Ghana: 10,000 Trees Planted", excerpt: "Rotaract clubs across the district united for the national Green Ghana initiative.", date: "Oct 15, 2024" },
];

const events = [
  { day: "15", month: "Jun", title: "DLAC 2027 Opening Ceremony", description: "Annual district conference kicks off in Accra.", tag: "Conference" },
  { day: "22", month: "Jun", title: "Club Officers Training", description: "Leadership training for incoming club officers.", tag: "Training" },
  { day: "05", month: "Jul", title: "Health Walk & Blood Donation", description: "District-wide health awareness campaign.", tag: "Service" },
  { day: "18", month: "Jul", title: "Professional Development Workshop", description: "CV writing, interview skills, and networking.", tag: "Career" },
];

const quickLinks = [
  { icon: FaUsers, title: "Join Rotaract", sub: "Become a member today", to: "/join" },
  { icon: FaMapMarkerAlt, title: "Find a Club", sub: "Locate a club near you", to: "/contact/club-locator" },
  { icon: FaHandHoldingHeart, title: "Donate", sub: "Support our projects", to: "/donate" },
  { icon: FaCalendarAlt, title: "DLAC 2027", sub: "Register for the conference", to: "/events/dlac" },
];

// ─── GALLERY IMAGES — swap in your real paths ─────────────────────────────────
const galleryImages = [
  { src: heroSlide1, caption: "DLAC 2026 Opening Ceremony" },
  { src: heroSlide2, caption: "Community Service Drive" },
  { src: heroSlide3, caption: "Club Leadership Summit" },
  { src: healthImg,  caption: "Health Outreach Tamale" },
  { src: greenImg,   caption: "Green Ghana Initiative" },
  { src: literacyImg, caption: "Literacy Campaign" },
  // ADD MORE: { src: galleryImg1, caption: "Your Caption" },
];
// ─────────────────────────────────────────────────────────────────────────────

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % slides.length), 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <div className="font-sans antialiased">

      {/* ─── HERO SLIDER ─────────────────────────────────────────────────────── */}
      <section className="relative h-[640px] md:h-[720px] flex items-end overflow-hidden">
        {slides.map((s, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}>
            <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-[8000ms]" style={{ transform: i === currentSlide ? "scale(1)" : "scale(1.05)" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3f0820]/90 via-[#8B1A4A]/40 to-transparent" />
          </div>
        ))}

        {/* Decorative cranberry bar top */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#8B1A4A] via-[#e54d7e] to-[#8B1A4A] z-20" />

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 pb-20">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 bg-[#8B1A4A] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              Rotaract District 9104 · Ghana
            </span>
            <h1 className="font-display font-extrabold text-white text-4xl md:text-5xl lg:text-6xl leading-[1.1] max-w-3xl mb-5 drop-shadow-xl">
              {slide.title}
            </h1>
            <p className="text-white/90 text-lg max-w-xl mb-8 leading-relaxed">{slide.sub}</p>
            <div className="flex flex-wrap gap-3">
              <Link to={slide.cta1.to} className="inline-flex items-center gap-2 bg-[#8B1A4A] hover:bg-[#6b1238] text-white font-bold px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-[#8B1A4A]/40 hover:shadow-xl group">
                {slide.cta1.label}
                <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to={slide.cta2.to} className="inline-flex items-center gap-2 border-2 border-white/70 text-white hover:bg-white hover:text-[#8B1A4A] font-bold px-7 py-3.5 rounded-full transition-all duration-300">
                {slide.cta2.label}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)}
              className={`transition-all duration-300 rounded-full ${i === currentSlide ? "w-8 h-2.5 bg-[#e54d7e]" : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"}`}
            />
          ))}
        </div>
      </section>

      {/* ─── THEME BANNER ────────────────────────────────────────────────────── */}
      <section className="relative bg-[#8B1A4A] py-8 text-center overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "12px 12px" }} />
        <div className="relative z-10">
          <p className="text-white/70 text-xs uppercase tracking-[0.25em] font-bold mb-2">Rotary Year 2024–2025</p>
          <h2 className="font-display font-black text-white text-3xl md:text-4xl mb-1">{THEME.name}</h2>
          <p className="text-white/80 text-sm">RI President Stephanie Urchick &nbsp;·&nbsp; Rotaract District 9104, Ghana | Zones 22 &amp; 22A</p>
        </div>
      </section>

      {/* ─── STATS STRIP ─────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100 py-14">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="font-display font-black text-[#8B1A4A] text-5xl md:text-6xl leading-none">{s.value}</div>
              <div className="text-gray-500 text-xs uppercase tracking-[0.18em] mt-2 font-semibold">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── DRR MESSAGE ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[360px_1fr] gap-14 items-center">
          <div className="relative">
            {/* Cranberry frame offset */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-[#8B1A4A]/20" />
            <img src={drrImg} alt="District Rotaract Representative"
              className="relative w-full h-[480px] object-cover rounded-2xl shadow-2xl"
              loading="lazy" width={640} height={864}
            />
            <span className="absolute bottom-5 left-5 bg-[#8B1A4A] text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
              DRR 2026–2027
            </span>
          </div>
          <div>
            <span className="inline-block text-[#8B1A4A] text-xs font-black uppercase tracking-[0.22em] mb-3">
              District Rotaract Representative
            </span>
            <h2 className="font-display font-black text-gray-900 text-4xl md:text-5xl leading-[1.1] mb-6">
              A Message from<br /><span className="text-[#8B1A4A]">Our DRR</span>
            </h2>
            <blockquote className="relative pl-6 mb-6">
              <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#8B1A4A] to-[#e54d7e] rounded-full" />
              <p className="text-gray-600 italic text-lg leading-relaxed">
                "Together, we are creating magic — transforming communities, building leaders, and leaving a legacy of service that transcends borders."
              </p>
            </blockquote>
            <p className="text-gray-600 mb-4 leading-relaxed">
              As we embark on this Rotary year, I am filled with immense pride and gratitude for the dedication of every Rotaractor in District 9104. Our collective efforts in health, education, and environmental sustainability continue to make a tangible impact across Ghana.
            </p>
            <p className="text-gray-600 mb-7 leading-relaxed">
              Let us harness <span className="text-[#8B1A4A] font-semibold">{THEME.name}</span> to reach even greater heights. Together, there is no limit to what we can achieve.
            </p>
            <p className="font-black text-gray-900 text-lg">Rtr. [DRR Name]</p>
            <p className="text-gray-400 text-sm mb-7">District Rotaract Representative, 2026–2027</p>
            <Link to="/about/drr"
              className="inline-flex items-center gap-2 bg-[#8B1A4A] text-white font-bold px-7 py-3.5 rounded-full hover:bg-[#6b1238] transition-all duration-300 shadow-lg hover:shadow-[#8B1A4A]/30 hover:shadow-xl group"
            >
              Learn More About the DRR
              <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FOCUS AREAS ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#fdf2f6] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-[#8B1A4A] text-xs font-black uppercase tracking-[0.22em] mb-4">Areas of Focus</span>
            <h2 className="font-display font-black text-gray-900 text-4xl md:text-5xl lg:text-6xl mb-5">
              No challenge is<br /><span className="text-[#8B1A4A]">too big for us</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              For more than a century, we've bridged cultures and connected continents — championing peace, fighting illiteracy and poverty, and protecting our planet.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
            {[
              { title: "Fighting\nDisease",         image: healthImg,    color: "#10B981", ix: -80, iy: -40 },
              { title: "Promoting\nPeace",           image: peacefulImg,  color: "#8B1A4A", ix: 70,  iy: -70 },
              { title: "Providing\nClean Water",     image: waterImg,     color: "#06B6D4", ix: -50, iy: 50  },
              { title: "Supporting\nEducation",      image: literacyImg,  color: "#F59E0B", ix: 80,  iy: -30 },
              { title: "Improving Maternal\n& Child Health", image: maternalImg, color: "#e54d7e", ix: -70, iy: 60 },
              { title: "Growing\nLocal Economies",   image: economyImg,   color: "#8B5CF6", ix: 60,  iy: 40  },
              { title: "Protecting\nthe Environment",image: greenImg,     color: "#059669", ix: -40, iy: -50 },
              // ADD YOUR 8th CARD: { title: "Your Area", image: yourImg, color: "#xxxx", ix: 50, iy: 30 },
            ].map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, x: area.ix, y: area.iy, scale: 0.4 }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.1, duration: 0.7, type: "spring", stiffness: 90, damping: 14 }}
                whileHover={{ scale: 1.08, transition: { duration: 0.25 } }}
                className="text-center group cursor-pointer"
              >
                <div className="relative mb-4 mx-auto w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full overflow-hidden shadow-md group-hover:shadow-2xl transition-shadow duration-300"
                  style={{ boxShadow: `0 8px 24px -8px ${area.color}30` }}
                >
                  <img src={area.image} alt={area.title.replace('\n', ' ')} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-[#8B1A4A]/60 transition-all duration-300" />
                  <div className="absolute inset-0 bg-[#8B1A4A]/0 group-hover:bg-[#8B1A4A]/20 transition-colors duration-300 rounded-full" />
                </div>
                <h3 className="font-display font-black text-gray-800 text-sm md:text-base whitespace-pre-line leading-tight group-hover:text-[#8B1A4A] transition-colors duration-200">
                  {area.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DISTRICT HIGHLIGHTS ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[#8B1A4A] text-xs font-black uppercase tracking-[0.22em]">District Highlights</span>
              <h2 className="font-display font-black text-gray-900 text-4xl md:text-5xl mt-2">Stories of Impact</h2>
            </div>
            <Link to="/media/blog" className="inline-flex items-center gap-2 text-[#8B1A4A] font-bold text-sm hover:gap-3 transition-all">
              View All Stories <FaChevronRight size={11} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <motion.div key={h.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.55 }}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="h-52 relative overflow-hidden">
                  <img src={h.image} alt={h.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <span className="absolute top-4 left-4 bg-[#8B1A4A] text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">{h.cat}</span>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 text-xs font-semibold mb-2">{h.date}</p>
                  <h3 className="font-display font-black text-gray-900 text-lg mb-3 leading-tight">{h.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{h.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-[#8B1A4A] font-bold text-sm cursor-pointer hover:gap-2.5 transition-all">
                    Read More <FaChevronRight size={10} />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PHOTO GALLERY STRIP ─────────────────────────────────────────────── */}
      <section className="py-0 overflow-hidden bg-gray-50">
        <div className="flex gap-0">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              className="relative flex-1 min-w-[200px] h-56 md:h-72 overflow-hidden group cursor-pointer"
              whileHover={{ flex: 2.5 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={img.src} alt={img.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-[#8B1A4A]/0 group-hover:bg-[#8B1A4A]/60 transition-colors duration-400" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-bold text-sm leading-tight">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="bg-[#8B1A4A] py-4 text-center">
          <Link to="/gallery" className="inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all">
            Explore Full Gallery <FaArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* ─── TEAM PREVIEW ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#8B1A4A] text-xs font-black uppercase tracking-[0.22em] mb-3 block">District Leadership</span>
            <h2 className="font-display font-black text-gray-900 text-4xl md:text-5xl lg:text-6xl">
              Meet Our<br /><span className="text-[#8B1A4A]">Leadership Team</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto mt-4 text-base">The passionate individuals driving Rotaract District 9104 forward</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { name: "Rtr. [DRR Name]",                      position: "District Rotaract Representative",      image: drrImg       },
              { name: "Rtr. [VDRR Name]",                     position: "Vice District Rotaract Representative", image: vdrRImg      },
              { name: "Rtr. Tetteh Kojo Boampong Adesa",      position: "Service Committee Chair",               image: vdrRImg2     },
              { name: "Rtr. Abigail Buwernorkuor Puplampu",   position: "Fellowship Committee Chair",            image: secretaryimg },
              // ADD MORE TEAM MEMBERS:
              // { name: "Rtr. [Name]", position: "[Position]", image: teamMemberImg },
            ].map((member, index) => (
              <motion.div key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.55 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative mb-5 overflow-hidden rounded-2xl shadow-md group-hover:shadow-2xl transition-all duration-400">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img src={member.image} alt={member.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3f0820]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Hover badge */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span className="bg-[#8B1A4A] text-white text-xs font-black px-5 py-1.5 rounded-full uppercase tracking-wider">View Profile</span>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-display font-black text-gray-900 text-base mb-1 group-hover:text-[#8B1A4A] transition-colors">{member.name}</h3>
                  <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">{member.position}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/about/team"
              className="inline-flex items-center gap-2 bg-[#8B1A4A] text-white font-bold px-10 py-4 rounded-full hover:bg-[#6b1238] transition-all duration-300 shadow-lg hover:shadow-[#8B1A4A]/30 hover:shadow-xl group"
            >
              View Full Team
              <FaArrowRight className="group-hover:translate-x-1.5 transition-transform" size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── UPCOMING EVENTS ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#fdf2f6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[#8B1A4A] text-xs font-black uppercase tracking-[0.22em]">What's On</span>
              <h2 className="font-display font-black text-gray-900 text-4xl md:text-5xl mt-2">Upcoming Events</h2>
            </div>
            <Link to="/events/calendar" className="inline-flex items-center gap-2 text-[#8B1A4A] font-bold text-sm hover:gap-3 transition-all">
              Full Calendar <FaChevronRight size={11} />
            </Link>
          </div>

          <div className="grid md:grid-cols-[1fr_360px] gap-8">
            <div className="space-y-4">
              {events.map((e, i) => (
                <motion.div key={e.title}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  className="group bg-white rounded-2xl p-5 flex items-start gap-5 border border-gray-100 hover:border-[#8B1A4A]/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="flex-shrink-0 bg-[#8B1A4A] text-white rounded-xl w-14 h-14 flex flex-col items-center justify-center text-center">
                    <span className="font-black text-xl leading-none">{e.day}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">{e.month}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-display font-black text-gray-900 text-base group-hover:text-[#8B1A4A] transition-colors">{e.title}</h4>
                      <span className="flex-shrink-0 bg-[#fdf2f6] text-[#8B1A4A] text-xs font-bold px-3 py-0.5 rounded-full uppercase tracking-wide border border-[#8B1A4A]/20">{e.tag}</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">{e.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* DLAC Feature Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="bg-[#8B1A4A] text-white rounded-2xl p-8 relative overflow-hidden"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 80%, #fff 0, transparent 50%), radial-gradient(circle at 80% 20%, #fff 0, transparent 50%)" }} />
              <div className="relative z-10">
                <span className="inline-block text-white/70 text-xs font-black uppercase tracking-[0.2em] mb-4">Featured Event</span>
                <h3 className="font-display font-black text-white text-3xl mb-3">DLAC 2027</h3>
                <p className="text-white/80 text-sm mb-6 leading-relaxed">
                  The District Learning and Conference is the premier annual gathering of Rotaractors in District 9104. Join us for inspiring sessions, fellowship, and service.
                </p>
                <ul className="space-y-2 mb-7">
                  {["Leadership Workshops", "Service Projects", "Fellowship & Networking", "Awards Ceremony"].map(item => (
                    <li key={item} className="flex items-center gap-2 text-white/90 text-sm">
                      <span className="w-1.5 h-1.5 bg-[#e54d7e] rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/events/dlac"
                  className="inline-flex items-center gap-2 bg-white text-[#8B1A4A] font-black px-6 py-3 rounded-full hover:bg-[#fdf2f6] transition-all duration-300 group"
                >
                  Register Now
                  <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── IMPACT STORIES ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#8B1A4A] text-xs font-black uppercase tracking-[0.22em] mb-3 block">Impact Stories</span>
            <h2 className="font-display font-black text-gray-900 text-4xl md:text-5xl">
              Transforming Lives<br /><span className="text-[#8B1A4A]">Across Ghana</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { date: "May 2026", title: "Healthcare Initiative Reaches 5,000 Beneficiaries", excerpt: "Our district-wide health outreach program has screened and provided preventive care to thousands.", tag: "Health" },
              { date: "April 2026", title: "Literacy Campaign Distributes Books to 20 Schools", excerpt: "Rotaract clubs united to provide educational resources to students in underserved communities.", tag: "Education" },
              { date: "March 2026", title: "Environmental Restoration: Trees for Tomorrow", excerpt: "Over 15,000 trees planted as part of our commitment to environmental sustainability.", tag: "Environment" },
            ].map((story, i) => (
              <motion.div key={story.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="group bg-white rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Color top bar */}
                <div className="h-1.5 bg-gradient-to-r from-[#8B1A4A] to-[#e54d7e]" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-[#fdf2f6] text-[#8B1A4A] text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">{story.tag}</span>
                    <span className="text-gray-400 text-xs font-semibold">{story.date}</span>
                  </div>
                  <h3 className="font-display font-black text-gray-900 text-lg mb-3 leading-tight">{story.title}</h3>
                  <p className="text-gray-500 text-sm mb-5 leading-relaxed">{story.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-[#8B1A4A] font-bold text-sm group-hover:gap-2.5 transition-all cursor-pointer">
                    Read More <FaChevronRight size={10} />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/media/blog"
              className="inline-flex items-center gap-2 bg-[#8B1A4A] text-white font-bold px-9 py-4 rounded-full hover:bg-[#6b1238] transition-all duration-300 shadow-lg hover:shadow-[#8B1A4A]/30 hover:shadow-xl group"
            >
              View All Stories
              <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── RESOURCES ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#fdf2f6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#8B1A4A] text-xs font-black uppercase tracking-[0.22em] mb-3 block">Resources</span>
            <h2 className="font-display font-black text-gray-900 text-4xl md:text-5xl">
              Rotaract Resources<br /><span className="text-[#8B1A4A]">&amp; Downloads</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto mt-4 text-base">Essential guides and materials for clubs and members across District 9104</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Rotaract Song Book",         desc: "Official collection of Rotaract and Rotary songs",              icon: "🎵", type: "PDF", size: "2.4 MB", url: "/files/rotaract-song-book.pdf"        },
              { title: "Rotary Foundation Guide",    desc: "Complete guide to Foundation programs and grant applications",  icon: "📚", type: "PDF", size: "5.1 MB", url: "/files/rotary-foundation-guide.pdf"  },
              { title: "Service Project Toolkit",    desc: "Step-by-step guide for planning service projects",             icon: "🛠️", type: "PDF", size: "3.8 MB", url: "/files/service-project-toolkit.pdf"   },
              { title: "Club Administration Manual", desc: "Comprehensive guide for effective club management",            icon: "📋", type: "PDF", size: "4.2 MB", url: "/files/club-administration-manual.pdf" },
              { title: "Membership Development",     desc: "Strategies for recruiting and retaining club members",         icon: "👥", type: "PDF", size: "2.9 MB", url: "/files/membership-development-guide.pdf"},
              { title: "Public Relations Toolkit",   desc: "Templates and guidelines for promoting club activities",       icon: "📢", type: "ZIP", size: "6.3 MB", url: "/files/pr-toolkit.zip"                },
              { title: "Event Planning Guide",       desc: "Complete checklist and templates for organizing events",       icon: "📅", type: "PDF", size: "3.5 MB", url: "/files/event-planning-guide.pdf"      },
              { title: "District Directory 2025",    desc: "Contact information for all clubs in District 9104",          icon: "📖", type: "PDF", size: "1.8 MB", url: "/files/district-directory-2025.pdf"   },
            ].map((r, index) => (
              <motion.div key={r.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.45 }}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#8B1A4A]/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B1A4A] to-[#e54d7e] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="text-3xl mb-4">{r.icon}</div>
                <h3 className="font-display font-black text-gray-900 text-base mb-2 group-hover:text-[#8B1A4A] transition-colors">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{r.desc}</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded font-bold">{r.type}</span>
                    <span>{r.size}</span>
                  </div>
                  <motion.a href={r.url} download
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-1.5 bg-[#8B1A4A] text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-[#6b1238] transition-colors"
                  >
                    <FaDownload size={10} /> Download
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/resources"
              className="inline-flex items-center gap-2 bg-[#8B1A4A] text-white font-bold px-9 py-4 rounded-full hover:bg-[#6b1238] transition-all duration-300 shadow-lg hover:shadow-[#8B1A4A]/30 hover:shadow-xl group"
            >
              Browse All Resources
              <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── QUICK LINKS ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#8B1A4A]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickLinks.map((q, i) => (
            <motion.div key={q.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
            >
              <Link to={q.to}
                className="flex flex-col items-center text-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-2xl p-7 transition-all duration-300 group border border-white/10 hover:border-white/30"
              >
                <q.icon className="text-white/80 group-hover:text-white mb-3 transition-colors" size={30} />
                <h4 className="font-display font-black text-base mb-1">{q.title}</h4>
                <p className="text-white/70 text-xs group-hover:text-white/90 transition-colors">{q.sub}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── CTA BANNER ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#8B1A4A] text-xs font-black uppercase tracking-[0.22em] mb-4 block">Get Involved</span>
            <h2 className="font-display font-black text-gray-900 text-4xl md:text-5xl lg:text-6xl mb-6">
              Ready to Make<br /><span className="text-[#8B1A4A]">a Difference?</span>
            </h2>
            <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Join thousands of young leaders across Ghana who are transforming communities and building a better future through Rotaract.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/join"
                className="inline-flex items-center gap-2 bg-[#8B1A4A] text-white font-bold px-9 py-4 rounded-full hover:bg-[#6b1238] transition-all duration-300 shadow-xl hover:shadow-[#8B1A4A]/30 hover:shadow-2xl group"
              >
                Join Rotaract Today
                <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact/club-locator"
                className="inline-flex items-center gap-2 border-2 border-[#8B1A4A] text-[#8B1A4A] font-bold px-9 py-4 rounded-full hover:bg-[#8B1A4A] hover:text-white transition-all duration-300"
              >
                Find a Club Near You
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;