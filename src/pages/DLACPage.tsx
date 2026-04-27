import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import HighlightBox from "../components/HighlightBox";
import { CalendarDays, MapPin, Users, Target } from "lucide-react";
import dlacImg from "../assets/dlac-event.jpg";

const DLACPage = () => (
  <div>
    <PageHero breadcrumb="Events" title="DLAC 2027" subtitle="District Leadership and Conference — The next premier Rotaract event in Ghana" image={dlacImg} />
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <img src={dlacImg} alt="DLAC Conference" className="w-full h-64 object-cover rounded-lg mb-10" loading="lazy" />
        <div className="grid md:grid-cols-[1fr_380px] gap-10">
          <div className="prose max-w-none">
            <h2 className="font-display text-primary text-2xl font-bold mb-4">About DLAC 2027</h2>
            <p className="text-gray-700 mb-4">After the successful DLAC 2025 and DLAC 2026 conferences, Rotaract District 9104 is preparing for its next gathering in 2027. DLAC is the flagship Rotaract event in Ghana, uniting members for leadership training, service planning, and fellowship.</p>
            <h3 className="font-display text-primary text-xl font-bold mt-8 mb-3">What to Expect</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Inspiring keynote talks from district and Rotary leaders</li>
              <li>Practical workshops on service, membership growth, and club leadership</li>
              <li>Recognition for outstanding club projects and district champions</li>
              <li>Networking across all clusters of District 9104</li>
              <li>Hands-on community service and sustainability activities</li>
              <li>Fellowship, cultural performances, and evening socials</li>
            </ul>
            <h3 className="font-display text-primary text-xl font-bold mt-8 mb-3">Plan to Attend</h3>
            <p className="text-gray-700 mb-4">Registration details for DLAC 2027 will be announced by the district service team soon. Keep checking back for the official schedule, venue information, and how your club can participate.</p>
            <Link to="/join" className="inline-block bg-accent600 text-primary-dark font-semibold px-6 py-3 rounded hover:bg-secondary transition">Stay Updated</Link>
          </div>
          <div className="space-y-6">
            <HighlightBox title="What happened in 2025 & 2026">
              <ul className="space-y-2">
                <li>• DLAC 2025 brought together 500+ Rotaractors for leadership and service planning.</li>
                <li>• DLAC 2026 deepened club collaboration with shared project showcases.</li>
                <li>• Both conferences accelerated membership and strengthened district fellowship.</li>
              </ul>
            </HighlightBox>
            <HighlightBox title="DLAC 2027 Preview">
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-white">
                  <CalendarDays className="mt-1 h-4 w-4 text-white-800" />
                  <span>Target window: June 2027 (exact dates coming soon)</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <MapPin className="mt-1 h-4 w-4 text-white-800" />
                  <span>Location: Greater Accra region</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <Users className="mt-1 h-4 w-4 text-white-800" />
                  <span>Expected attendees: 600+ Rotaractors</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <Target className="mt-1 h-4 w-4 text-white-800" />
                  <span>Theme: Leading with Service</span>
                </li>
              </ul>
            </HighlightBox>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default DLACPage;
