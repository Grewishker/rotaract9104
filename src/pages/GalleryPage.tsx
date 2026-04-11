import { useState } from "react";
import PageHero from "../components/PageHero";
import heroAboutImg from "../assets/hero-about.jpg";
import dlacImg from "../assets/dlac-event.jpg";
import healthImg from "../assets/health-outreach.jpg";
import fellowshipImg from "../assets/fellowship.jpg";
import trainingImg from "../assets/training.jpg";
import greenImg from "../assets/green-ghana.jpg";
import heroSlide1 from "../assets/hero-slide-1.jpg";
import careerImg from "../assets/career-expo.jpg";
import bloodImg from "../assets/blood-donation.jpg";
import heroSlide3 from "../assets/hero-slide-3.jpg";

const filters = ["All", "DLAC", "Projects", "Fellowship", "Training"];
const items = [
  { label: "DLAC 2024 Opening Ceremony", cat: "DLAC", image: dlacImg },
  { label: "Health Outreach in Tamale", cat: "Projects", image: healthImg },
  { label: "Inter-Club Fellowship Night", cat: "Fellowship", image: fellowshipImg },
  { label: "Club Officers Training", cat: "Training", image: trainingImg },
  { label: "Green Ghana Tree Planting", cat: "Projects", image: greenImg },
  { label: "DLAC Keynote Speaker Session", cat: "DLAC", image: heroSlide1 },
  { label: "Career Expo 2024", cat: "Training", image: careerImg },
  { label: "Blood Donation Drive — KNUST", cat: "Projects", image: bloodImg },
  { label: "District Assembly 2024", cat: "DLAC", image: heroSlide3 },
];

const GalleryPage = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <div>
      <PageHero breadcrumb="Media" title="Gallery" subtitle="Photos from events, projects, and fellowship across the district" image={heroAboutImg} />
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-2 mb-8 flex-wrap justify-center">
            {filters.map((f) => (
              <button key={f} onClick={() => setActive(f)} className={`px-4 py-2 rounded-full text-sm font-medium transition ${active === f ? "bg-blue-800 text-white" : "bg-blue-50 text-blue-800 hover:bg-blue-100"}`}>
                {f}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filtered.map((item, i) => (
              <div key={i} className={`relative group rounded-lg overflow-hidden ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
                <img src={item.image} alt={item.label} className={`w-full object-cover ${i === 0 ? "h-80" : "h-44"}`} loading="lazy" />
                <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center">
                  <span className="text-white font-semibold text-sm">{item.label}</span>
                  <span className="text-yellow-400 text-xs mt-1">View Photo</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
