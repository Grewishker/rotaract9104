import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUsers, FaMapMarkerAlt, FaHandHoldingHeart, FaCalendarAlt } from "react-icons/fa";
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

const slides = [
  {  title: "Elevating Service Through Inspired Leadership", sub: "Empowering young leaders across Ghana to create lasting change in their communities.", cta1: { label: "Join Rotaract", to: "/join" }, cta2: { label: "Learn More", to: "/about/rotaract" }, image: heroSlide1 },
  {  title: THEME.name, sub: "Under the leadership of RI President Stephanie Urchick, we embrace the magic within us all.", cta1: { label: "Explore the Theme", to: "/about/rotary-international" }, cta2: { label: "Our Projects", to: "/projects/signature" }, image: heroSlide2 },
  {  title: "Relive the Experiences of DLAC 2026", sub: "Discover the magic of Rotary International's largest gathering of young leaders.", cta1: { label: "Gallery", to: "/gallery" }, cta2: { label: "View Events", to: "/events/calendar" }, image: heroSlide3 },
];

const stats = [
  { value: "60+", label: "Clubs" },
  { value: "3,000+", label: "Members" },
  { value: "200+", label: "Projects" },
  { value: "12+", label: "Zones" },
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

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <div>
      {/* Hero Slider */}
      <section className="relative h-[580px] flex items-center overflow-hidden">
        {slides.map((s, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}>
            <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
<div className="absolute inset-0 bg-gradient-to-r from-primary-dark900/90 via-primary400/20 to-white/10 mix-blend-multiply" />          </div>
        ))}
        <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
          {/* <span className="inline-block bg-accent600 text-slate-50 text-xs font-bold px-3 py-1 rounded-full mb-4">{slide.tag}</span> */}
          <h2 className="font-display font-bold text-white text-4xl md:text-5xl lg:text-[56px] leading-tight max-w-2xl mb-4">{slide.title}</h2>
          <p className="text-white/80 text-lg max-w-xl mb-8">{slide.sub}</p>
          <div className="flex gap-3">
            <Link to={slide.cta1.to} className="bg-accent600 text-slate-50 font-semibold px-6 py-3 rounded hover:bg-secondary hover:text-primary transition">{slide.cta1.label}</Link>
            <Link to={slide.cta2.to} className="border-2 border-white text-white px-6 py-3 rounded hover:bg-white hover:text-primary-dark transition">{slide.cta2.label}</Link>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)} className={`w-3 h-3 rounded-full transition ${i === currentSlide ? "bg-accent600" : "bg-white/40"}`} />
          ))}
        </div>
      </section>

      {/* Theme Banner */}
      <section className="bg-accent600 py-10 text-center">
        <p className="text-slate-50 text-xs uppercase tracking-widest font-semibold mb-2">Rotary Year 2024–2025</p>
        <h2 className="font-display font-bold text-white text-3xl md:text-4xl mb-2">{THEME.name}</h2>
        <p className="text-white/80 text-sm">RI President Stephanie Urchick • Rotaract District 9104, Ghana | Zones 22 &amp; 22A</p>
      </section>

      {/* DRR Message */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[320px_1fr] gap-10 items-center">
          <div className="relative">
            <img src={drrImg} alt="District Rotaract Representative" className="w-full h-96 object-cover rounded-lg" loading="lazy" width={640} height={864} />
            <span className="absolute bottom-4 left-4 bg-slate-50 text-primary-dark text-xs font-bold px-3 py-1 rounded">DRR 2024–2025</span>
          </div>
          <div>
            <p className="text-accent600 uppercase text-xs font-semibold tracking-widest mb-2">District Rotaract Representative</p>
            <h2 className="font-display font-bold text-primary text-3xl mb-4">A Message from Our DRR</h2>
            <blockquote className="border-l-4 border-accent600 pl-4 italic text-gray-600 mb-4">
              "Together, we are creating magic — transforming communities, building leaders, and leaving a legacy of service that transcends borders."
            </blockquote>
            <p className="text-gray-700 mb-3">As we embark on this Rotary year, I am filled with immense pride and gratitude for the dedication of every Rotaractor in District 9104. Our collective efforts in health, education, and environmental sustainability continue to make a tangible impact across Ghana.</p>
            <p className="text-gray-700 mb-4">Let us harness {THEME.name} to reach even greater heights. Together, there is no limit to what we can achieve.</p>
            <p className="font-semibold text-primary">Rtr. [DRR Name]</p>
            <p className="text-gray-500 text-sm mb-4">District Rotaract Representative, 2024–2025</p>
            <Link to="/about/drr" className="inline-block bg-accent600 text-slate-50 font-semibold px-6 py-3 rounded hover:bg-secondary hover:text-primary transition">Learn More About the DRR</Link>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-accent600 py-12">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display font-bold text-slate-50 text-4xl md:text-5xl">{s.value}</div>
              <div className="text-white/80 text-xs uppercase tracking-widest mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* District Highlights */}
      <section className="py-16 bg-secondary/5">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle title="District Highlights" subtitle="Recent stories of service and impact from across the district" />
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((h) => (
              <div key={h.title} className="bg-white border border-secondary/10 rounded-lg overflow-hidden hover:-translate-y-1 hover:shadow-lg transition">
                <div className="h-44 relative">
                  <img src={h.image} alt={h.title} className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
                  <span className="absolute top-3 left-3 bg-slate-50 text-primary-dark text-xs font-bold px-2 py-0.5 rounded">{h.cat}</span>
                </div>
                <div className="p-5">
                  <p className="text-gray-500 text-xs mb-1">{h.date}</p>
                  <h3 className="font-display font-bold text-primary text-lg mb-2">{h.title}</h3>
                  <p className="text-gray-500 text-sm mb-3">{h.excerpt}</p>
                  <span className="text-accent600 font-semibold text-sm cursor-pointer hover:underline">Read More →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle title="Upcoming Events" subtitle="Stay connected with what's happening across the district" />
          <div className="grid md:grid-cols-[1fr_380px] gap-8">
            <div className="space-y-6">
              {events.map((e) => (
                <EventItem key={e.title} {...e} />
              ))}
            </div>
            <div className="bg-primary-dark text-white border-l-4 border-accent600 p-8 rounded-lg h-fit">
              <h3 className="text-accent600 font-display font-bold text-xl mb-3">DLAC 2025</h3>
              <p className="text-secondary/50 text-sm mb-4">The District Leadership and Conference (DLAC) is the premier annual gathering of Rotaractors in District 9104. Join us for inspiring sessions, fellowship, and service.</p>
              <Link to="/events/dlac" className="inline-block bg-accent600 text-primary-dark font-semibold px-6 py-3 rounded hover:bg-secondary transition">Register Now</Link>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/events/calendar" className="inline-block bg-accent600 text-slate-50  font-semibold px-6 py-3 rounded hover:bg-secondary hover:text-primary transition">View Full Calendar</Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-secondary/5">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickLinks.map((q) => (
            <Link key={q.title} to={q.to} className="bg-primary hover:bg-primary-dark text-white rounded-lg p-6 text-center transition group">
              <q.icon className="text-slate-50 mx-auto mb-3" size={32} />
              <h4 className="font-semibold">{q.title}</h4>
              <p className="text-secondary/50 text-xs mt-1">{q.sub}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-secondary/10 py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-accent600 text-3xl mb-3">Stay in the Loop</h2>
          <p className="text-primary-dark mb-6">Subscribe to our newsletter for the latest updates from Rotaract District 9104.</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded border border-secondary/20 focus:outline-none focus:border-accent600" />
            <button className="bg-accent600 text-slate-50 font-semibold px-6 py-3 rounded hover:bg-secondary hover:text-primary transition">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
