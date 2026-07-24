import { ReactNode, useMemo, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  FaUsers, FaMapMarkerAlt, FaHandHoldingHeart, FaCalendarAlt, 
  FaArrowRight, FaDownload, FaChevronRight, FaPlay, FaPause 
} from "react-icons/fa";
import { THEME } from "@/lib/theme";
import calendarEvents, { getUpcomingEvents } from "../data/events";
import heroSlide1 from "../assets/hero-1.jpg";
import heroSlide4 from "../assets/heroImages/HANDOVER-100.jpg"
import heroSlide2 from "../assets/hero-6.jpg";
import heroSlide3 from "../assets/hero-3.jpg";
import healthImg from "../assets/fighting-disease.jpg";
import literacyImg from "../assets/education.jpg";
import greenImg from "../assets/green-ghana.jpg";
import drrImg from "../assets/TeamImages/1. DRR Kingdom Kededor Avisseh.jpg";
import vdrRImg2 from "../assets/TeamImages/2. Emmanuel Boakye-Dankwah - VDRR.jpg";
import vdrRImg from "../assets/TeamImages/3. Sedinam Edreh - VDRR.jpeg";
import peacefulImg from "../assets/promoting-peace.jpg";
import waterImg from "../assets/water-sanitation.jpg";
import maternalImg from "../assets/maternal-child-health.jpg";
import economyImg from "../assets/growing-economies.png";

// ─── VIDEO IMPORT ──────────────────────────────────────────────────────────────
// Make sure to add your video file to the assets folder
import vdrrVideo from "../assets/videos/vdrr-talk.mp4";
// If you have a poster/thumbnail image for the video:
import vdrrVideoThumbnail from "../assets/videos/vdrr-talk-thumbnail.jpg";

import fourWayTestItems1 from "@/assets/fourWayTestItems1.png";
import fourWayTestItems2 from "@/assets/fourWayTestItems2.png";
import fourWayTestItems3 from "@/assets/fourWayTestItems3.png";
import fourWayTestItems4 from "@/assets/fourWayTestItems4.png";


const fourWayTestItems = [
  { question: "Is it the TRUTH?", image: fourWayTestItems1, number: 1 },
  { question: "Is it FAIR to all concerned?", image: fourWayTestItems2, number: 2 },
  { question: "Will it build GOODWILL and BETTER FRIENDSHIPS?", image: fourWayTestItems3, number: 3 },
  { question: "Will it be BENEFICIAL to all concerned?", image: fourWayTestItems4, number: 4 },
];

// ─── CRANBERRY COLOR TOKENS ───────────────────────────────────────────────────
const CRANBERRY = {
  50:  "#fdf2f6",
  100: "#fce7ef",
  200: "#fbcfe0",
  300: "#f9a8c4",
  400: "#f472a0",
  500: "#e54d7e",
  600: "#cc2d60",
  700: "#a8174a",
  800: "#8B1A4A",
  900: "#6b1238",
  950: "#3f0820",
};



// ─── ENHANCED ANIMATION VARIANTS ─────────────────────────────────────────────
const fadeInUp = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.7, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -80, rotate: -2 },
  visible: { 
    opacity: 1, 
    x: 0, 
    rotate: 0,
    transition: { 
      duration: 0.7, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 80, rotate: 2 },
  visible: { 
    opacity: 1, 
    x: 0, 
    rotate: 0,
    transition: { 
      duration: 0.7, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.1
    } 
  }
};

const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.08,
      delayChildren: 0.05
    } 
  }
};

// ─── ENHANCED ANIMATED SECTION COMPONENT ─────────────────────────────────────
interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variant?: "fadeUp" | "fadeLeft" | "fadeRight" | "fadeScale";
  threshold?: number;
  delay?: number;
}

