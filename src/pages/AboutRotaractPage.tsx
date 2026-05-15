import PageHero from "../components/PageHero";
import HighlightBox from "../components/HighlightBox";
import aboutRotaractImg from "../assets/9104-Rotary-Logo-Cld2x-1-1.png";
import heroAboutImg from "../assets/hero-about.jpg";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Globe, Heart, BookOpen, Star, Award, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import images for core values
import serviceImg from "@/assets/service.jpg";
import fellowshipImg from "@/assets/fellowship.jpg";
import diversityImg from "@/assets/diversity.jpg";
import integrityImg from "@/assets/integrity.jpg";
import leadershipImg from "@/assets/leadership.jpg";
import excellenceImg from "@/assets/excellence.jpg";

// Import images for areas of focus
import communityServiceImg from "@/assets/community-service.jpg";
import professionalDevImg from "@/assets/professional-dev.jpg";
import clubServiceImg from "@/assets/club-service.jpg";
import internationalServiceImg from "@/assets/international-service.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
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

const coreValues = [
  { icon: Heart, title: "Service", desc: "Dedicating time and skills to address community needs locally and globally.", image: serviceImg },
  { icon: Users, title: "Fellowship", desc: "Building authentic friendships and a supportive network that lasts a lifetime.", image: fellowshipImg },
  { icon: Globe, title: "Diversity", desc: "Celebrating differences in background, culture, and perspective.", image: diversityImg },
  { icon: BookOpen, title: "Integrity", desc: "Acting with honesty and ethical standards in all we do.", image: integrityImg },
  { icon: Star, title: "Leadership", desc: "Developing the skills to lead communities and organisations with impact.", image: leadershipImg },
  { icon: Award, title: "Excellence", desc: "Striving for the highest quality in every project and programme.", image: excellenceImg },
];

const areasOfFocus = [
  {
    title: "Community & International Service",
    desc: "Rotaractors design and deliver service projects addressing local and global issues — from health campaigns to environmental drives.",
    icon: Globe,
    image: communityServiceImg,
  },
  {
    title: "Professional Development",
    desc: "Career talks, mentorship, skills training, and networking events that equip members for the workplace and beyond.",
    icon: BookOpen,
    image: professionalDevImg,
  },
  {
    title: "Club Service",
    desc: "Strengthening club operations, membership experience, and internal culture to build sustainable, effective clubs.",
    icon: Users,
    image: clubServiceImg,
  },
  {
    title: "International Service",
    desc: "Collaborating with Rotaract clubs across borders on joint projects, exchanges, and global advocacy.",
    icon: Heart,
    image: internationalServiceImg,
  },
];

const membershipBenefits = [
  "Access to a global network of 9,000+ Rotaract clubs in 160+ countries",
  "Professional development workshops and career mentorship",
  "Opportunities to attend District, Zonal, and International Rotaract conferences",
  "Joint projects and exchanges with clubs across Africa and beyond",
  "Pathway to Rotary membership and the full Rotary network",
  "Lifelong friendships and a community of purpose-driven peers",
  "Leadership training through RYLA and district programmes",
  "Recognition and awards for outstanding service contributions",
];

