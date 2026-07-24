import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import drrImg from "../assets/TeamImages/1. DRR Kingdom Kededor Avisseh.jpg";
// import vdrrImg from "../assets/TeamImages/2. Emmanuel Boakye-Dankwah - VDRR.jpg";
import heroimage1 from "../assets/heroImages/HANDOVER-100.jpg"
import heroimage2 from "../assets/heroImages/HANDOVER-64.jpg"
import heroimage3 from "../assets/heroImages/HANDOVER-80.jpg"
import heroAboutImg from "../assets/hero-about.jpg";
import { THEME } from "@/lib/theme";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
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

const DRRPage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <PageHero 
      breadcrumb="About" 
      title="District Rotaract Representative" 
      // image={heroAboutImg} 
      image={[
        heroimage1,
        heroimage2,
        heroimage3
      ]}
    />
    
    {/* DRR Section */}
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection className="grid md:grid-cols-[320px_1fr] gap-10 items-start">
          <motion.div 
            variants={fadeInUp}
            className="relative group"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-accent600/20 to-secondary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            <div className="relative">
              <img 
                src={drrImg} 
                alt="District Rotaract Representative" 
                className="w-full h-[420px] object-cover rounded-lg shadow-2xl group-hover:shadow-3xl transition-all duration-500" 
                loading="lazy" 
                width={640} 
                height={864} 
              />
              <motion.span 
                className="absolute bottom-4 left-4 bg-accent600 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                DRR 2026-27
              </motion.span>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <motion.p 
              className="text-accent600 uppercase text-xs font-semibold tracking-widest mb-2"
              variants={fadeInUp}
            >
              District Rotaract Representative
            </motion.p>
            <motion.h2 
              className="font-display font-bold text-primary text-3xl mb-4"
              variants={fadeInUp}
            >
              Rtr. Kingdom Kededor Avisseh
            </motion.h2>
            <motion.blockquote 
              className="border-l-4 border-accent600 pl-4 italic text-gray-600 mb-6"
              variants={fadeInUp}
            >
              "Together, we are creating magic — transforming communities, building leaders, and leaving a legacy of service that transcends borders."
            </motion.blockquote>
            
            <motion.div variants={fadeInUp}>
              <h3 className="font-display text-primary font-bold text-xl mb-3">Biography</h3>
              <p className="text-gray-700 mb-4">
                The District Rotaract Representative (DRR) is the highest-ranking Rotaract officer in the district. 
                Serving as the liaison between Rotaract and the District Governor, the DRR coordinates district-wide 
                activities, supports club development, and represents Rotaract at all levels of Rotary.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h3 className="font-display text-primary font-bold text-xl mb-3">Vision Statement</h3>
              <p className="text-gray-700 mb-4">
                To build a district of empowered, service-minded young leaders who leverage {THEME.name} 
                to drive sustainable community development and foster global connections.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h3 className="font-display text-primary font-bold text-xl mb-3">Official Engagements</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                {[
                  "Official visits to all 60+ clubs across Ghana",
                  "District Assembly and DLAC 2025 coordination",
                  "Zone 22 & 22A Rotaract leadership meetings",
                  "RI Convention representation",
                  "Partnership development with Rotary clubs and sponsors",
                ].map((engagement, i) => (
                  <motion.li
                    key={engagement}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                  >
                    {engagement}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/about/team" 
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-accent700 transition-all shadow-lg hover:shadow-xl group"
              >
                Meet the Full Team
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>

    {/* VDRR Section
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection className="grid md:grid-cols-[320px_1fr] gap-10 items-start">
          <motion.div 
            variants={fadeInUp}
            className="relative group"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-secondary/20 to-accent600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            <div className="relative">
              <img 
                src={vdrrImg} 
                alt="Vice District Rotaract Representative" 
                className="w-full h-[420px] object-cover rounded-lg shadow-2xl group-hover:shadow-3xl transition-all duration-500" 
                loading="lazy" 
                width={640} 
                height={864} 
              />
              <motion.span 
                className="absolute bottom-4 left-4 bg-accent600 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                VDRR 2026-27
              </motion.span>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <motion.p 
              className="text-accent600 uppercase text-xs font-semibold tracking-widest mb-2"
              variants={fadeInUp}
            >
              Vice District Rotaract Representative
            </motion.p>
            <motion.h2 
              className="font-display font-bold text-primary text-3xl mb-4"
              variants={fadeInUp}
            >
              Rtr. Emmanuel Boakye-Dankwah
            </motion.h2>
            <motion.blockquote 
              className="border-l-4 border-accent600 pl-4 italic text-gray-600 mb-6"
              variants={fadeInUp}
            >
              "Supporting clubs, empowering members, and working alongside the DRR to make The Magic of Rotaract a reality across Ghana."
            </motion.blockquote>
            
            <motion.div variants={fadeInUp}>
              <h3 className="font-display text-primary font-bold text-xl mb-3">Biography</h3>
              <p className="text-gray-700 mb-4">
                The Vice District Rotaract Representative (VDRR) serves as the second-highest ranking Rotaract officer 
                in the district. Working closely with the DRR, the VDRR assists in coordinating district activities, 
                provides support to zone coordinators, and steps in to represent the district when needed.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h3 className="font-display text-primary font-bold text-xl mb-3">Vision Statement</h3>
              <p className="text-gray-700 mb-4">
                Supporting membership growth initiatives, strengthening inter-club collaboration, and ensuring 
                effective communication between district leadership and club presidents across all seven zones.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h3 className="font-display text-primary font-bold text-xl mb-3">Official Engagements</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                {[
                  "Assist DRR with official club visits and district events",
                  "Coordinate zone-level activities and reporting",
                  "Support new club chartering and membership retention",
                  "Oversee district committees and special projects",
                  "Represent the district at zonal and regional functions",
                ].map((engagement, i) => (
                  <motion.li
                    key={engagement}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                  >
                    {engagement}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/about/team" 
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-accent700 transition-all shadow-lg hover:shadow-xl group"
              >
                Meet the Full Team
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section> */}

    {/* CTA Section */}
    <section className="py-12 bg-gradient-to-r from-primary-dark via-primary to-primary-dark relative overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Connect with District Leadership</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">
            Have questions or want to collaborate with District 9104? Reach out to the DRR and VDRR team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-primary font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl group"
              >
                Contact the District
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/about/district-9104" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-primary transition-all"
              >
                About District 9104
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  </motion.div>
);

export default DRRPage;