import PageHero from "../components/PageHero";
import BlogCard from "../components/BlogCard";
import heroAboutImg from "../assets/hero-about.jpg";
import healthImg from "../assets/fighting-disease.jpg";
import trainingImg from "../assets/training.jpg";
import greenImg from "../assets/green-ghana2.jpg";
import fellowshipImg from "../assets/fellowship.jpg";
import careerImg from "../assets/career-expo.jpg";
import heroSlide2 from "../assets/hero-slide-2.jpg";
import { THEME } from "@/lib/theme";

const posts = [
  { 
    id: "district-health-outreach-2024",
    category: "Service", 
    date: "Dec 15, 2024", 
    title: "District Health Outreach Reaches 500+ Beneficiaries", 
    excerpt: "The annual Free Health Outreach in Tamale provided free screenings and medication to over 500 community members.", 
    image: healthImg 
  },
  { 
    id: "club-officers-training-2024",
    category: "Leadership", 
    date: "Dec 1, 2024", 
    title: "Club Officers Training Empowers 200 Leaders", 
    excerpt: "Newly elected club officers gathered for an intensive leadership training session ahead of the Rotary year.", 
    image: trainingImg 
  },
  { 
    id: "green-ghana-2024",
    category: "Environment", 
    date: "Nov 20, 2024", 
    title: "Green Ghana: 10,000 Trees and Counting", 
    excerpt: "Rotaract clubs across Ghana planted over 10,000 trees in the national Green Ghana initiative.", 
    image: greenImg 
  },
  { 
    id: "inter-club-fellowship-2024",
    category: "Fellowship", 
    date: "Nov 10, 2024", 
    title: "Inter-Club Fellowship Night in Accra", 
    excerpt: "Rotaractors from 12 clubs gathered for a night of networking, fun, and fellowship in Accra.", 
    image: fellowshipImg 
  },
  { 
    id: "career-expo-2024",
    category: "Career", 
    date: "Oct 28, 2024", 
    title: "Career Expo 2024: Connecting Talent with Opportunity", 
    excerpt: "Over 300 Rotaractors attended the annual career expo featuring 25+ employers and workshops.", 
    image: careerImg 
  },
  { 
    id: "ri-president-message-2024",
    category: "Rotary", 
    date: "Oct 15, 2024", 
    title: `RI President's Message: ${THEME.name}`, 
    excerpt: "RI President Stephanie Urchick's inspiring message on harnessing the magic within each of us.", 
    image: heroSlide2 
  },
];

const BlogPage = () => (
  <div>
    <PageHero breadcrumb="Media" title="Blog" subtitle="Stories, updates, and reflections from across District 9104" />
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {posts.map((p) => <BlogCard key={p.id} {...p} />)}
      </div>
    </section>
  </div>
);

export default BlogPage;