const AboutRotaractPage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    {/* PageHero */}
    <PageHero 
      breadcrumb="About" 
      title="About Rotaract" 
      subtitle="Young leaders building a better world through service, fellowship, and professional development." 
      image={heroAboutImg} 
    />
    
    {/* Content Section */}
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1fr_380px] gap-10">
        <motion.div 
          className="prose max-w-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.img 
            src={aboutRotaractImg} 
            alt="Rotaract volunteers" 
            className="w-full h-56 object-cover rounded-lg mb-6" 
            loading="lazy" 
            width={800} 
            height={600} 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
          <h2 className="font-display text-primary text-2xl font-bold mb-4">History of Rotaract</h2>
          <p className="text-gray-700 mb-4">Rotaract was established in 1968 by Rotary International to bring together young people aged 18 and above to develop leadership skills, promote ethical standards, and advance goodwill and peace around the world.</p>
          <h3 className="font-display text-primary text-xl font-bold mt-8 mb-3">Our Mission</h3>
          <p className="text-gray-700 mb-4">To provide an opportunity for young men and women to enhance the knowledge and skills that will assist them in personal development, address the physical and social needs of their communities, and promote better relations between all people worldwide through a framework of friendship and service.</p>
          <h3 className="font-display text-primary text-xl font-bold mt-8 mb-3">Membership</h3>
          <p className="text-gray-700">Rotaract membership is open to anyone aged 18 and above who believes in the ideal of service. Members meet regularly, participate in service projects, enjoy fellowship activities, and develop professionally through various programs and initiatives.</p>
        </motion.div>
        
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <HighlightBox title="Core Values">
              <ul className="space-y-2">
                <li>• Service Above Self</li>
                <li>• Fellowship & Fun</li>
                <li>• Diversity & Inclusion</li>
                <li>• Integrity & Ethics</li>
                <li>• Leadership Development</li>
              </ul>
            </HighlightBox>
          </motion.div>
          
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <HighlightBox title="Benefits of Membership">
              <ul className="space-y-2">
                <li>• Global networking opportunities</li>
                <li>• Leadership & professional development</li>
                <li>• Community service impact</li>
                <li>• Lifelong friendships</li>
                <li>• Rotary family connections</li>
              </ul>
            </HighlightBox>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Mission & Vision Section */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div 
            className="bg-primary border-t-8 border-t-pink-400 p-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/90 text-white font-heading font-bold text-xs uppercase tracking-wider mb-5">
              Mission
            </span>
            <p className="text-white font-heading font-semibold text-lg leading-relaxed">
              "Rotaract provides an opportunity for young men and women to enhance the knowledge and skills that will assist them in personal development, address the physical and social needs of their communities, and promote better relations between all people worldwide through a framework of friendship and service."
            </p>
            <p className="text-white/70 font-body text-xs mt-4">— Rotary International</p>
          </motion.div>
          
          <motion.div 
            className="bg-secondary border-b-8 border-b-pink-500 p-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/90 text-white font-heading font-bold text-xs uppercase tracking-wider mb-5">
              Our Motto
            </span>
            <p className="text-primary/90 font-heading font-black text-4xl leading-tight mb-4">
              "Fellowship Through Service"
            </p>
            <p className="text-white/70 font-body text-sm leading-relaxed">
              Every project, every meeting, every conversation is an opportunity to serve — and in serving together, to forge friendships that transcend borders.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Core Values Grid with Images */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-heading font-bold text-xs uppercase tracking-wider mb-4">
            What We Stand For
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-primary mb-4">Core Values</h2>
          <p className="text-gray-600 font-body max-w-2xl mx-auto">
            The principles that guide every Rotaractor in their journey of service and leadership
          </p>
        </motion.div>
        
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map(({ image, icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={image} 
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary800/60 to-transparent" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <motion.div 
                    className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon size={18} className="text-white" />
                  </motion.div>
                  
                  <h3 className="font-heading font-bold text-white text-lg mb-1 drop-shadow-lg">
                    {title}
                  </h3>
                  <p className="text-white/90 text-sm font-body leading-relaxed drop-shadow">
                    {desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </section>

    {/* Areas of Focus with Images */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-heading font-bold text-xs uppercase tracking-wider mb-4">
            Our Impact Areas
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-primary mb-4">Areas of Focus</h2>
          <p className="text-gray-600 font-body max-w-2xl mx-auto">
            The four avenues through which Rotaract clubs channel their service and create lasting change
          </p>
        </motion.div>
        
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {areasOfFocus.map(({ image, icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={image} 
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary800/50 to-secondary800/20" />
                
                <div className="absolute inset-0 p-8 flex flex-col">
                  <div className="flex-1">
                    <motion.div 
                      className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon size={22} className="text-white" />
                    </motion.div>
                  </div>
                  
                  <div>
                    <h3 className="font-heading font-bold text-white text-xl mb-3 drop-shadow-lg">
                      {title}
                    </h3>
                    <p className="text-white/90 text-sm font-body leading-relaxed drop-shadow">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </section>

    {/* Membership Benefits Section */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-black text-primary mb-6">Membership Eligibility</h2>
            <p className="text-gray-600 font-body leading-relaxed mb-6">
              Rotaract membership is open to young men and women between the ages of <strong className="text-primary">18 and 30</strong>. You do not need a professional background or prior knowledge of Rotary — just a willingness to serve and grow.
            </p>
            <div className="space-y-4">
              {[
                { label: "Age", desc: "18 to 30 years old" },
                { label: "Eligibility", desc: "University students and young working professionals" },
                { label: "Commitment", desc: "A genuine desire to serve the community" },
                { label: "Location", desc: "Join a club in your community or school" },
              ].map((item, i) => (
                <motion.div 
                  key={item.label} 
                  className="flex gap-4 p-4 bg-gray-50 rounded border border-gray-200 hover:border-secondary/40 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <div>
                    <span className="font-heading font-bold text-primary text-sm">{item.label}: </span>
                    <span className="text-gray-600 font-body text-sm">{item.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/join"
                className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-full bg-primary text-white font-heading font-bold text-sm hover:bg-primary-dark transition-all group"
              >
                Join a Club <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="bg-gray-50 rounded-xl shadow-lg p-8 border border-l-8 border-pink-600 border-gray-200"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <h3 className="font-heading font-bold text-primary text-xl mb-6">Benefits of Membership</h3>
            <ul className="space-y-3">
              {membershipBenefits.map((b, i) => (
                <motion.li 
                  key={b} 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <CheckCircle size={16} className="text-secondary/70 shrink-0 mt-0.5" />
                  <span className="text-gray-600 font-body text-sm leading-relaxed">{b}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-16 bg-gradient-to-r bg-accent600/20">
      <motion.div 
        className="container mx-auto px-4 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading font-black text-primary text-3xl md:text-4xl mb-4">Ready to Take Action?</h2>
        <p className="text-accent600 font-body max-w-xl mx-auto mb-8">
          Rotaract District 9104 has clubs across Ghana ready to welcome you. Find your community and start making a difference today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/join" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary font-heading font-bold text-sm shadow-lg hover:bg-gray-100 transition-all group">
              Join Rotaract Ghana <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/about/district-9104" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-primary text-primary font-heading font-bold text-sm hover:bg-white hover:text-primary transition-all">
              Explore District 9104
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  </motion.div>
);

export default AboutRotaractPage;