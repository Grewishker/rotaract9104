import PageHero from "../components/PageHero";
import TeamCard from "../components/TeamCard";
import SectionTitle from "../components/SectionTitle";
import heroAboutImg from "../assets/hero-about.jpg";
import drrPortrait from "../assets/TeamImages/1. DRR Kingdom Kededor Avisseh.jpg";
import vdrr1Img from "../assets/TeamImages/2. Emmanuel Boakye-Dankwah - VDRR.jpg";
import vdrr2Img from "../assets/TeamImages/3. Sedinam Edreh - VDRR.jpeg";
import ipdrrImg from "../assets/TeamImages/4. IPDRR Olive Naa Asheley Addo.jpeg";
import meChairImg from "../assets/TeamImages/5. BOAKYE AGYEMANG - MONITORING & EVALUATION CHAIR.jpeg";
import drreImg from "../assets/TeamImages/6. DRRE Abigail Ayamba.jpeg";
import secretaryImg from "../assets/TeamImages/7. Sky-Margaret Ocloo - Secreatary.jpeg";
import deputySecretaryImg from "../assets/TeamImages/8. Showers Carr Obeng - Deputy Secretary.jpeg";
import treasurerImg from "../assets/TeamImages/9. Idriss Abiodun Mawuli Zuberu DISTRICT TREASURER.jpeg";
import deputyTreasurerImg from "../assets/TeamImages/10. Jamila Musah - Deputy Treasurer.jpeg";
import adminImg from "../assets/TeamImages/11. Kelvin Amoako - DISTRICT ADMIN.jpeg";
import deputyAdminImg from "../assets/TeamImages/12. ZARA DOE - DEPUTY ADMIN.jpg";
import coordinatorImg from "../assets/TeamImages/13. Olivia Quaye - DIST COORDINATOR.jpeg";
import councilPresident from "../assets/TeamImages/30. Kingsford Amoah - Council Of Presidents Chair.jpg";
import protocolsec from "../assets/TeamImages/31. Kwaku Sarpong Debrah District Protocols.jpg";
import photography from "../assets/TeamImages/32. DerrickObeng Brobbey District Photographer.jpg";
import deputyCoordinatorImg from "../assets/TeamImages/14. Courage Edudji Soglo - Deputy Coordinator.jpeg";
import membershipDirImg from "../assets/TeamImages/15. Ohenewaa Damptey- Membership Director.jpg";
import deputyMembershipImg from "../assets/TeamImages/16. Samuel Boateng Danquah- Dep. Membership.jpeg";
import projectsDirImg from "../assets/TeamImages/18. Senoo Senami - Projects Director.jpg";
import deputyProjectsImg from "../assets/TeamImages/19. Clinton Boateng - DEPUTY PROJECTS.jpg";
import professionalDevImg from "../assets/TeamImages/20. Ira Osei Akoto - Professional Development Director.jpeg";
import deputyProfessionalImg from "../assets/TeamImages/21. Kumiwaa Boahene - Deputy Professional Director.jpg";
import publicImageDirImg from "../assets/TeamImages/22. Ebenaita Norbu - Public Image DIRECTOR.jpg";
import deputyPublicImageImg from "../assets/TeamImages/23. Kekeli Aryee - DEPUTY Public Image DIRECTOR.jpeg";
import interactDirImg from "../assets/TeamImages/24. Baaba Adu Mensah - Interact Director.jpeg";
import deputyInteractImg from "../assets/TeamImages/25. Sarah Anane - Deputy Interact.jpg";
import intlRelationsImg from "../assets/TeamImages/26. Ebenezer kermah - INTERNATIONAL RELATIONS.jpg";
import deputyIntlRelationsImg from "../assets/TeamImages/27. Elsie Atobra DEPUTY INTERNATIONAL RELATIONS-2.jpg";
import rotaryFoundationImg from "../assets/TeamImages/27C Vanessa Dela Anyadi-Odzawo - Rotary Foundation Chair.png";
import deputyRotaryFoundationImg from "../assets/TeamImages/27D Hillary Philipa Nyarko - Deputy Rotary Foundation Chair.jpg.jpg";
// Assistant District Rotaract Representative (ADRRs)
import adrrAImg from "../assets/TeamImages/33. Elizabeth Ahiagba ADRR CLUSTER A.jpeg";
import adrrBImg from "../assets/TeamImages/29. Victory-Emmanuel Quarshie- ADRR CLUSTER B.jpg";
import adrrCImg from "../assets/TeamImages/30. Lawrence Wilson - ADRR CLUSTER C.jpeg";
import adrrDImg from "../assets/TeamImages/31. Mavis Addo - ADRR CLUSTER D.jpg";
import adrrEImg from "../assets/TeamImages/32. Augustus Darko Akuffo  ADRR CLUSTER E.jpeg";
import adrrFImg from "../assets/TeamImages/38. Dennis Jackson ADRR Cluster F.jpeg";
import adrrGImg from "../assets/TeamImages/34. Emmanuel Agyei  ADRR CLUSTER G.jpeg";
import adrrHImg from "../assets/TeamImages/35. Mavis Ezuh - ADRR CLUSTER H.jpeg";
import adrrIImg from "../assets/TeamImages/36. Lordina Asantewaa - ADRR CLUSTER I.jpeg";
import adrrJImg from "../assets/TeamImages/37. Raymond Nwiiri - ADRR CLUSTER J.jpg";
import heroimage1 from "../assets/heroImages/HANDOVER-100.jpg"
import heroimage2 from "../assets/heroImages/HANDOVER-64.jpg"
import heroimage3 from "../assets/heroImages/HANDOVER-80.jpg"
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
    name: "Rtr. Kingdom Kededor Avisseh",
    role: "District Rotaract Representative (DRR)",
    initials: "DRR",
    image: drrPortrait,
  },
  {
    name: "Rtr. Olive Naa Asheley Addo",
    role: "Immediate Past DRR (IPDRR)",
    initials: "IPDRR",
    image: ipdrrImg,
  },
  {
    name: "Rtr. Abigail Ayamba",
    role: "DRR Elect (DRRE)",
    initials: "DRRE",
    image: drreImg,
  },
  {
    name: "Rtr. Boakye Agyeman",
    role: "Monitoring & Evaluation Chair",
    initials: "M&E",
    image: meChairImg,
  },
  {
    name: "Rtr. Emmanuel Boakye-Dankwah",
    role: "Vice District Rotaract Representative (VDRR)",
    initials: "VDRR",
    image: vdrr1Img,
  },
  {
    name: "Rtr. Sedinam Laura Edzia",
    role: "Vice District Rotaract Representative (VDRR)",
    initials: "VDRR",
    image: vdrr2Img,
  },
  
  {
    name: "Rtr. Sky-Margaret Afua Ocloo",
    role: "District Secretary",
    initials: "DS",
    image: secretaryImg,
  },
  {
    name: "Rtr. Showers Awurasi Obeng",
    role: "Deputy District Secretary",
    initials: "DDS",
    image: deputySecretaryImg,
  },
  {
    name: "Rtr. Idriss Abiodun Mawuli Zuberu",
    role: "District Treasurer",
    initials: "DT",
    image: treasurerImg,
  },
  {
    name: "Rtr. Jamilatu Musah Fongo",
    role: "Deputy District Treasurer",
    initials: "DDT",
    image: deputyTreasurerImg,
  },
  {
    name: "Rtr. Kelvin Nana Yaw Aning Amoako",
    role: "District Administrator",
    initials: "DA",
    image: adminImg,
  },
  {
    name: "Rtr. Princess Zara Doe",
    role: "Deputy District Administrator",
    initials: "DDA",
    image: deputyAdminImg,
  },
  {
    name: "Rtr. Olivia Naa Odey Quaye",
    role: "District Coordinator",
    initials: "DC",
    image: coordinatorImg,
  },
  {
    name: "Rtr. Courage Edudji Soglo",
    role: "Deputy District Coordinator",
    initials: "DDC",
    image: deputyCoordinatorImg,
  },
  { name: "Kingsford Amoah",
    role: "Council of President Chair",
    initials: "CoP",
    image: councilPresident,
  },
  { name: "Kwaku Sarpong Debrah",
    role: "Dsitrict Protocols and Security Chair",
    initials: "DPS",
    image: protocolsec,
  },
  { name: "Derrick Obeng Brobbey",
    role: "District Photography",
    initials: "DP",
    image: photography,
  },

];

