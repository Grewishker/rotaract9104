import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import HighlightBox from "../components/HighlightBox";
import dlacImg from "../assets/dlac-event.jpg";

const DLACPage = () => (
  <div>
    <PageHero breadcrumb="Events" title="DLAC 2025" subtitle="District Leadership and Conference — The Premier Rotaract Event in Ghana" image={dlacImg} />
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <img src={dlacImg} alt="DLAC Conference" className="w-full h-64 object-cover rounded-lg mb-10" loading="lazy" />
        <div className="grid md:grid-cols-[1fr_380px] gap-10">
          <div className="prose max-w-none">
            <h2 className="font-display text-blue-800 text-2xl font-bold mb-4">About DLAC</h2>
            <p className="text-gray-700 mb-4">The District Leadership and Conference (DLAC) is the annual gathering of all Rotaract clubs in District 9104. It is the most anticipated event on the Rotaract calendar, bringing together over 500 Rotaractors from across Ghana for three days of learning, service, and fellowship.</p>
            <h3 className="font-display text-blue-800 text-xl font-bold mt-8 mb-3">What to Expect</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Inspiring keynote addresses from global Rotary leaders</li>
              <li>Breakout sessions on leadership, service, and professional development</li>
              <li>Club awards and recognition ceremony</li>
              <li>Networking and fellowship opportunities</li>
              <li>Community service project during the conference</li>
              <li>Cultural night and entertainment</li>
            </ul>
            <h3 className="font-display text-blue-800 text-xl font-bold mt-8 mb-3">Registration</h3>
            <p className="text-gray-700 mb-4">Early bird registration is now open! Secure your spot at the premier Rotaract event in Ghana.</p>
            <Link to="/join" className="inline-block bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded hover:bg-yellow-300 transition">Register Now</Link>
          </div>
          <div className="space-y-6">
            <HighlightBox title="Event Details">
              <ul className="space-y-2">
                <li>📅 Date: June 13–15, 2025</li>
                <li>📍 Venue: Accra International Conference Centre</li>
                <li>🕐 Check-in: 8:00 AM, June 13</li>
                <li>👥 Expected: 500+ Rotaractors</li>
                <li>🎯 Theme: The Magic of Rotary</li>
              </ul>
            </HighlightBox>
            <HighlightBox title="Registration Tiers">
              <ul className="space-y-2">
                <li>• Early Bird: GHS 150 (until May 15)</li>
                <li>• Regular: GHS 200 (May 16 – June 5)</li>
                <li>• Late: GHS 250 (after June 5)</li>
                <li>• Day Pass: GHS 100</li>
              </ul>
            </HighlightBox>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default DLACPage;
