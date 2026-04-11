import PageHero from "../components/PageHero";
import TeamCard from "../components/TeamCard";
import SectionTitle from "../components/SectionTitle";
import heroAboutImg from "../assets/hero-about.jpg";

const officers = [
  { name: "Rtr. [DRR Name]", role: "District Rotaract Representative", initials: "DRR" },
  { name: "Rtr. [Name]", role: "Vice DRR", initials: "VD" },
  { name: "Rtr. [Name]", role: "District Secretary", initials: "DS" },
  { name: "Rtr. [Name]", role: "District Treasurer", initials: "DT" },
];

const chairs = [
  { name: "Rtr. [Name]", role: "Service Projects Chair", initials: "SP" },
  { name: "Rtr. [Name]", role: "Professional Dev Chair", initials: "PD" },
  { name: "Rtr. [Name]", role: "Public Relations Chair", initials: "PR" },
  { name: "Rtr. [Name]", role: "Membership Chair", initials: "MC" },
];

const zoneCoordinators = [
  { name: "Rtr. [Name]", role: "Greater Accra Zone", initials: "GA" },
  { name: "Rtr. [Name]", role: "Ashanti Zone", initials: "AS" },
  { name: "Rtr. [Name]", role: "Western Zone", initials: "WR" },
  { name: "Rtr. [Name]", role: "Northern Zone", initials: "NR" },
  { name: "Rtr. [Name]", role: "Eastern Zone", initials: "ER" },
  { name: "Rtr. [Name]", role: "Central Zone", initials: "CR" },
  { name: "Rtr. [Name]", role: "Volta Zone", initials: "VR" },
  { name: "Rtr. [Name]", role: "Bono Zone", initials: "BR" },
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
        <SectionTitle title="Zone Coordinators" subtitle="Regional representatives ensuring club support and development" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {zoneCoordinators.map((z) => <TeamCard key={z.role} {...z} />)}
        </div>
      </div>
    </section>
  </div>
);

export default TeamPage;