const chairs = [
  
  
  {
    name: "Rtr. Mercy Ohenewaa Damptey",
    role: "Membership Director",
    initials: "MD",
    image: membershipDirImg,
  },
  {
    name: "Rtr. Samuel Boateng-Danquah",
    role: "Deputy Membership Director",
    initials: "DMD",
    image: deputyMembershipImg,
  },
  {
    name: "Rtr. Senoo Senami Kwasi",
    role: "Projects Director",
    initials: "PDir",
    image: projectsDirImg,
  },
  {
    name: "Rtr. Clinton Boateng",
    role: "Deputy Projects Director",
    initials: "DPDir",
    image: deputyProjectsImg,
  },
  {
    name: "Rtr. Ira Osei Akoto",
    role: "Professional Development Director",
    initials: "PDD",
    image: professionalDevImg,
  },
  {
    name: "Rtr. Afua Kumiwaa Boahene",
    role: "Deputy Professional Development Director",
    initials: "DPDD",
    image: deputyProfessionalImg,
  },
  {
    name: "Rtr. Ebenaita Norbu",
    role: "Public Image Director",
    initials: "PID",
    image: publicImageDirImg,
  },
  {
    name: "Rtr. Theodora Kekeli Aryee",
    role: "Deputy Public Image Director",
    initials: "DPID",
    image: deputyPublicImageImg,
  },
  {
    name: "Rtr. Esther Baaba Adu Mensah",
    role: "Interact Director",
    initials: "ID",
    image: interactDirImg,
  },
  {
    name: "Rtr. Sarah Akua Kyerewaa Anane",
    role: "Deputy Interact Director",
    initials: "DID",
    image: deputyInteractImg,
  },
  {
    name: "Rtr. Ebenezer Kermah",
    role: "International Relations Director",
    initials: "IRD",
    image: intlRelationsImg,
  },
  {
    name: "Rtr. Elsie Prospera Atobra",
    role: "Deputy International Relations Director",
    initials: "DIRD",
    image: deputyIntlRelationsImg,
  },
  {
    name: "Rtr. Vanessa Dela Anyadi-Odzawo",
    role: "Rotary Foundation Chair",
    initials: "RFC",
    image: rotaryFoundationImg,
  },
  {
    name: "Rtr. Hillary Philipa Nyarko",
    role: "Deputy Rotary Foundation Chair",
    initials: "DRFC",
    image: deputyRotaryFoundationImg,
  },
];

