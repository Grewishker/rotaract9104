import PageHero from "../components/PageHero";
import { FaDownload } from "react-icons/fa";
import heroAboutImg from "../assets/hero-about.jpg";

const newsletters = [
  { title: "District Newsletter — Q4 2024", date: "Dec 2024", desc: "Highlights from the quarter including DLAC prep, club achievements, and DRR visits." },
  { title: "District Newsletter — Q3 2024", date: "Sep 2024", desc: "Service projects roundup, membership growth stats, and upcoming events." },
  { title: "District Newsletter — Q2 2024", date: "Jun 2024", desc: "Mid-year review, Green Ghana recap, and professional development highlights." },
];

const DistrictNewslettersPage = () => (
  <div>
    <PageHero breadcrumb="Media → Newsletters" title="District Newsletters" subtitle="Quarterly publications from Rotaract District 9104" image={heroAboutImg} />
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 space-y-4">
        {newsletters.map((n) => (
          <div key={n.title} className="border border-blue-100 rounded-lg p-6 flex items-center gap-4 hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
              <FaDownload className="text-blue-800" size={18} />
            </div>
            <div className="flex-1">
              <h3 className="font-display font-bold text-blue-800">{n.title}</h3>
              <p className="text-gray-500 text-sm">{n.desc}</p>
            </div>
            <span className="text-gray-400 text-sm">{n.date}</span>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default DistrictNewslettersPage;
