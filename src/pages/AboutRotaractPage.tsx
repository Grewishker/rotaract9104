import PageHero from "../components/PageHero";
import HighlightBox from "../components/HighlightBox";
import aboutRotaractImg from "../assets/9104-Rotary-Logo-Cld2x-1-1.png";
import heroAboutImg from "../assets/hero-about.jpg";
import heroVideo from "../assets/videos/Rotaract intro dark.mp4";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Globe,
  Heart,
  BookOpen,
  Star,
  Award,
  CheckCircle,
  Shield,
  Handshake,
  Sparkles,
  Droplets,
  GraduationCap,
  Building,
  TreePine,
  Briefcase,
  Home,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import images for core values
import serviceImg from "@/assets/service.jpg";
import fellowshipImg from "@/assets/fellowship.jpg";
import diversityImg from "@/assets/diversity.jpg";
import integrityImg from "@/assets/integrity.jpg";
import leadershipImg from "@/assets/leadership.jpg";

// Import images for areas of focus
import peaceImg from "@/assets/promoting-peace.jpg";
import healthImg from "@/assets/7areas of  focus/Disease Prevention and Treatment.png";
import waterImg from "@/assets/7areas of  focus/Water, Sanitation, and Hygiene.png";
import maternalImg from "@/assets/7areas of  focus/Maternal and Child Health.png";
import educationImg from "@/assets/education.jpg";
import economicImg from "@/assets/7areas of  focus/Community Economic Development.png";
import environmentImg from "@/assets/project-environment.jpg";

// Import images for avenues of service
import clubServiceImg from "@/assets/club-service.jpg";
import vocationalImg from "@/assets/club-service.jpg";
import communityServiceImg from "@/assets/community-service.jpg";
import internationalServiceImg from "@/assets/international-service.jpg";
import youthServiceImg from "@/assets/training.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
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

// CORRECTED: 5 Core Values
const coreValues = [
  {
    icon: Handshake,
    title: "Service",
    desc: "Helping others through global projects that create lasting impact in communities.",
    image: serviceImg,
  },
  {
    icon: Users,
    title: "Fellowship",
    desc: "Building strong, lifelong global friendships that transcend borders and cultures.",
    image: fellowshipImg,
  },
  {
    icon: Globe,
    title: "Diversity",
    desc: "Embracing all cultures, professions, and perspectives to create inclusive communities.",
    image: diversityImg,
  },
  {
    icon: Shield,
    title: "Integrity",
    desc: "Upholding strict, honest ethical standards in everything we do.",
    image: integrityImg,
  },
  {
    icon: Sparkles,
    title: "Leadership",
    desc: "Developing leaders to inspire positive change in their communities and beyond.",
    image: leadershipImg,
  },
];

// CORRECTED: 7 Areas of Focus
const areasOfFocus = [
  {
    title: "Peacebuilding and Conflict Prevention",
    desc: "Building peace and resolving conflict through dialogue, understanding, and community engagement.",
    icon: Heart,
    image: peaceImg,
  },
  {
    title: "Disease Prevention and Treatment",
    desc: "Eliminating major illnesses like polio and improving healthcare access for all.",
    icon: Shield,
    image: healthImg,
  },
  {
    title: "Water, Sanitation, and Hygiene",
    desc: "Delivering safe water and sanitation to communities in need.",
    icon: Droplets,
    image: waterImg,
  },
  {
    title: "Maternal and Child Health",
    desc: "Improving healthcare for mothers and kids to ensure healthy futures.",
    icon: Heart,
    image: maternalImg,
  },
  {
    title: "Basic Education and Literacy",
    desc: "Strengthening schools and boosting literacy to empower the next generation.",
    icon: GraduationCap,
    image: educationImg,
  },
  {
    title: "Community Economic Development",
    desc: "Creating jobs and reducing local poverty through sustainable economic initiatives.",
    icon: Briefcase,
    image: economicImg,
  },
  {
    title: "Supporting the Environment",
    desc: "Protecting ecosystems and natural resources for future generations.",
    icon: TreePine,
    image: environmentImg,
  },
];

