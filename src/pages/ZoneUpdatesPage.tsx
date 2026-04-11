import PageHero from "../components/PageHero";
import BlogCard from "../components/BlogCard";
import heroAboutImg from "../assets/hero-about.jpg";
import heroSlide1 from "../assets/hero-slide-1.jpg";
import aboutRotaractImg from "../assets/about-rotaract.jpg";
import careerImg from "../assets/career-expo.jpg";

const updates = [
  { category: "Zone Update", date: "Dec 2024", title: "Zone 22 & 22A Leadership Meeting", excerpt: "Highlights from the quarterly zone leadership meeting with updates on membership and grants.", image: heroSlide1 },
  { category: "Zone Update", date: "Nov 2024", title: "Zone Rotaract Conference Recap", excerpt: "Key takeaways from the Zone 22 Rotaract Conference held in Lagos, Nigeria.", image: aboutRotaractImg },
  { category: "Zone Update", date: "Oct 2024", title: "Zone Coordinator's Message", excerpt: "Quarterly message from the Zone Rotaract Coordinator on progress and upcoming initiatives.", image: careerImg },
];

const ZoneUpdatesPage = () => (
  <div>
    <PageHero breadcrumb="Media → Newsletters" title="Zone 22 & 22A Updates" subtitle="News and updates from our Rotary zones in West Africa" image={heroAboutImg} />
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {updates.map((u) => <BlogCard key={u.title} {...u} />)}
      </div>
    </section>
  </div>
);

export default ZoneUpdatesPage;
