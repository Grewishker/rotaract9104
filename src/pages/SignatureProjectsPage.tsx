import PageHero from "../components/PageHero";

const projects = [
  { title: "Free Health Outreach", desc: "District-wide health screening and medical support for underserved communities across all 10 regions of Ghana.", tags: ["Health", "Community"], emoji: "🏥" },
  { title: "Rotaract Reads", desc: "Literacy campaign distributing books and reading resources to schools, with mentorship and reading sessions.", tags: ["Education", "Literacy"], emoji: "📚" },
  { title: "Green Ghana Initiative", desc: "Environmental sustainability project planting 10,000+ trees annually across Ghana in partnership with national agencies.", tags: ["Environment", "Sustainability"], emoji: "🌳" },
  { title: "Water & Sanitation", desc: "Providing clean water infrastructure and sanitation facilities to rural communities in Northern and Volta Regions.", tags: ["WASH", "Infrastructure"], emoji: "💧" },
];

const SignatureProjectsPage = () => (
  <div>
    <PageHero breadcrumb="Projects" title="Signature District Projects" subtitle="Flagship initiatives driving lasting impact across Ghana" />
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div key={p.title} className="border border-blue-100 rounded-lg overflow-hidden hover:-translate-y-1 hover:shadow-lg transition">
            <div className="bg-gradient-to-r from-blue-800 to-blue-600 p-8 flex items-center justify-between">
              <h3 className="font-display font-bold text-white text-2xl">{p.title}</h3>
              <span className="text-4xl">{p.emoji}</span>
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
