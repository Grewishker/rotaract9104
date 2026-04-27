import PageHero from "../components/PageHero";
import HighlightBox from "../components/HighlightBox";
import aboutDistrictImg from "../assets/about-district.jpg";
import heroAboutImg from "../assets/hero-about.jpg";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Users, Target, Star, Globe, Heart, Award } from "lucide-react";
import { THEME } from "@/lib/theme";

// Import images for sections
import healthImg from "@/assets/health-wellbeing.jpg";
import environmentImg from "@/assets/project-environment.jpg";
import educationImg from "@/assets/education.jpg";
import leadershipImg from "@/assets/leadership.jpg";
import cohesionImg from "@/assets/rotaract-4.jpg";
import membershipImg from "@/assets/project-literacy.jpg";
import clusterImg from '@/assets/zones-ghana.jpg';
import leadershipTeamImg from "@/assets/rotaract-1.jpg";

const priorities = [
  {
    icon: Heart,
    title: "Community Health & Wellbeing",
    desc: "Organising health screenings, medical outreaches, and awareness campaigns in underserved communities.",
    image: healthImg,
  },
  {
    icon: Globe,
    title: "Environment & Sustainability",
    desc: "Championing green initiatives including tree planting, waste management, and environmental education.",
    image: environmentImg,
  },
  {
    icon: Users,
    title: "Education & Literacy",
    desc: "Supporting schools, libraries, and youth learning initiatives to improve literacy rates across Ghana.",
    image: educationImg,
  },
  {
    icon: Star,
    title: "Professional & Leadership Dev",
    desc: "Running workshops, bootcamps, and mentorship programmes that build career-ready young professionals.",
    image: leadershipImg,
  },
  {
    icon: Award,
    title: "District Cohesion & Culture",
    desc: "Strengthening the bonds between clubs through events, fellowships, and inter-club service activities.",
    image: cohesionImg,
  },
  {
    icon: Target,
    title: "Membership Growth",
    desc: "Expanding the Rotaract movement by chartering new clubs and improving retention of active members.",
    image: membershipImg,
  },
];

const clusters = [
  { name: "Cluster A – Greater Accra West", clubs: "8 clubs" },
  { name: "Cluster B – Greater Accra East", clubs: "7 clubs" },
  { name: "Cluster C – Ashanti Region", clubs: "10 clubs" },
  { name: "Cluster D – Western & Central", clubs: "6 clubs" },
  { name: "Cluster E – Northern Ghana", clubs: "5 clubs" },
  { name: "Cluster F – Eastern & Volta", clubs: "6 clubs" },
  { name: "Cluster G – University Clubs", clubs: "8 clubs" },
  { name: "Cluster H – Central & Bono", clubs: "5 clubs" },
  { name: "Cluster I – Upper East & Upper West", clubs: "4 clubs" },
  { name: "Cluster J – Greater Accra East Extension", clubs: "5 clubs" },
];

