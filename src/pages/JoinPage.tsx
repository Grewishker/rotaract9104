import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
// import HighlightBox from "../components/HighlightBox";
import joinImg from "../assets/join-rotaract.jpg";
import heroAboutImg from "../assets/hero-about.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Search, Users, ClipboardCheck, PartyPopper, Star, Heart, Globe, Award, CheckCircle } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
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

const steps = [
  { num: 1, title: "Find a Club", desc: "Use our Club Locator to find a Rotaract club near you.", icon: Search },
  { num: 2, title: "Attend a Meeting", desc: "Visit a club meeting to experience the fellowship firsthand.", icon: Users },
  { num: 3, title: "Apply", desc: "Submit your membership application through the club.", icon: ClipboardCheck },
  { num: 4, title: "Get Inducted", desc: "Welcome to the Rotaract family! Begin your service journey.", icon: PartyPopper },
];

const JoinPage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    {/* <PageHero 
      breadcrumb="Join Us" 
      title="Join Rotaract" 
      subtitle="Become part of a global movement of young leaders making a difference" 
      image={heroAboutImg} 
    />
     */}
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Image */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mb-16 group cursor-pointer"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-accent600/30 to-secondary/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src={joinImg} 
              alt="Join Rotaract" 
              className="w-full h-72 md:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700" 
              loading="lazy" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
              <div className="p-8">
                <p className="text-white text-lg font-semibold">Your journey starts here</p>
              </div>
            </div>
          </div>
        </motion.div> */}

        {/* Steps Section */}
        <AnimatedSection className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {steps.map((s, index) => (
            <motion.div
              key={s.num}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <div className="text-center">
                <motion.div 
                  className="relative w-20 h-20 mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="absolute inset-0 bg-accent600/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-accent600 to-accent700 text-primary font-display font-bold text-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all">
                    {s.num}
                  </div>
                </motion.div>
                
                <div className="w-12 h-12 rounded-xl bg-accent600/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent600/20 transition-colors">
                  <s.icon size={22} className="text-accent600" />
                </div>
                
                <h3 className="font-display font-bold text-primary text-lg mb-2 group-hover:text-accent600 transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
              
              {/* Connector Line (except last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-accent600/30 to-transparent -translate-y-1/2" />
              )}
            </motion.div>
          ))}
        </AnimatedSection>

        {/* Content Grid */}
        <AnimatedSection className="grid md:grid-cols-2 gap-10">
          {/* Left Column - Eligibility */}
          <motion.div variants={fadeInUp}>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="font-display text-primary text-2xl font-bold mb-6 flex items-center gap-3">
                <CheckCircle className="text-accent600" size={28} />
                Eligibility
              </h2>
              
              <ul className="space-y-3 mb-8">
                {[
                  { text: "Age 18 and above", icon: Star },
                  { text: "Interest in community service", icon: Heart },
                  { text: "Willingness to participate in club activities", icon: Users },
                  { text: "Good moral character", icon: Award },
                  { text: "No prior Rotaract membership required", icon: Globe },
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
                    <div className="w-10 h-10 rounded-lg bg-accent600/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-accent600" />
                    </div>
                    <span className="leading-relaxed pt-2">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="bg-gradient-to-r from-accent600/5 to-secondary/5 rounded-xl p-6">
                <h3 className="font-display text-primary text-xl font-bold mb-3 flex items-center gap-2">
                  <Award className="text-accent600" size={22} />
                  Membership Dues
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Annual membership dues vary by club. This covers club activities, district dues, and RI registration.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Benefits */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-8 shadow-xl border-l-4 border-accent600">
                <h3 className="font-display font-bold text-2xl mb-6 flex items-center gap-2">
                  <Star className="text-accent600" size={24} />
                  Benefits of Membership
                </h3>
                <ul className="space-y-3">
                  {[
                    "Leadership development opportunities",
                    "Global networking with 250,000+ Rotaractors",
                    "Professional development programs",
                    "Community service impact",
                    "Lifelong friendships and fellowship",
                    "Access to Rotary grants and resources",
                  ].map((item, i) => (
                    <motion.li
                      key={item}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-accent600 mt-2.5 flex-shrink-0" />
                      <span className="text-white/90 leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact/club-locator" 
                className="inline-flex items-center gap-2 w-full justify-center bg-accent600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-accent700 transition-all shadow-lg hover:shadow-xl group"
              >
                <Search size={20} />
                Find a Club Near You
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>

    {/* Bottom CTA */}
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
            Ready to Make a Difference?
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8 text-lg">
            Join thousands of young leaders across Ghana who are creating lasting change in their communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact/club-locator" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent600 text-white font-semibold shadow-lg hover:bg-accent700 transition-all group"
              >
                Find Your Club
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/about/rotaract" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-accent600 text-accent600 font-semibold hover:bg-accent600 hover:text-white transition-all"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  </motion.div>
);

export default JoinPage;