import PageHero from "../components/PageHero";
import techImg from "../assets/growing-economies.png";
import bloodImg from "../assets/blood-donation.jpg";
import environmentImg from "../assets/project-environment.jpg";
import literacyImg from "../assets/rotaract-4.jpg";
import waterImg from "../assets/clean-water.jpg";
import herovideo from "../assets/videos/Rtrvideo1.mp4"

const clubs = [
  { club: "RAC Zongo Community", project: "Zongo Boot Project", desc: "Delivering a 2-week digital skills bootcamp in the Zongo community to empower 50 young people with coding and entrepreneurship training.", image: techImg },
  { club: "RAC KNUST", project: "Blood Donation Drive", desc: "Partnering with the Komfo Anokye Teaching Hospital to collect 200 units of blood for the regional blood bank.", image: bloodImg },
  { club: "RAC Accra Metro", project: "Project Environment", desc: "Leading monthly clean-ups, plastic waste recycling, and tree planting efforts to protect Accra's neighborhoods and waterways.", image: environmentImg },
  { club: "RAC Kumasi Central", project: "Literacy & Leadership Hub", desc: "Renovating community reading corners and hosting weekly leadership workshops for secondary school students.", image: literacyImg },
  { club: "RAC Tamale City", project: "Clean Water & Sanitation", desc: "Installing community water stations and hygiene education programs in Northern Ghana.", image: waterImg },
];

const ClubProjectsPage = () => (
  <div>
    <PageHero 
    breadcrumb="Projects" 
    title="Club Projects" 
    subtitle="Innovative service projects by individual clubs across the district" 
    video={herovideo}
        mediaType="video"
         showOverlay={true}
         />
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {clubs.map((c) => (
          <div key={c.project} className="border border-secondary/10 rounded-lg overflow-hidden hover:-translate-y-1 hover:shadow-lg transition">
            <div className="h-44">
              <img src={c.image} alt={c.project} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="p-5">
              <span className="bg-secondary/5 text-primary text-xs font-medium px-2 py-0.5 rounded mb-2 inline-block">{c.club}</span>
              <h3 className="font-display font-bold text-primary text-lg mb-2">{c.project}</h3>
              <p className="text-gray-500 text-sm">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default ClubProjectsPage;