const AnimatedSection = ({ 
  children, 
  className, 
  variant = "fadeUp", 
  threshold = 0.1,
  delay = 0 
}: AnimatedSectionProps) => {
  const [ref, inView] = useInView({ 
    triggerOnce: true, 
    threshold,
    rootMargin: "-50px"
  });
  
  const variants = {
    fadeUp: fadeInUp,
    fadeLeft: fadeInLeft,
    fadeRight: fadeInRight,
    fadeScale: fadeInScale
  };
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants[variant]}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ─── PARALLAX SECTION ─────────────────────────────────────────────────────────
const ParallaxSection = ({ children, className }: { children: ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  
  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ─── COUNTER ANIMATION ────────────────────────────────────────────────────────
const AnimatedCounter = ({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');
  
  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [inView, target]);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="font-display font-black text-[#8B1A4A] text-5xl md:text-6xl leading-none">
        {count}{suffix}
      </div>
      <div className="text-gray-500 text-xs uppercase tracking-[0.18em] mt-2 font-semibold">{label}</div>
    </motion.div>
  );
};

// ─── SLIDES DATA ──────────────────────────────────────────────────────────────
const slides = [
  { title: "Elevating Service Through Inspired Leadership", sub: "Empowering young leaders across Ghana to create lasting change in their communities.", cta1: { label: "Join Rotaract", to: "/join" }, cta2: { label: "Learn More", to: "/about/rotaract" }, image: heroSlide1 },
  { title: THEME.name, sub: "Under the leadership of RI President Olayinka Hakeem Babalola, we embrace the magic within us all.", cta1: { label: "Explore the Theme", to: "/about/rotary-international" }, cta2: { label: "Our Projects", to: "/projects/signature" }, image: heroSlide4 },
  { title: "Relive the Experiences of DLAC 2026", sub: "Discover the magic of Rotary International's largest gathering of young leaders.", cta1: { label: "Gallery", to: "/gallery" }, cta2: { label: "View Events", to: "/events/calendar" }, image: heroSlide3 },
];

const stats = [
  { value: "64+", label: "Clubs" },
  { value: "3,000+", label: "Members" },
  { value: "10", label: "Clusters" },
];

const highlights = [
  { image: healthImg, cat: "Health", title: "Free Health Outreach in Tamale", excerpt: "Over 500 community members received free medical screenings during our annual health initiative.", date: "Dec 12, 2024" },
  { image: literacyImg, cat: "Education", title: "Rotaract Reads: Literacy Campaign", excerpt: "Distributing 2,000 books across 15 schools in underserved communities in the Greater Accra Region.", date: "Nov 28, 2024" },
  { image: greenImg, cat: "Environment", title: "Green Ghana: 10,000 Trees Planted", excerpt: "Rotaract clubs across the district united for the national Green Ghana initiative.", date: "Oct 15, 2024" },
];

const quickLinks = [
  { icon: FaUsers, title: "Join Rotaract", sub: "Become a member today", to: "/join" },
  { icon: FaMapMarkerAlt, title: "Find a Club", sub: "Locate a club near you", to: "/contact/club-locator" },
  { icon: FaHandHoldingHeart, title: "Donate", sub: "Support our projects", to: "/donate" },
  { icon: FaCalendarAlt, title: "DLAC 2027", sub: "Register for the conference", to: "/events/dlac" },
];

const galleryImages = [
  { src: heroSlide1, caption: "DLAC 2026 Opening Ceremony" },
  { src: heroSlide2, caption: "Community Service Drive" },
  { src: heroSlide3, caption: "Club Leadership Summit" },
  { src: healthImg,  caption: "Health Outreach Tamale" },
  { src: greenImg,   caption: "Green Ghana Initiative" },
  { src: literacyImg, caption: "Literacy Campaign" },
];

// ─── VIDEO COMPONENT ──────────────────────────────────────────────────────────
const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection variant="fadeUp" className="text-center mb-12">
          <span className="inline-block text-[#8B1A4A] text-xs font-black uppercase tracking-[0.22em] mb-4">
            Rotaract In Action
          </span>
          <h2 className="font-display font-black text-gray-900 text-4xl md:text-5xl lg:text-6xl mb-5">
            Voice of  DRR <br />
            <span className="text-[#8B1A4A]">Inspiring the Next Generation</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Watch as our District Rotaract Representative share insights on leadership, 
            service, and the future of Rotaract in District 9104.
          </p>
        </AnimatedSection>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl overflow-hidden shadow-2xl group"
        >
          {/* Video Player */}
          <video
            ref={videoRef}
            className="w-full aspect-video object-cover"
            poster={vdrrVideoThumbnail}
            muted={isMuted}
            playsInline
            preload="metadata"
          >
            <source src={vdrrVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#8B1A4A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Play/Pause Overlay */}
          <div 
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
            onClick={togglePlay}
          >
            <AnimatePresence>
              {!isPlaying && (
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="w-20 h-20 md:w-24 md:h-24 bg-[#8B1A4A]/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl hover:bg-[#8B1A4A] transition-colors duration-300"
                >
                  <FaPlay className="text-white text-2xl md:text-3xl ml-1" />
                </motion.div>
              )}
              {isPlaying && (
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute bottom-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <FaPause className="text-white text-sm" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-4">
              <button 
                onClick={togglePlay}
                className="text-white hover:text-[#e54d7e] transition-colors"
              >
                {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
              </button>
              <button 
                onClick={toggleMute}
                className="text-white hover:text-[#e54d7e] transition-colors"
              >
                {isMuted ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011-.217zM14.657 5.343a1 1 0 011.414 0 8 8 0 010 11.314 1 1 0 01-1.414-1.414 6 6 0 000-8.486 1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.414 0 4 4 0 010 5.657 1 1 0 01-1.414-1.414 2 2 0 000-2.829 1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
              <span className="text-white/80 text-xs font-medium ml-auto">
                {isPlaying ? "Click to pause" : "Click to play"}
              </span>
            </div>
          </div>
          
          {/* Video Info Badge */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-[#e54d7e] rounded-full animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider">Voice of DRR</span>
          </motion.div>
        </motion.div>
        
        {/* Video Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
        >
          {[
            { label: "Views", value: "1.2K+" },
            { label: "Duration", value: "4:32" },
            { label: "Topic", value: "Leadership" },
          ].map((stat, i) => (
            <div key={stat.label} className="bg-[#fdf2f6] rounded-xl p-4 text-center">
              <div className="font-display font-black text-[#8B1A4A] text-xl">{stat.value}</div>
              <div className="text-gray-500 text-xs uppercase tracking-wider font-semibold">{stat.label}</div>
            </div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

// ─── MAIN HOMEPAGE ────────────────────────────────────────────────────────────
const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % slides.length), 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];
  const upcomingEvents = useMemo(() => getUpcomingEvents(calendarEvents, 3), []);

  return (
    <div className="font-sans antialiased">
      {/* ─── SCROLL PROGRESS BAR ────────────────────────────────────────────── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-50 bg-gradient-to-r from-[#8B1A4A] via-[#e54d7e] to-[#8B1A4A] origin-left"
        style={{ scaleX }}
      />

      {/* ─── HERO SLIDER ─────────────────────────────────────────────────────── */}
      <section className="relative h-[640px] md:h-[720px] flex items-end overflow-hidden">
        <AnimatePresence mode="wait">
          {slides.map((s, i) => (
            i === currentSlide && (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3f0820]/90 via-[#8B1A4A]/40 to-transparent" />
              </motion.div>
            )
          ))}
        </AnimatePresence>

        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#8B1A4A] via-[#e54d7e] to-[#8B1A4A] z-20" />

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 pb-20">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h1 
              className="font-display font-extrabold text-white text-4xl md:text-5xl lg:text-6xl leading-[1.1] max-w-3xl mb-5 drop-shadow-xl"
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              {slide.title}
            </motion.h1>
            <motion.p 
              className="text-white/90 text-lg max-w-xl mb-8 leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {slide.sub}
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Link to={slide.cta1.to} className="inline-flex items-center gap-2 bg-[#8B1A4A] hover:bg-[#6b1238] text-white font-bold px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-[#8B1A4A]/40 hover:shadow-xl group">
                {slide.cta1.label}
                <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to={slide.cta2.to} className="inline-flex items-center gap-2 border-2 border-white/70 text-white hover:bg-white hover:text-[#8B1A4A] font-bold px-7 py-3.5 rounded-full transition-all duration-300">
                {slide.cta2.label}
              </Link>
            </motion.div>
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
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "12px 12px" }} />
        <div className="relative z-10">
          <motion.p 
            className="text-white/70 text-xs uppercase tracking-[0.25em] font-bold mb-2"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {THEME.rotaryYearLabel}
          </motion.p>
          <motion.h2 
            className="font-display font-black text-white text-3xl md:text-4xl mb-1"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {THEME.name}
          </motion.h2>
          <motion.p 
            className="text-white/80 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            &nbsp;·&nbsp; {THEME.siteName}, Ghana &nbsp;·&nbsp;
          </motion.p>
        </div>
      </section>

      {/* ─── STATS STRIP ─────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100 py-14">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {stats.map((s, i) => (
            <AnimatedCounter key={s.label} value={s.value} label={s.label} delay={i * 0.1} />
          ))}
        </div>
      </section>

      {/* ─── VIDEO SECTION ───────────────────────────────────────────────────── */}
      <VideoSection />

      {/* ─── DRR MESSAGE ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[360px_1fr] gap-14 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -60, rotate: -3 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-[#8B1A4A]/20" />
            <img src={drrImg} alt="District Rotaract Representative"
              className="relative w-full h-[480px] object-cover rounded-2xl shadow-2xl"
              loading="lazy" width={640} height={864}
            />
            <motion.span 
              className="absolute bottom-5 left-5 bg-[#8B1A4A] text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              DRR 2026–2027
            </motion.span>
          </motion.div>
          
          <div>
            <motion.span 
              className="inline-block text-[#8B1A4A] text-xs font-black uppercase tracking-[0.22em] mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              District Rotaract Representative
            </motion.span>
            <motion.h2 
              className="font-display font-black text-gray-900 text-4xl md:text-5xl leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              A Message from<br /><span className="text-[#8B1A4A]">Our DRR</span>
            </motion.h2>
            <motion.blockquote 
              className="relative pl-6 mb-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#8B1A4A] to-[#e54d7e] rounded-full" />
              <p className="text-gray-600 italic text-lg leading-relaxed">
                “The best way to find yourself is to lose yourself in the service of others.” — Mahatma Gandhi
              </p>
            </motion.blockquote>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-gray-600 mb-4 leading-relaxed">
                Welcome to a movement of young leaders committed to creating lasting impact through service, fellowship, leadership and professional development. As Rotaractors, we recognize that volunteerism is one of the most powerful tools for transforming communities and empowering individuals. Through every project, partnership, and act of service, we demonstrate that young people are not merely the leaders of tomorrow, they are the changemakers of today.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Across Ghana and beyond, Rotaract members continue to make meaningful contributions through initiatives aligned with Rotary's Seven Areas of Focus: promoting peace, fighting disease, providing clean water and sanitation, supporting maternal and child health, advancing basic education and literacy, growing local economies, and protecting the environment. From health outreach programs and educational support projects to environmental sustainability campaigns and community development initiatives, our members are actively responding to the needs of society while developing their leadership potential.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                As District Rotaract Representative, I am inspired daily by the dedication, innovation, and resilience of our members. Together, we are building stronger communities, fostering global connections, and creating opportunities for young people to lead with purpose and serve with impact.
              </p>
              <p className="text-gray-600 mb-7 leading-relaxed">
                Thank you for visiting our platform. I invite you to explore our projects, celebrate our achievements, and join us as we continue to make a difference in Ghana, across Africa, and throughout the world.
              </p>
              <p className="font-black text-gray-900 text-lg">Rotaractor Kingdom Kededor Avisseh</p>
              <p className="text-gray-400 text-sm mb-7">District Rotaract Representative<br />2026-27 Rotary Year</p>
              <Link to="/about/drr"
                className="inline-flex items-center gap-2 bg-[#8B1A4A] text-white font-bold px-7 py-3.5 rounded-full hover:bg-[#6b1238] transition-all duration-300 shadow-lg hover:shadow-[#8B1A4A]/30 hover:shadow-xl group"
              >
                Learn More About the DRR
                <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FOCUS AREAS ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#fdf2f6] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection variant="fadeUp" className="text-center mb-16">
            <span className="inline-block text-[#8B1A4A] text-xs font-black uppercase tracking-[0.22em] mb-4">Areas of Focus</span>
            <h2 className="font-display font-black text-gray-900 text-4xl md:text-5xl lg:text-6xl mb-5">
              No challenge is<br /><span className="text-[#8B1A4A]">too big for us</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              For more than a century, we've bridged cultures and connected continents — championing peace, fighting illiteracy and poverty, and protecting our planet.
            </p>
          </AnimatedSection>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-10"
          >
            {[
              { title: "Fighting\nDisease", image: healthImg, color: "#10B981", ix: -80, iy: -40 },
              { title: "Promoting\nPeace", image: peacefulImg, color: "#8B1A4A", ix: 70, iy: -70 },
              { title: "Providing\nClean Water", image: waterImg, color: "#06B6D4", ix: -50, iy: 50 },
              { title: "Supporting\nEducation", image: literacyImg, color: "#F59E0B", ix: 80, iy: -30 },
              { title: "Improving Maternal\n& Child Health", image: maternalImg, color: "#e54d7e", ix: -70, iy: 60 },
              { title: "Growing\nLocal Economies", image: economyImg, color: "#8B5CF6", ix: 60, iy: 40 },
              { title: "Protecting\nthe Environment", image: greenImg, color: "#059669", ix: -40, iy: -50 },
            ].map((area, index) => (
              <motion.div
                key={area.title}
                variants={fadeInScale}
                custom={index}
                whileHover={{ scale: 1.08, transition: { duration: 0.25 } }}
                className="text-center group cursor-pointer"
              >
                <div className="relative mb-4 mx-auto w-40 h-40 md:w-48 md:h-48 lg:w-54 lg:h-54 rounded-full overflow-hidden shadow-md group-hover:shadow-2xl transition-shadow duration-300"
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
          </motion.div>
        </div>
      </section>

      {/* ─── DISTRICT HIGHLIGHTS ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <AnimatedSection variant="fadeUp">
              <span className="text-[#8B1A4A] text-xs font-black uppercase tracking-[0.22em]">District Highlights</span>
              <h2 className="font-display font-black text-gray-900 text-4xl md:text-5xl mt-2">Stories of Impact</h2>
            </AnimatedSection>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/media/blog" className="inline-flex items-center gap-2 text-[#8B1A4A] font-bold text-sm hover:gap-3 transition-all">
                View All Stories <FaChevronRight size={11} />
              </Link>
            </motion.div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {highlights.map((h, i) => (
              <motion.div 
                key={h.title}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
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
          </motion.div>
        </div>
      </section>

      {/* ─── PHOTO GALLERY STRIP ─────────────────────────────────────────────── */}
      <section className="py-0 overflow-hidden bg-gray-50">
        <motion.div 
          className="flex gap-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              className="relative flex-1 min-w-[200px] h-56 md:h-72 overflow-hidden group cursor-pointer"
              whileHover={{ flex: 2.5 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
            >
              <img src={img.src} alt={img.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-[#8B1A4A]/0 group-hover:bg-[#8B1A4A]/60 transition-colors duration-400" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-bold text-sm leading-tight">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="bg-[#8B1A4A] py-4 text-center">
          <Link to="/media/gallery" className="inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all">
            Explore Full Gallery <FaArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* NEW: Four Way Test */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-heading font-bold text-xs uppercase tracking-wider mb-4">
                    Our Guiding Principles
                  </span>
                  <h2 className="text-4xl md:text-5xl font-heading font-black text-primary mb-4">
                    The Four-Way Test
                  </h2>
                  <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
                    Rotary's ethical guide — a test of the things members think, say, or do
                  </p>
                </div>
      
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {fourWayTestItems.map((item) => (
                    <div
                      key={item.number}
                      className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="relative h-74 overflow-hidden">
                        <img
                          src={item.image}
                          alt={`Four-Way Test - ${item.question}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        
                      </div>
      
                      <div className="p-4 flex-1 justify-end">
                        <div className="transform group-hover:translate-y-[-4px] transition-transform duration-300">
                          <div className="inline-block mb-3">
                            <span className="text-accent600 font-heading font-black text-4xl">
                              {item.number}
                            </span>
                          </div>
                          <h3 className="font-heading font-bold text-xl text-accent600 leading-tight drop-shadow-lg">
                            {item.question}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

      {/* ─── TEAM PREVIEW ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection variant="fadeUp" className="text-center mb-16">
            <span className="text-[#8B1A4A] text-xs font-black uppercase tracking-[0.22em] mb-3 block">District Leadership</span>
            <h2 className="font-display font-black text-gray-900 text-4xl md:text-5xl lg:text-6xl">
              Meet Our<br /><span className="text-[#8B1A4A]">Leadership Team</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto mt-4 text-base">The passionate individuals driving Rotaract District 9104 forward</p>
          </AnimatedSection>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {[
              { name: "Rtr. Kingdom Kededor Avisseh", position: "District Rotaract Representative", image: drrImg },
              { name: "Rtr. Sedinam Edreh", position: "Vice District Rotaract Representative", image: vdrRImg },
              { name: "Rtr. Emmanuel Boakye-Dankwah", position: "Vice District Rotaract Representative", image: vdrRImg2 },
            ].map((member, index) => (
              <motion.div 
                key={member.name}
                variants={fadeInUp}
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
                </div>
                <div className="text-center">
                  <h3 className="font-display font-black text-gray-900 text-base mb-1 group-hover:text-[#8B1A4A] transition-colors">{member.name}</h3>
                  <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">{member.position}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

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
            <AnimatedSection variant="fadeUp">
              <span className="text-[#8B1A4A] text-xs font-black uppercase tracking-[0.22em]">What's On</span>
              <h2 className="font-display font-black text-gray-900 text-4xl md:text-5xl mt-2">Upcoming Events</h2>
            </AnimatedSection>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/events/calendar" className="inline-flex items-center gap-2 text-[#8B1A4A] font-bold text-sm hover:gap-3 transition-all">
                Full Calendar <FaChevronRight size={11} />
              </Link>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-[1fr_360px] gap-8">
            <div className="space-y-4">
              {upcomingEvents.map((event, i) => (
                <motion.div 
                  key={event.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className="group bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#8B1A4A]/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="mb-4 text-xs uppercase tracking-[0.22em] text-[#8B1A4A] font-bold">
                    {event.dateLabel || "Date TBD"}
                  </div>
                  <h4 className="font-display font-black text-gray-900 text-base group-hover:text-[#8B1A4A] transition-colors">{event.title}</h4>
                  <p className="text-gray-500 text-sm mt-3">{event.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* DLAC Feature Card */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#8B1A4A] text-white rounded-2xl p-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 80%, #fff 0, transparent 50%), radial-gradient(circle at 80% 20%, #fff 0, transparent 50%)" }} />
              <div className="relative z-10">
                <span className="inline-block text-white/70 text-xs font-black uppercase tracking-[0.2em] mb-4">Featured Event</span>
                <h3 className="font-display font-black text-white text-3xl mb-3">DLAC 2027</h3>
                <p className="text-white/80 text-sm mb-6 leading-relaxed">
                  The District Learning Assembly and Conference is the premier annual gathering of Rotaractors in District 9104. Join us for inspiring sessions, fellowship, and service.
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
          <AnimatedSection variant="fadeUp" className="text-center mb-14">
            <span className="text-[#8B1A4A] text-xs font-black uppercase tracking-[0.22em] mb-3 block">Impact Stories</span>
            <h2 className="font-display font-black text-gray-900 text-4xl md:text-5xl">
              Transforming Lives<br /><span className="text-[#8B1A4A]">Across Ghana</span>
            </h2>
          </AnimatedSection>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-10"
          >
            {[
              { date: "May 2026", title: "Healthcare Initiative Reaches 5,000 Beneficiaries", excerpt: "Our district-wide health outreach program has screened and provided preventive care to thousands.", tag: "Health" },
              { date: "April 2026", title: "Literacy Campaign Distributes Books to 20 Schools", excerpt: "Rotaract clubs united to provide educational resources to students in underserved communities.", tag: "Education" },
              { date: "March 2026", title: "Environmental Restoration: Trees for Tomorrow", excerpt: "Over 15,000 trees planted as part of our commitment to environmental sustainability.", tag: "Environment" },
            ].map((story, i) => (
              <motion.div 
                key={story.title}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="group bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
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
          </motion.div>

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
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
      <AnimatedSection variant="fadeUp">
        <span className="text-[#8B1A4A] text-xs font-black uppercase tracking-[0.22em] mb-3 block">Resources</span>
        <h2 className="font-display font-black text-gray-900 text-4xl md:text-5xl">
          Rotaract Resources<br /><span className="text-[#8B1A4A]">&amp; Downloads</span>
        </h2>
        <p className="text-gray-500 max-w-xl mt-2 text-base">Essential guides and materials for clubs and members across District 9104</p>
      </AnimatedSection>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/resources" className="inline-flex items-center gap-2 bg-[#8B1A4A] text-white font-bold px-6 py-3 rounded-full hover:bg-[#6b1238] transition-all duration-300 shadow-lg hover:shadow-[#8B1A4A]/30 hover:shadow-xl group">
          View All Resources
          <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>

    <motion.div 
      variants={staggerContainerFast}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
    >
      {[
        { id: 1, title: "District 9104 Song Book", desc: "Official collection of Rotaract and Rotary songs for District 9104", type: "PDF", url: "/files/District 9104 Song Book.pdf", category: "Song Book" },
        { id: 2, title: "District Bylaw 2026-27", desc: "Official district bylaws and governance guidelines for the 2026-27 term", type: "PDF", url: "/files/District Bylaw 2026-2027.pdf", category: "Bylaws" },
        { id: 3, title: "Oath of Membership", desc: "Official oath for new Rotaract members joining the movement", type: "PDF", url: "/files/Oath of Membership.pdf", category: "Oaths" },
        { id: 4, title: "Oath of Office for Presidents", desc: "Official oath for club presidents and incoming leaders", type: "PDF", url: "/files/Oath of Office FOR PRESIDENTS.pdf", category: "Oaths" },
        // Add more resources as needed
      ].slice(0, 4).map((r, index) => (
        <motion.div 
          key={r.id}
          variants={fadeInUp}
          whileHover={{ y: -6 }}
          className="group bg-white p-6 border border-gray-100 hover:border-[#8B1A4A]/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col rounded-2xl"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B1A4A] to-[#e54d7e] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#8B1A4A] bg-[#fdf2f6] px-2 py-0.5 rounded">
              {r.category}
            </span>
          </div>
          <h3 className="font-display font-black text-gray-900 text-base mb-2 group-hover:text-[#8B1A4A] transition-colors line-clamp-2">{r.title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1 line-clamp-2">{r.desc}</p>
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded font-bold">{r.type}</span>
            </div>
            <motion.a href={r.url} download
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-1.5 bg-[#8B1A4A] text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-[#6b1238] transition-colors"
            >
              <FaDownload size={10} /> Download
            </motion.a>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

      {/* ─── QUICK LINKS ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#8B1A4A]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickLinks.map((q, i) => (
            <motion.div 
              key={q.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
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
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span 
              className="text-[#8B1A4A] text-xs font-black uppercase tracking-[0.22em] mb-4 block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Get Involved
            </motion.span>
            <motion.h2 
              className="font-display font-black text-gray-900 text-4xl md:text-5xl lg:text-6xl mb-6"
              initial={{ clipPath: "inset(0 50% 0 50%)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0%)" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              Ready to Make<br /><span className="text-[#8B1A4A]">a Difference?</span>
            </motion.h2>
            <motion.p 
              className="text-gray-500 text-lg mb-10 max-w-xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Join thousands of young leaders across Ghana who are transforming communities and building a better future through Rotaract.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
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
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;