import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import drrImg from "../assets/drr-portrait.jpg";

const DRRPage = () => (
  <div>
    <PageHero breadcrumb="About" title="District Rotaract Representative" subtitle="Meet the DRR for the 2024–2025 Rotary Year" />
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[320px_1fr] gap-10 items-start">
        <div className="relative">
          <img src={drrImg} alt="District Rotaract Representative" className="w-full h-[420px] object-cover rounded-lg" loading="lazy" width={640} height={864} />
          <span className="absolute bottom-4 left-4 bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded">DRR 2024–2025</span>
        </div>
        <div>
          <p className="text-yellow-600 uppercase text-xs font-semibold tracking-widest mb-2">District Rotaract Representative</p>
          <h2 className="font-display font-bold text-blue-800 text-3xl mb-4">Rtr. [DRR Name]</h2>
          <blockquote className="border-l-4 border-yellow-400 pl-4 italic text-gray-600 mb-6">
            "Together, we are creating magic — transforming communities, building leaders, and leaving a legacy of service that transcends borders."
          </blockquote>
          <h3 className="font-display text-blue-800 font-bold text-xl mb-3">Biography</h3>
          <p className="text-gray-700 mb-4">The District Rotaract Representative (DRR) is the highest-ranking Rotaract officer in the district. Serving as the liaison between Rotaract and the District Governor, the DRR coordinates district-wide activities, supports club development, and represents Rotaract at all levels of Rotary.</p>
          <h3 className="font-display text-blue-800 font-bold text-xl mb-3">Vision Statement</h3>
          <p className="text-gray-700 mb-4">To build a district of empowered, service-minded young leaders who leverage The Magic of Rotary to drive sustainable community development and foster global connections.</p>
          <h3 className="font-display text-blue-800 font-bold text-xl mb-3">Official Engagements</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-6">
            <li>Official visits to all 60+ clubs across Ghana</li>
            <li>District Assembly and DLAC 2025 coordination</li>
            <li>Zone 22 & 22A Rotaract leadership meetings</li>
            <li>RI Convention representation</li>
            <li>Partnership development with Rotary clubs and sponsors</li>
          </ul>
          <Link to="/about/team" className="inline-block bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded hover:bg-yellow-300 transition">Meet the Full Team</Link>
        </div>
      </div>
    </section>
  </div>
);

export default DRRPage;
