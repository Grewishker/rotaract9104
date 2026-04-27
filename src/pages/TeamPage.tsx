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
  <div>
    <PageHero breadcrumb="About" title="District Team" subtitle="The dedicated leaders driving service and growth across District 9104" image={heroAboutImg} />
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle title="District Officers" subtitle="Executive leadership of Rotaract District 9104" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {officers.map((o) => <TeamCard key={o.role} {...o} />)}
        </div>
        <SectionTitle title="Committee Chairs" subtitle="Leading specialized committees across the district" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {chairs.map((c) => <TeamCard key={c.role} {...c} />)}
        </div>
        <SectionTitle title="Cluster Coordinators" subtitle="Regional representatives ensuring club support and development" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clusterCoordinators.map((z) => <TeamCard key={z.role} {...z} />)}
        </div>
      </div>
    </section>
  </div>
);

export default TeamPage;
