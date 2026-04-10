import { useState } from "react";
import PageHero from "../components/PageHero";

const filters = ["All", "DLAC", "Projects", "Fellowship", "Training"];
const items = [
  { label: "DLAC 2024 Opening Ceremony", cat: "DLAC", span: true },
  { label: "Health Outreach in Tamale", cat: "Projects" },
  { label: "Inter-Club Fellowship Night", cat: "Fellowship" },
  { label: "Club Officers Training", cat: "Training" },
  { label: "Green Ghana Tree Planting", cat: "Projects" },
  { label: "DLAC Keynote Speaker Session", cat: "DLAC" },
  { label: "Career Expo 2024", cat: "Training" },
  { label: "Blood Donation Drive — KNUST", cat: "Projects" },
  { label: "District Assembly 2024", cat: "DLAC" },
];

const GalleryPage = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <div>
      <PageHero breadcrumb="Media" title="Gallery" subtitle="Photos from events, projects, and fellowship across the district" />
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
                <div className={`bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center ${i === 0 ? "h-80" : "h-44"}`}>
                  <span className="text-white/60 text-sm font-medium">{item.label}</span>
                </div>
                <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">View Photo</span>
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
