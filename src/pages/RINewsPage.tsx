import PageHero from "../components/PageHero";
import BlogCard from "../components/BlogCard";

const news = [
  { category: "RI News", date: "Dec 2024", title: "RI Board Decisions — December 2024", excerpt: "Key decisions from the RI Board of Directors affecting Rotaract worldwide.", emoji: "📋" },
  { category: "RI News", date: "Nov 2024", title: "Rotary Foundation Grants Update", excerpt: "New grant opportunities and updated guidelines for Rotaract district and global grants.", emoji: "💰" },
  { category: "RI News", date: "Oct 2024", title: "World Polio Day 2024 Report", excerpt: "Rotary's continued fight to eradicate polio — updates and milestones from 2024.", emoji: "🦠" },
];

const RINewsPage = () => (
  <div>
    <PageHero breadcrumb="Media → Newsletters" title="Rotary International News" subtitle="Latest news and updates from Rotary International" />
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {news.map((n) => <BlogCard key={n.title} {...n} />)}
      </div>
    </section>
  </div>
);

export default RINewsPage;
