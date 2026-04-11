import PageHero from "../components/PageHero";
import { FaPlay } from "react-icons/fa";
import heroAboutImg from "../assets/hero-about.jpg";
import dlacImg from "../assets/dlac-event.jpg";
import heroSlide1 from "../assets/hero-slide-1.jpg";
import greenImg from "../assets/green-ghana.jpg";
import literacyImg from "../assets/literacy-campaign.jpg";
import healthImg from "../assets/health-outreach.jpg";
import heroSlide2 from "../assets/hero-slide-2.jpg";

const videos = [
  { title: "DLAC 2024 Highlights", desc: "Relive the best moments from the District Leadership and Conference 2024.", image: dlacImg },
  { title: "DRR Installation Ceremony", desc: "Watch the official installation of the 2024–2025 District Rotaract Representative.", image: heroSlide1 },
  { title: "Green Ghana Project Documentary", desc: "A short documentary on the district's tree planting initiative.", image: greenImg },
  { title: "Rotaract Reads: Impact Story", desc: "See how the literacy campaign is changing lives across Ghana.", image: literacyImg },
  { title: "Health Outreach in Tamale", desc: "Behind-the-scenes footage from the annual health outreach.", image: healthImg },
  { title: "The Magic of Rotary — District Edition", desc: "Our district's interpretation of the 2024–2025 RI theme.", image: heroSlide2 },
];

const VideosPage = () => (
  <div>
    <PageHero breadcrumb="Media" title="Videos" subtitle="Watch stories of service, leadership, and fellowship from District 9104" image={heroAboutImg} />
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {videos.map((v) => (
          <div key={v.title} className="border border-blue-100 rounded-lg overflow-hidden hover:-translate-y-1 hover:shadow-lg transition">
            <div className="h-44 relative">
              <img src={v.image} alt={v.title} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/50">
                  <FaPlay className="text-white ml-1" size={20} />
                </div>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-display font-bold text-blue-800 mb-1">{v.title}</h3>
              <p className="text-gray-500 text-sm">{v.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default VideosPage;