// CORRECTED: 5 Avenues of Service
const avenuesOfService = [
  {
    title: "Club Service",
    desc: "Making local clubs run smoothly through effective administration and member engagement.",
    icon: Home,
    image: clubServiceImg,
  },
  {
    title: "Vocational Service",
    desc: "Using professional skills to help communities and advance career development.",
    icon: Briefcase,
    image: vocationalImg,
  },
  {
    title: "Community Service",
    desc: "Improving life in local neighborhoods through impactful projects and initiatives.",
    icon: Building,
    image: communityServiceImg,
  },
  {
    title: "International Service",
    desc: "Expanding goodwill and peace globally through cross-border collaboration.",
    icon: Globe,
    image: internationalServiceImg,
  },
  {
    title: "Youth Service",
    desc: "Empowering students and young leaders to become change-makers in their communities.",
    icon: Users,
    image: youthServiceImg,
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
      video={heroVideo}
      mediaType="video"
      showOverlay={false}
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
          <h2 className="font-display text-primary text-2xl font-bold mb-4">
            History of Rotaract
          </h2>
          <p className="text-gray-700 mb-4">
            Rotaract was established in 1968 by Rotary International to bring
            together young people aged 18 and above to develop leadership
            skills, promote ethical standards, and advance goodwill and peace
            around the world.
          </p>
          <h3 className="font-display text-primary text-xl font-bold mt-8 mb-3">
            Our Mission
          </h3>
          <p className="text-gray-700 mb-4">
            To provide an opportunity for young men and women to enhance the
            knowledge and skills that will assist them in personal development,
            address the physical and social needs of their communities, and
            promote better relations between all people worldwide through a
            framework of friendship and service.
          </p>
          <h3 className="font-display text-primary text-xl font-bold mt-8 mb-3">
            Membership
          </h3>
          <p className="text-gray-700">
            Rotaract membership is open to anyone aged 18 and above who believes
            in the ideal of service. Members meet regularly, participate in
            service projects, enjoy fellowship activities, and develop
            professionally through various programs and initiatives.
          </p>
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
                <li>• Service</li>
                <li>• Fellowship</li>
                <li>• Diversity</li>
                <li>• Integrity</li>
                <li>• Leadership</li>
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
              "Rotaract provides an opportunity for young men and women to
              enhance the knowledge and skills that will assist them in personal
              development, address the physical and social needs of their
              communities, and promote better relations between all people
              worldwide through a framework of friendship and service."
            </p>
            <p className="text-white/70 font-body text-xs mt-4">
              — Rotary International
            </p>
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
            <p className="text-primary font-body text-sm leading-relaxed">
              Every project, every meeting, every conversation is an opportunity
              to serve — and in serving together, to forge friendships that
              transcend borders.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Core Values Grid with Images - Updated to 5 */}
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
          <h2 className="text-4xl md:text-5xl font-heading font-black text-primary mb-4">
            Core Values
          </h2>
          <p className="text-gray-600 font-body max-w-2xl mx-auto">
            The 5 principles that guide every Rotaractor in their journey of service and leadership
          </p>
        </motion.div>

        <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
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

                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <motion.div
                    className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon size={16} className="text-white" />
                  </motion.div>

                  <h3 className="font-heading font-bold text-white text-sm mb-1 drop-shadow-lg">
                    {title}
                  </h3>
                  <p className="text-white/90 text-xs font-body leading-relaxed drop-shadow">
                    {desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </section>

    {/* 7 Areas of Focus with Images */}
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
          <h2 className="text-4xl md:text-5xl font-heading font-black text-primary mb-4">
            Areas of Focus
          </h2>
          <p className="text-gray-600 font-body max-w-2xl mx-auto">
            The key areas where Rotaractors channel their service to create lasting change
          </p>
        </motion.div>

        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areasOfFocus.map(({ image, icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary800/50 to-transparent" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon size={18} className="text-white" />
                  </motion.div>

                  <h3 className="font-heading font-bold text-white text-sm mb-1 drop-shadow-lg">
                    {title}
                  </h3>
                  <p className="text-white/90 text-xs font-body leading-relaxed drop-shadow">
                    {desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </section>

    {/* 5 Avenues of Service — minimal split layout */}
<section className="relative overflow-hidden bg-[#FAFAF7] py-20 md:py-28">
  {/* decorative dotted arc, top right */}
  <svg
    className="pointer-events-none absolute right-6 top-10 hidden h-40 w-40 text-primary/20 md:block"
    viewBox="0 0 160 160"
    fill="none"
  >
    <path
      d="M4 4C40 4 120 40 156 130"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="1 12"
      strokeLinecap="round"
    />
  </svg>

  {/* soft blob, bottom left */}
  <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/[0.06] blur-3xl" />

  <div className="container mx-auto px-4 relative z-10">
    <div className="mx-auto flex max-w-6xl flex-col gap-16 lg:flex-row lg:gap-20">
      {/* LEFT: heading, copy, single portrait */}
      <motion.div
        className="lg:sticky lg:top-28 lg:h-fit lg:w-[38%]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="mb-4 block font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
          How We Serve
        </span>
        <h2 className="mb-4 font-heading text-4xl font-black leading-[1.1] text-primary md:text-5xl">
          Avenues
          <br />
          of Service
        </h2>
        <p className="mb-10 max-w-sm font-body text-sm leading-relaxed text-gray-600 md:text-base">
          The five pathways through which Rotaract clubs deliver service to
          their communities.
        </p>

        <div className="relative h-64 w-64">
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40" />
          <div className="absolute inset-3 overflow-hidden rounded-full shadow-md">
            <img
              src={clubServiceImg}
              alt="Rotaract service"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* RIGHT: hairline list */}
      <div className="lg:w-[62%]">
        {[
          {
            icon: Home,
            title: "Club Service",
            desc: "Making local clubs run smoothly through effective administration and member engagement.",
            color: "#b91c1c",
            number: "01",
            image: clubServiceImg,
          },
          {
            icon: Briefcase,
            title: "Vocational Service",
            desc: "Using professional skills to help communities and advance career development.",
            color: "#ca8a04",
            number: "02",
            image: vocationalImg,
          },
          {
            icon: Building,
            title: "Community Service",
            desc: "Improving life in local neighborhoods through impactful projects and initiatives.",
            color: "#15803d",
            number: "03",
            image: communityServiceImg,
          },
          {
            icon: Globe,
            title: "International Service",
            desc: "Expanding goodwill and peace globally through cross-border collaboration.",
            color: "#1d4ed8",
            number: "04",
            image: internationalServiceImg,
          },
          {
            icon: Users,
            title: "Youth Service",
            desc: "Empowering students and young leaders to become change-makers in their communities.",
            color: "#334155",
            number: "05",
            image: youthServiceImg,
          },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              className="group border-t border-primary/10 py-6 last:border-b"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex items-center gap-5">
                <span
                  className="w-8 shrink-0 font-heading text-xs font-bold tracking-wider"
                  style={{ color: item.color }}
                >
                  {item.number}
                </span>

                <Icon size={18} className="shrink-0" style={{ color: item.color }} />

                <h3 className="font-heading text-xl font-bold text-gray-800 md:text-2xl">
                  {item.title}
                </h3>
              </div>

              <p className="mt-2 pl-[3.25rem] font-body text-sm leading-relaxed text-gray-600 md:text-[15px]">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </div>
</section>

    {/* Membership Benefits Section */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-black text-primary mb-6">
              Membership Eligibility
            </h2>
            <p className="text-gray-600 font-body leading-relaxed mb-6">
              Rotaract membership is open to young men and women between the
              ages of <strong className="text-primary">18 and 30</strong>. You
              do not need a professional background or prior knowledge of Rotary
              — just a willingness to serve and grow.
            </p>
            <div className="space-y-4">
              {[
                { label: "Age", desc: "18 to 30 years old" },
                {
                  label: "Eligibility",
                  desc: "University students and young working professionals",
                },
                {
                  label: "Commitment",
                  desc: "A genuine desire to serve the community",
                },
                {
                  label: "Location",
                  desc: "Join a club in your community or school",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-secondary/40 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <div>
                    <span className="font-heading font-bold text-primary text-sm">
                      {item.label}:{" "}
                    </span>
                    <span className="text-gray-600 font-body text-sm">
                      {item.desc}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/join"
                className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-full bg-primary text-white font-heading font-bold text-sm hover:bg-primary-dark transition-all group"
              >
                Join a Club{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-lg p-8 border border-l-8 border-pink-600 border-gray-200"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <h3 className="font-heading font-bold text-primary text-xl mb-6">
              Benefits of Membership
            </h3>
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
                  <CheckCircle
                    size={16}
                    className="text-secondary/70 shrink-0 mt-0.5"
                  />
                  <span className="text-gray-600 font-body text-sm leading-relaxed">
                    {b}
                  </span>
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
        <h2 className="font-heading font-black text-primary text-3xl md:text-4xl mb-4">
          Ready to Take Action?
        </h2>
        <p className="text-accent600 font-body max-w-xl mx-auto mb-8">
          Rotaract District 9104 has clubs across Ghana ready to welcome you.
          Find your community and start making a difference today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/join"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary font-heading font-bold text-sm shadow-lg hover:bg-gray-100 transition-all group"
            >
              Join Rotaract Ghana{" "}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/about/district-9104"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-primary text-primary font-heading font-bold text-sm hover:bg-white hover:text-primary transition-all"
            >
              Explore District 9104
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  </motion.div>
);

export default AboutRotaractPage;