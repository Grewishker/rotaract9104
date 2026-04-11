import PageHero from "../components/PageHero";
import BlogCard from "../components/BlogCard";
import heroAboutImg from "../assets/hero-about.jpg";
import heroSlide2 from "../assets/hero-slide-2.jpg";
import dlacImg from "../assets/dlac-event.jpg";
import heroSlide3 from "../assets/hero-slide-3.jpg";

const updates = [
  { category: "RI Update", date: "Dec 2024", title: "RI President's December Message", excerpt: "Stephanie Urchick shares her vision for the second half of the Rotary year.", image: heroSlide2 },
  { category: "RI Update", date: "Nov 2024", title: "Rotary Foundation Month Highlights", excerpt: "Celebrating the impact of The Rotary Foundation and its role in global service.", image: dlacImg },
  { category: "RI Update", date: "Oct 2024", title: "2025 RI Convention Preview", excerpt: "What to expect at the 2025 Rotary International Convention in Calgary, Canada.", image: heroSlide3 },
];

const RIUpdatesPage = () => (
  <div>
    <PageHero breadcrumb="Media" title="RI Special Updates" subtitle="Special announcements and updates from Rotary International" image={heroAboutImg} />
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {updates.map((u) => <BlogCard key={u.title} {...u} />)}
      </div>
    </section>
  </div>
);

export default RIUpdatesPage;
