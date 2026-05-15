import PageHero from "../components/PageHero";
import TeamCard from "../components/TeamCard";
import SectionTitle from "../components/SectionTitle";
import heroAboutImg from "../assets/hero-about.jpg";
import drrPortrait from "../assets/drr-portrait.jpg";
import vdrrPortrait from "../assets/vdrr-portrait.jpg";
import vdrrAdesaImg from "../assets/TeamImages/VDRR Tetteh Kojo Boampong Adesa.jpeg";
import secretaryImg from "../assets/TeamImages/Abigail Buwernorkuor Puplampu Secretary.jpeg";
import treasurerImg from "../assets/TeamImages/Daniel Atta Treasure.jpeg";
import projectChairImg from "../assets/TeamImages/Emmanuela Boansi Project.jpeg";
import professionalDevImg from "../assets/TeamImages/Ira Osei Akoto Professional Development.jpeg";
import publicRelationsImg from "../assets/TeamImages/Azariah Martey-Korley Public relations.jpeg";
import membershipImg from "../assets/TeamImages/Nathan Larbi Ankamah Public Relation.jpeg";
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

const officers = [
  {
    name: "Rtr. [DRR Name]",
    role: "District Rotaract Representative",
    initials: "DRR",
    image: drrPortrait,
  },
  {
    name: "Rtr. Boakye Agyeman",
    role: "Vice DRR",
    initials: "VDRR",
    image: vdrrPortrait,
  },
  {
    name: "Rtr. Tetteh Kojo Boampong Adesa",
    role: "Vice DRR",
    initials: "VDRR",
    image: vdrrAdesaImg,
  },
  {
    name: "Rtr. Abigail Buwernorkuor Puplampu",
    role: "District Secretary",
    initials: "DS",
    image: secretaryImg,
  },
  {
    name: "Rtr. Daniel Atta",
    role: "District Treasurer",
    initials: "DT",
    image: treasurerImg,
  },
];

const chairs = [
  {
    name: "Rtr. Emmanuela Boansi",
    role: "Service Projects Chair",
    initials: "SP",
    image: projectChairImg,
  },
  {
    name: "Rtr. Ira Osei Akoto",
    role: "Professional Dev Chair",
    initials: "PD",
    image: professionalDevImg,
  },
  {
    name: "Rtr. Azariah Martey-Korley",
    role: "Public Relations Chair",
    initials: "PR",
    image: publicRelationsImg,
  },
  {
    name: "Rtr. Nathan Larbi Ankamah",
    role: "Membership Chair",
    initials: "MC",
    image: membershipImg,
  },
];

const clusterCoordinators = [
  { name: "Rtr. [Name]", role: "Cluster A Coordinator", initials: "A" },
  { name: "Rtr. [Name]", role: "Cluster B Coordinator", initials: "B" },
  { name: "Rtr. [Name]", role: "Cluster C Coordinator", initials: "C" },
  { name: "Rtr. [Name]", role: "Cluster D Coordinator", initials: "D" },
  { name: "Rtr. [Name]", role: "Cluster E Coordinator", initials: "E" },
  { name: "Rtr. [Name]", role: "Cluster F Coordinator", initials: "F" },
  { name: "Rtr. [Name]", role: "Cluster G Coordinator", initials: "G" },
  { name: "Rtr. [Name]", role: "Cluster H Coordinator", initials: "H" },
  { name: "Rtr. [Name]", role: "Cluster I Coordinator", initials: "I" },
  { name: "Rtr. [Name]", role: "Cluster J Coordinator", initials: "J" },
];

const TeamPage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <PageHero 
      breadcrumb="About" 
      title="District Team" 
      subtitle="The dedicated leaders driving service and growth across District 9104" 
      image={heroAboutImg} 
    />
    
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* District Officers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle 
            title="District Officers" 
            subtitle="Executive leadership of Rotaract District 9104" 
          />
        </motion.div>
        
        <AnimatedSection className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {officers.map((o, index) => (
            <motion.div
              key={o.role}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <TeamCard {...o} />
            </motion.div>
          ))}
        </AnimatedSection>

        {/* Committee Chairs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle 
            title="Committee Chairs" 
            subtitle="Leading specialized committees across the district" 
          />
        </motion.div>
        
        <AnimatedSection className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {chairs.map((c, index) => (
            <motion.div
              key={c.role}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <TeamCard {...c} />
            </motion.div>
          ))}
        </AnimatedSection>

        {/* Cluster Coordinators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle 
            title="Cluster Coordinators" 
            subtitle="Regional representatives ensuring club support and development" 
          />
        </motion.div>
        
        <AnimatedSection className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clusterCoordinators.map((z, index) => (
            <motion.div
              key={z.role}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <TeamCard {...z} />
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  </motion.div>
);

export default TeamPage;