import PageHero from "../components/PageHero";
import { Download } from "lucide-react";
import heroAboutImg from "../assets/hero-about.jpg";
import dlacImg from "../assets/dlac-event.jpg";
import healthImg from "../assets/health-outreach.jpg";
import careerImg from "../assets/career-expo.jpg";
import greenImg from "../assets/green-ghana.jpg";
import trainingImg from "../assets/training.jpg";
import bloodImg from "../assets/blood-donation.jpg";

const flyers = [
  { title: "DLAC 2025 Conference Flyer", date: "Jan 2025", image: dlacImg, download: "/flyers/dlac-2025.pdf" },
  { title: "Health Outreach Flyer — Tamale", date: "Dec 2024", image: healthImg, download: "/flyers/health-outreach.pdf" },
  { title: "Career Expo 2024 Flyer", date: "Oct 2024", image: careerImg, download: "/flyers/career-expo-2024.pdf" },
  { title: "Green Ghana Initiative Flyer", date: "Sep 2024", image: greenImg, download: "/flyers/green-ghana-initiative.pdf" },
  { title: "Club Officers Training Flyer", date: "Aug 2024", image: trainingImg, download: "/flyers/club-officers-training.pdf" },
  { title: "Blood Donation Drive Flyer", date: "Jul 2024", image: bloodImg, download: "/flyers/blood-donation-drive.pdf" },
];

const FlyersPage = () => (
  <div>
    <PageHero breadcrumb="Media" title="Event Flyers" subtitle="Browse, preview, and download flyers for district events" image={heroAboutImg} />
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {flyers.map((f) => (
            <div key={f.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative h-64 overflow-hidden">
                <img src={f.image} alt={f.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent px-4 py-3">
                  <p className="text-sm font-semibold text-white">{f.title}</p>
                  <p className="text-xs text-slate-200">{f.date}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-slate-600 mb-4">Download the official event flyer to share with your club and community.</p>
                <a
                  href={f.download}
                  download
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark transition"
                >
                  <Download size={16} />
                  Download Flyer
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default FlyersPage;