const clusterCoordinators = [
  // Note: Cluster A image not available in the provided folder
  { name: "Rtr. Elizabeth Ahiagba", role: "ADRR Cluster A ", initials: "A", image: adrrAImg },
  { name: "Rtr. Victory-Emmanuel Quarshie", role: "ADRR Cluster B ", initials: "B", image: adrrBImg },
  { name: "Rtr. Lawrence Wilson", role: "ADRR Cluster C ", initials: "C", image: adrrCImg },
  { name: "Rtr. Mavis Addo", role: "ADRR Cluster D ", initials: "D", image: adrrDImg },
  { name: "Rtr. Augustus Darko Akuffo", role: "ADRR Cluster E ", initials: "E", image: adrrEImg },
  { name: "Rtr. Dennis Jackson", role: "ADRR Cluster F ", initials: "F", image: adrrFImg },
  { name: "Rtr. Emmanuel Agyei", role: "ADRR Cluster G ", initials: "G", image: adrrGImg },
  { name: "Rtr. Mavis Ezuh", role: "ADRR Cluster H ", initials: "H", image: adrrHImg },
  // Cluster I and J - images not available in the provided folder
  { name: "Rtr. Lordina Asantewaa", role: "ADRR Cluster I ", initials: "I", image: adrrIImg },
  { name: "Rtr.    Nwiiri", role: "ADRR Cluster J ", initials: "J", image: adrrJImg },
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
      subtitle="The dedicated leaders creating lasting imapact across District 9104" 
      image={[
        heroimage1,
        heroimage2,
        heroimage3
      ]}
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

        {/* Assistant District Rotaract Representative */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle 
            title="Assistant District Rotaract Representative" 
            subtitle="Cluster Coordinators ensuring club support and development" 
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