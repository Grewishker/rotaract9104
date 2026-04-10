import PageHero from "../components/PageHero";
import BlogCard from "../components/BlogCard";

const visits = [
  { category: "Official Visit", date: "Nov 25, 2024", title: "DRR Visits RAC University of Ghana", excerpt: "The DRR's official visit to RAC UG Legon highlighted membership growth and upcoming service projects.", emoji: "🎓" },
  { category: "Official Visit", date: "Nov 15, 2024", title: "DRR Visits RAC KNUST", excerpt: "An inspiring visit to RAC KNUST with discussions on sustainability initiatives and club strengthening.", emoji: "🏫" },
  { category: "Official Visit", date: "Nov 5, 2024", title: "DRR Visits RAC Accra Metro", excerpt: "The DRR joined RAC Accra Metro for their regular meeting and environmental project review.", emoji: "🏙️" },
];

const DRRVisitsPage = () => (
  <div>
    <PageHero breadcrumb="Media" title="DRR's Official Visits" subtitle="Reports from the District Rotaract Representative's club visits" />
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {visits.map((v) => <BlogCard key={v.title} {...v} />)}
      </div>
    </section>
  </div>
);

export default DRRVisitsPage;
