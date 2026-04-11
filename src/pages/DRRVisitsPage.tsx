import PageHero from "../components/PageHero";
import BlogCard from "../components/BlogCard";
import heroAboutImg from "../assets/hero-about.jpg";
import heroSlide1 from "../assets/hero-slide-1.jpg";
import trainingImg from "../assets/training.jpg";
import aboutRotaractImg from "../assets/about-rotaract.jpg";

const visits = [
  { category: "Official Visit", date: "Nov 25, 2024", title: "DRR Visits RAC University of Ghana", excerpt: "The DRR's official visit to RAC UG Legon highlighted membership growth and upcoming service projects.", image: heroSlide1 },
  { category: "Official Visit", date: "Nov 15, 2024", title: "DRR Visits RAC KNUST", excerpt: "An inspiring visit to RAC KNUST with discussions on sustainability initiatives and club strengthening.", image: trainingImg },
  { category: "Official Visit", date: "Nov 5, 2024", title: "DRR Visits RAC Accra Metro", excerpt: "The DRR joined RAC Accra Metro for their regular meeting and environmental project review.", image: aboutRotaractImg },
];

const DRRVisitsPage = () => (
  <div>
    <PageHero breadcrumb="Media" title="DRR's Official Visits" subtitle="Reports from the District Rotaract Representative's club visits" image={heroAboutImg} />
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {visits.map((v) => <BlogCard key={v.title} {...v} />)}
      </div>
    </section>
  </div>
);

export default DRRVisitsPage;
