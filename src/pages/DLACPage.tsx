import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import PageMetadata from "../components/PageMetadata";
import HighlightBox from "../components/HighlightBox";
import { CalendarDays, MapPin, Users, Target, ArrowRight, Star, Clock, Award, Heart } from "lucide-react";
import dlacImg from "../assets/dlac-event.png";
import dlacFlyer from "../assets/flyers/DLAC2027.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, type: "spring", stiffness: 200 } }
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

const DLACPage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <PageMetadata
      title="DLAC 2027 Registration | Rotaract District 9104"
      description="Register for DLAC 2027 at The Grove Essipong Beach Resort, Sekondi-Takoradi. Early bird rate GH₵3,100 through 30th November. Payment options include First Bank Ghana and MTN Mobile Money."
      image={dlacFlyer}
      path="/events/dlac"
    />

    <PageHero 
      breadcrumb="Events" 
      title="DLAC 2027" 
      subtitle="District Leadership Assembly and Conference — The next premier Rotaract event in Ghana" 
      image={dlacImg} 
    />
    
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        
        
        <AnimatedSection className="grid md:grid-cols-[1fr_380px] gap-10">
          {/* Main Content */}
          <motion.div variants={fadeInUp} className="prose max-w-none">
            <motion.div variants={fadeInUp}>
              <h2 className="font-display text-primary text-3xl font-bold mb-4 flex items-center gap-3">
                <Star className="text-accent600" size={28} />
                About DLAC 2027
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                After the successful DLAC 2025 and DLAC 2026 conferences, Rotaract District 9104 is preparing for its next gathering in 2027. DLAC is the flagship Rotaract event in Ghana, uniting members for leadership training, service planning, and fellowship.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-gradient-to-r from-accent600/5 to-secondary/5 rounded-2xl p-8 mb-8 border border-gray-100">
              <h3 className="font-display text-primary text-xl font-bold mb-4 flex items-center gap-2">
                <Target className="text-accent600" size={22} />
                What to Expect
              </h3>
              <ul className="space-y-3">
                {[
                  { text: "Inspiring keynote talks from district and Rotary leaders", icon: Star },
                  { text: "Practical workshops on service, membership growth, and club leadership", icon: Award },
                  { text: "Recognition for outstanding club projects and district champions", icon: Heart },
                  { text: "Networking across all clusters of District 9104", icon: Users },
                  { text: "Hands-on community service and sustainability activities", icon: Target },
                  { text: "Fellowship, cultural performances, and evening socials", icon: CalendarDays },
                ].map((item, i) => (
                  <motion.li 
                    key={item.text}
                    className="flex items-start gap-3 text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent600/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon size={16} className="text-accent600" />
                    </div>
                    <span className="leading-relaxed">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <HighlightBox title="What happened in 2025 & 2026">
                <ul className="space-y-3">
                  {[
                    "DLAC 2025 brought together 200+ Rotaractors for leadership and service planning.",
                    "DLAC 2026 deepened club collaboration with shared project showcases.",
                    "Both conferences accelerated membership and strengthened district fellowship.",
                  ].map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent600 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </HighlightBox>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-8 shadow-xl border-l-4 border-accent600">
                <h3 className="font-display font-bold text-2xl mb-6">DLAC 2027 Preview</h3>
                <ul className="space-y-4">
                  {[
                    { icon: CalendarDays, text: "25th – 28th March 2027" },
                    { icon: MapPin, text: "The Grove Essipong Beach Resort, Sekondi-Takoradi" },
                    { icon: Users, text: "Expected attendees: 100+ Rotaractors" },
                    { icon: Target, text: "Theme: #JourneyToTheWest" },
                  ].map((item, i) => (
                    <motion.li 
                      key={item.text}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        <item.icon size={18} className="text-accent600" />
                      </div>
                      <span className="text-white/90 leading-relaxed">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </AnimatedSection>

        <section className="mt-16 bg-white rounded-3xl border border-gray-200 shadow-sm px-4 py-10 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:items-start">
              <div className="flex-1">
                <h2 className="font-display text-primary text-3xl sm:text-4xl font-bold mb-4">DLAC 2027 Registration</h2>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Registration and payment are now open for DLAC 2027. Join Rotaractors from across District 9104 at The Grove Essipong Beach Resort in Sekondi-Takoradi.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-gradient-to-br from-accent600/10 to-secondary/10 p-5 border border-gray-100">
                    <p className="text-sm uppercase tracking-[0.2em] text-accent600 font-semibold mb-2">Early Bird Rate</p>
                    <p className="text-3xl font-bold text-primary">GH₵3,100</p>
                    <p className="text-sm text-gray-500 mt-2">Ends: 30th November 2026</p>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-accent600/10 to-secondary/10 p-5 border border-gray-100">
                    <p className="text-sm uppercase tracking-[0.2em] text-accent600 font-semibold mb-2">Event Dates</p>
                    <p className="text-xl font-semibold text-primary">25th – 28th March 2027</p>
                    <p className="text-sm text-gray-500 mt-2">The Grove Essipong Beach Resort, Sekondi-Takoradi</p>
                  </div>
                </div>

                <div className="mt-8 space-y-4 text-gray-700">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Payment Options</h3>
                    <p className="font-semibold">First Bank Ghana</p>
                    <p>Account Name: Rotaract District 9104</p>
                    <p>Account Number: 0043040001281</p>
                    <p>Branch: Kaneshie</p>
                  </div>
                  <div>
                    <p className="font-semibold">MTN Mobile Money</p>
                    <p>Number: 0246691883</p>
                    <p>MoMo Name: Rotaract District 9104</p>
                  </div>
                  <p className="text-sm italic text-gray-500">Installment payment plans are available. Contact the district service team for details.</p>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSerpMunk1-6AP74fz7EHezOfwjD5QE9imdqEskID2S5zQXNiQ/viewform" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-accent600 px-8 py-4 text-white font-semibold shadow-lg hover:bg-accent700 transition-all">Open Registration Form</a>
                  <span className="text-sm text-gray-500">or scan the QR code on the flyer</span>
                </div>
              </div>

              <div className="w-full lg:w-[380px]">
                <img src={dlacFlyer} alt="DLAC 2027 Flyer" className="w-full rounded-3xl shadow-xl object-cover" loading="lazy" />
              </div>
            </div>

            <div className="mt-10 rounded-3xl border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Register Inline</h3>
                <p className="text-sm text-gray-500 mt-1">If the embedded form is blocked by your browser, use the link above.</p>
              </div>
              <div className="w-full">
                <iframe
                  title="DLAC 2027 Registration"
                  src="https://docs.google.com/forms/d/e/1FAIpQLSerpMunk1-6AP74fz7EHezOfwjD5QE9imdqEskID2S5zQXNiQ/viewform?embedded=true"
                  className="w-full"
                  style={{ minHeight: 680 }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative m-12 group cursor-pointer"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-accent600/30 to-secondary/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src={dlacImg} 
              alt="DLAC Conference" 
              className="w-full h-72 md:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700" 
              loading="lazy" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
              <div className="p-8">
                <p className="text-white text-lg font-semibold">Experience the Magic of Rotaract</p>
              </div>
            </div>
          </div>
        </motion.div>


      </div>
    </section>

    {/* CTA Section */}
    <section className="py-16 bg-gradient-to-r from-accent600/10 via-accent600/5 to-accent600/10 relative overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(0,0,0,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-black text-primary text-4xl md:text-5xl mb-4">
            Be Part of DLAC 2027
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8 text-lg">
            Join hundreds of Rotaractors from across Ghana for an unforgettable experience of leadership, service, and fellowship.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/join" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent600 text-white font-semibold shadow-lg hover:bg-accent700 transition-all group"
              >
                Register Interest
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/events/calendar" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-accent600 text-accent600 font-semibold hover:bg-accent600 hover:text-white transition-all"
              >
                View All Events
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  </motion.div>
);

export default DLACPage;