const AboutDistrictPage = () => (
  <div>
    {/* Original PageHero - Keep as is */}
    <PageHero 
      breadcrumb="About" 
      title="About District 9104" 
      subtitle="Serving communities across Ghana, West Africa — Zones 22 & 22A" 
      image={heroAboutImg} 
    />
    
    {/* Original Content Section - Keep as is */}
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1fr_380px] gap-10">
        <div className="prose max-w-none">
          <img src={aboutDistrictImg} alt="District 9104 map" className="w-full h-56 object-cover rounded-lg mb-6" loading="lazy" width={800} height={600} />
          <h2 className="font-display text-primary text-2xl font-bold mb-4">District Overview</h2>
          <p className="text-gray-700 mb-4">Rotaract District 9104 is one of the most vibrant and dynamic Rotaract districts in Africa. Covering the entirety of Ghana, our district is home to over 60 clubs with more than 3,000 active members dedicated to creating lasting change.</p>
          <h3 className="font-display text-primary text-xl font-bold mt-8 mb-3">Strategic Goals</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Expand club membership by 25% across all regions</li>
            <li>Launch signature projects in health, education, and environment</li>
            <li>Strengthen partnerships with Rotary clubs and corporate sponsors</li>
            <li>Enhance professional development and mentorship programs</li>
            <li>Increase community engagement through innovative service projects</li>
            <li>Build a strong digital presence and communication infrastructure</li>
          </ul>
        </div>
        <div className="space-y-6">
          <HighlightBox title="District Quick Facts">
            <ul className="space-y-2">
              <li>• Coverage: Ghana, West Africa</li>
              <li>• Zones: 22 & 22A</li>
              <li>• 60+ Active Clubs</li>
              <li>• 3,000+ Members</li>
              <li>• 10 Regions Represented</li>
              <li>• Founded: 2010</li>
            </ul>
          </HighlightBox>
          <HighlightBox title="District Priorities">
            <ul className="space-y-2">
              <li>• Youth Empowerment</li>
              <li>• Health & Wellness</li>
              <li>• Education & Literacy</li>
              <li>• Environmental Sustainability</li>
              <li>• Community Economic Development</li>
            </ul>
          </HighlightBox>
        </div>
      </div>
    </section>

    {/* NEW: Stats Strip - Simple clean style */}
    <section className="bg-secondary/5 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "50+", label: "Active Clubs" },
            { value: "3,000+", label: "Members" },
            { value: "200+", label: "Projects Executed" },
            { value: "10", label: "Clusters Across Ghana" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold text-primary">{s.value}</p>
              <p className="text-gray-600 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* NEW: Strategic Priorities - Matching second page style with images */}
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-display text-primary text-2xl font-bold mb-3">Strategic Priorities</h2>
          <p className="text-gray-600">The six pillars guiding District 9104's work in 2025–26</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {priorities.map(({ image, icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={image} 
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark800/70 to-transparent"></div>
                <div className="absolute bottom-3 left-3">
                  <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Icon size={16} className="text-white" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-primary text-base mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* NEW: Leadership Structure - With image */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* <div>
            <h2 className="font-display text-primary text-2xl font-bold mb-4">Leadership Structure</h2>
            <p className="text-gray-700 mb-6">
              District 9104 is governed by a clearly defined leadership structure that connects clubs to the district and the district to Rotary International.
            </p>
            <div className="space-y-4">
              {[
                {
                  role: "Rotary District Governor",
                  detail: "Appointed by Rotary International — oversees all Rotary and Rotaract activity in District 9104.",
                },
                {
                  role: "District Rotaract Representative (DRR)",
                  detail: "Leads Rotaract District 9104 — appointed by the District Governor for a one-year Rotary year term.",
                },
                {
                  role: "District Rotaract Committee",
                  detail: "Supports the DRR with themed committees: Service, Professional Dev, Membership, Media, Events, and more.",
                },
                {
                  role: "Cluster Coordinators (A–J)",
                  detail: "Each cluster has a coordinator who liaises between district leadership and clubs in their cluster.",
                },
                {
                  role: "Club Presidents & Boards",
                  detail: "The 50+ clubs each have an elected president and board who execute service projects and manage club affairs.",
                },
              ].map((item, i) => (
                <div key={item.role} className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-sm mb-0.5">{item.role}</h4>
                    <p className="text-gray-600 text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/about/district-team"
              className="inline-flex items-center gap-2 mt-6 text-primary font-medium text-sm hover:text-secondary transition-colors"
            >
              Meet the Full District Team <ArrowRight size={14} />
            </Link>
          </div> */}
          <div>
            <img 
              src={leadershipTeamImg} 
              alt="District Leadership Team" 
              className="w-full h-80 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>

    {/* NEW: Cluster Section - Matching second page style with image */}
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <img 
              src={clusterImg} 
              alt="District 9104 Clusters" 
              className="w-full h-72 object-cover rounded-lg shadow-md mb-6"
            />
            <h2 className="font-display text-primary text-2xl font-bold mb-4">Our Clusters</h2>
            <p className="text-gray-700 mb-4">
              District 9104 is divided into ten geographic clusters across Ghana. Each cluster is managed by a Cluster Coordinator who works closely with club presidents to drive service and ensure active participation in district programmes.
            </p>
          </div>
          <div>
            <h3 className="font-display text-primary text-xl font-bold mb-4">Cluster Breakdown</h3>
            <div className="space-y-2">
              {clusters.map((cluster) => (
                <div key={cluster.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent600"></div>
                    <span className="text-gray-800 text-sm font-medium">{cluster.name}</span>
                  </div>
                  <span className="text-gray-500 text-xs">{cluster.clubs}</span>
                </div>
              ))}
            </div>
            
            {/* District Highlights Box - Matching HighlightBox style */}
            <div className="mt-8 bg-secondary/5 rounded-lg p-5 border border-secondary/10">
              <h4 className="font-semibold text-primary mb-3">District Highlights 2024–25</h4>
              <ul className="space-y-2">
                <li className="text-gray-700 text-sm">• 10,000+ Beneficiaries reached</li>
                <li className="text-gray-700 text-sm">• 50+ Service projects executed</li>
                <li className="text-gray-700 text-sm">• 15+ Professional development events</li>
                <li className="text-gray-700 text-sm">• 3 New clubs chartered</li>
                <li className="text-gray-700 text-sm">• 1 Annual District Conference (DISCON)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* NEW: District Info Cards - Clean simple style */}
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Rotary Year</h3>
            <p className="text-2xl font-bold text-gray-800">2025 – 2026</p>
            <p className="text-gray-500 text-sm mt-1">Running July 2025 to June 2026</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">District Theme</h3>
            <p className="text-xl font-bold text-gray-800">"{THEME.name}"</p>
            <p className="text-gray-500 text-sm mt-1">Celebrating the transformative power of service and fellowship</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Under Rotary District</h3>
            <p className="text-2xl font-bold text-gray-800">District 9104</p>
            <p className="text-gray-500 text-sm mt-1">Rotary International, covering Ghana</p>
          </div>
        </div>
      </div>
    </section>

    {/* NEW: CTA Section - Simple clean style */}
    <section className="py-12 bg-accent600/20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-primary text-2xl md:text-3xl font-bold mb-3">Get Involved with District 9104</h2>
        <p className="text-accent600 max-w-xl mx-auto mb-6">
          Whether you're looking to join a club, attend DISCON, or partner with us on a project — District 9104 has a place for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/join" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-primary font-medium text-sm hover:bg-gray-100 transition-colors">
            Join a Club <ArrowRight size={14} />
          </Link>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white text-white font-medium text-sm hover:bg-white hover:text-primary transition-colors">
            Contact the District
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default AboutDistrictPage;