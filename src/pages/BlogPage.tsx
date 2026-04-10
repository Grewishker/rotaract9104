import PageHero from "../components/PageHero";
import BlogCard from "../components/BlogCard";

const posts = [
  { category: "Service", date: "Dec 15, 2024", title: "District Health Outreach Reaches 500+ Beneficiaries", excerpt: "The annual Free Health Outreach in Tamale provided free screenings and medication to over 500 community members.", emoji: "🏥" },
  { category: "Leadership", date: "Dec 1, 2024", title: "Club Officers Training Empowers 200 Leaders", excerpt: "Newly elected club officers gathered for an intensive leadership training session ahead of the Rotary year.", emoji: "🎓" },
  { category: "Environment", date: "Nov 20, 2024", title: "Green Ghana: 10,000 Trees and Counting", excerpt: "Rotaract clubs across Ghana planted over 10,000 trees in the national Green Ghana initiative.", emoji: "🌳" },
  { category: "Fellowship", date: "Nov 10, 2024", title: "Inter-Club Fellowship Night in Accra", excerpt: "Rotaractors from 12 clubs gathered for a night of networking, fun, and fellowship in Accra.", emoji: "🤝" },
  { category: "Career", date: "Oct 28, 2024", title: "Career Expo 2024: Connecting Talent with Opportunity", excerpt: "Over 300 Rotaractors attended the annual career expo featuring 25+ employers and workshops.", emoji: "💼" },
  { category: "Rotary", date: "Oct 15, 2024", title: "RI President's Message: The Magic of Rotary", excerpt: "RI President Stephanie Urchick's inspiring message on harnessing the magic within each of us.", emoji: "✨" },
];

const BlogPage = () => (
  <div>
    <PageHero breadcrumb="Media" title="Blog" subtitle="Stories, updates, and reflections from across District 9104" />
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {posts.map((p) => <BlogCard key={p.title} {...p} />)}
      </div>
    </section>
  </div>
);

export default BlogPage;
