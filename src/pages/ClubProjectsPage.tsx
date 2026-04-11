import PageHero from "../components/PageHero";
import techImg from "../assets/tech-bootcamp.jpg";
import bloodImg from "../assets/blood-donation.jpg";
import plasticImg from "../assets/plastic-cleanup.jpg";
import heroAboutImg from "../assets/hero-about.jpg";

const clubs = [
  { club: "RAC University of Ghana, Legon", project: "Tech Bootcamp for Youth", desc: "A 3-day coding bootcamp teaching HTML, CSS, and JavaScript to 50 senior high school students in Accra.", image: techImg },
  { club: "RAC KNUST", project: "Blood Donation Drive", desc: "Partnering with the Komfo Anokye Teaching Hospital to collect 200 units of blood for the regional blood bank.", image: bloodImg },
  { club: "RAC Accra Metro", project: "Plastic Clean-Up Campaign", desc: "Organizing monthly beach and community clean-ups, removing over 5 tonnes of plastic waste from Accra's coastline.", image: plasticImg },
];

const ClubProjectsPage = () => (
  <div>
    <PageHero breadcrumb="Projects" title="Club Projects" subtitle="Innovative service projects by individual clubs across the district" image={heroAboutImg} />
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {clubs.map((c) => (
          <div key={c.project} className="border border-blue-100 rounded-lg overflow-hidden hover:-translate-y-1 hover:shadow-lg transition">
            <div className="h-44">
              <img src={c.image} alt={c.project} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="p-5">
              <span className="bg-blue-50 text-blue-800 text-xs font-medium px-2 py-0.5 rounded mb-2 inline-block">{c.club}</span>
              <h3 className="font-display font-bold text-blue-800 text-lg mb-2">{c.project}</h3>
              <p className="text-gray-500 text-sm">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default ClubProjectsPage;
