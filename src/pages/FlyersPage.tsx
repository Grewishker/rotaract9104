import PageHero from "../components/PageHero";
import { FaDownload } from "react-icons/fa";

const flyers = [
  { title: "DLAC 2025 Conference Flyer", date: "Jan 2025" },
  { title: "Health Outreach Flyer — Tamale", date: "Dec 2024" },
  { title: "Career Expo 2024 Flyer", date: "Oct 2024" },
  { title: "Green Ghana Initiative Flyer", date: "Sep 2024" },
  { title: "Club Officers Training Flyer", date: "Aug 2024" },
  { title: "Blood Donation Drive Flyer", date: "Jul 2024" },
];

const FlyersPage = () => (
  <div>
    <PageHero breadcrumb="Media" title="Event Flyers" subtitle="Download and share flyers for district events and projects" />
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {flyers.map((f) => (
          <div key={f.title} className="border border-blue-100 rounded-lg p-6 text-center hover:-translate-y-1 hover:shadow-lg transition">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaDownload className="text-blue-800" size={24} />
            </div>
            <h3 className="font-display font-bold text-blue-800 mb-1">{f.title}</h3>
            <p className="text-gray-500 text-sm mb-3">{f.date}</p>
            <button className="text-yellow-600 font-semibold text-sm hover:underline">Download PDF →</button>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default FlyersPage;
