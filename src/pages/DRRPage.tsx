import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import drrImg from "../assets/drr-portrait.jpg";
import vdrrImg from "../assets/vdrr-portrait.jpg";
import heroAboutImg from "../assets/hero-about.jpg";
import { THEME } from "@/lib/theme";

const DRRPage = () => (
  <div>
    <PageHero 
      breadcrumb="About" 
      title="District Rotaract Representative" 
      subtitle="Meet the DRR and VDRR for the 2025-2026 Rotary Year" 
      image={heroAboutImg} 
    />
    
    {/* DRR Section */}
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-[320px_1fr] gap-10 items-start">
          <div className="relative">
            <img 
              src={drrImg} 
              alt="District Rotaract Representative" 
              className="w-full h-[420px] object-cover rounded-lg" 
              loading="lazy" 
              width={640} 
              height={864} 
            />
            <span className="absolute bottom-4 left-4 bg-accent600 text-primary-dark text-xs font-bold px-3 py-1 rounded">
              DRR 2025-2026
            </span>
          </div>
          <div>
            <p className="text-secondary uppercase text-xs font-semibold tracking-widest mb-2">
              District Rotaract Representative
            </p>
            <h2 className="font-display font-bold text-primary text-3xl mb-4">
              Rtr. [DRR Name]
            </h2>
            <blockquote className="border-l-4 border-secondary pl-4 italic text-gray-600 mb-6">
              "Together, we are creating magic — transforming communities, building leaders, and leaving a legacy of service that transcends borders."
            </blockquote>
            <h3 className="font-display text-primary font-bold text-xl mb-3">Biography</h3>
            <p className="text-gray-700 mb-4">
              The District Rotaract Representative (DRR) is the highest-ranking Rotaract officer in the district. 
              Serving as the liaison between Rotaract and the District Governor, the DRR coordinates district-wide 
              activities, supports club development, and represents Rotaract at all levels of Rotary.
            </p>
            <h3 className="font-display text-primary font-bold text-xl mb-3">Vision Statement</h3>
            <p className="text-gray-700 mb-4">
              To build a district of empowered, service-minded young leaders who leverage {THEME.name} 
              to drive sustainable community development and foster global connections.
            </p>
            <h3 className="font-display text-primary font-bold text-xl mb-3">Official Engagements</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-6">
              <li>Official visits to all 60+ clubs across Ghana</li>
              <li>District Assembly and DLAC 2025 coordination</li>
              <li>Zone 22 & 22A Rotaract leadership meetings</li>
              <li>RI Convention representation</li>
              <li>Partnership development with Rotary clubs and sponsors</li>
            </ul>
            <Link 
              to="/about/team" 
              className="inline-block bg-accent600 text-primary-dark font-semibold px-6 py-3 rounded hover:bg-secondary transition"
            >
              Meet the Full Team
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* VDRR Section - Exact replica of DRR style */}
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-[320px_1fr] gap-10 items-start">
          <div className="relative">
            <img 
              src={vdrrImg} 
              alt="Vice District Rotaract Representative" 
              className="w-full h-[420px] object-cover rounded-lg" 
              loading="lazy" 
              width={640} 
              height={864} 
            />
            <span className="absolute bottom-4 left-4 bg-accent600 text-primary-dark text-xs font-bold px-3 py-1 rounded">
              VDRR 2025-2026
            </span>
          </div>
          <div>
            <p className="text-secondary uppercase text-xs font-semibold tracking-widest mb-2">
              Vice District Rotaract Representative
            </p>
            <h2 className="font-display font-bold text-primary text-3xl mb-4">
              Rtr. [VDRR Name]
            </h2>
            <blockquote className="border-l-4 border-secondary pl-4 italic text-gray-600 mb-6">
              "Supporting clubs, empowering members, and working alongside the DRR to make The Magic of Rotaract a reality across Ghana."
            </blockquote>
            <h3 className="font-display text-primary font-bold text-xl mb-3">Biography</h3>
            <p className="text-gray-700 mb-4">
              The Vice District Rotaract Representative (VDRR) serves as the second-highest ranking Rotaract officer 
              in the district. Working closely with the DRR, the VDRR assists in coordinating district activities, 
              provides support to zone coordinators, and steps in to represent the district when needed.
            </p>
            <h3 className="font-display text-primary font-bold text-xl mb-3">Vision Statement</h3>
            <p className="text-gray-700 mb-4">
              Supporting membership growth initiatives, strengthening inter-club collaboration, and ensuring 
              effective communication between district leadership and club presidents across all seven zones.
            </p>
            <h3 className="font-display text-primary font-bold text-xl mb-3">Official Engagements</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-6">
              <li>Assist DRR with official club visits and district events</li>
              <li>Coordinate zone-level activities and reporting</li>
              <li>Support new club chartering and membership retention</li>
              <li>Oversee district committees and special projects</li>
              <li>Represent the district at zonal and regional functions</li>
            </ul>
            <Link 
              to="/about/team" 
              className="inline-block bg-accent600 text-primary-dark font-semibold px-6 py-3 rounded hover:bg-secondary transition"
            >
              Meet the Full Team
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-12 bg-primary">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-3">Connect with District Leadership</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Have questions or want to collaborate with District 9104? Reach out to the DRR and VDRR team.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-primary font-medium text-sm hover:bg-gray-100 transition-colors"
          >
            Contact the District
          </Link>
          <Link 
            to="/about/district-9104" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white text-white font-medium text-sm hover:bg-white hover:text-primary transition-colors"
          >
            About District 9104
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default DRRPage;