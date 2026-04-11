import PageHero from "../components/PageHero";
import healthImg from "../assets/health-outreach.jpg";
import literacyImg from "../assets/literacy-campaign.jpg";
import greenImg from "../assets/green-ghana.jpg";
import waterImg from "../assets/water-sanitation.jpg";
import heroAboutImg from "../assets/hero-about.jpg";

const projects = [
  { title: "Free Health Outreach", desc: "District-wide health screening and medical support for underserved communities across all 10 regions of Ghana.", tags: ["Health", "Community"], image: healthImg },
  { title: "Rotaract Reads", desc: "Literacy campaign distributing books and reading resources to schools, with mentorship and reading sessions.", tags: ["Education", "Literacy"], image: literacyImg },
  { title: "Green Ghana Initiative", desc: "Environmental sustainability project planting 10,000+ trees annually across Ghana in partnership with national agencies.", tags: ["Environment", "Sustainability"], image: greenImg },
  { title: "Water & Sanitation", desc: "Providing clean water infrastructure and sanitation facilities to rural communities in Northern and Volta Regions.", tags: ["WASH", "Infrastructure"], image: waterImg },
];

const SignatureProjectsPage = () => (
  <div>
    <PageHero breadcrumb="Projects" title="Signature District Projects" subtitle="Flagship initiatives driving lasting impact across Ghana" image={heroAboutImg} />
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div key={p.title} className="border border-blue-100 rounded-lg overflow-hidden hover:-translate-y-1 hover:shadow-lg transition">
            <div className="h-48 relative">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end p-6">
                <h3 className="font-display font-bold text-white text-2xl">{p.title}</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">{p.desc}</p>
              <div className="flex gap-2 flex-wrap">
                {p.tags.map((t) => (
                  <span key={t} className="bg-yellow-50 text-yellow-700 text-xs font-medium px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default SignatureProjectsPage;
