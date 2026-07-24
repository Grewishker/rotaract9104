import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import HighlightBox from "../components/HighlightBox";
import healthImg from "../assets/fighting-disease.jpg";
import literacyImg from "../assets/education.jpg";
import greenImg from "../assets/pillar-6.jpg";
import waterImg from "../assets/clean-water.jpg";
import heroAboutImg from "../assets/hero-about.jpg";
import herovideo from "../assets/videos/Rtrvideo1.mp4"
import { ArrowRight, Heart, BookOpen, Leaf, Droplets, Users, Target, TrendingUp } from "lucide-react";

const projects = [
  { 
    title: "Free Health Outreach", 
    slug: "free-health-outreach",
    desc: "District-wide health screening and medical support for underserved communities across all 10 regions of Ghana.", 
    tags: ["Health", "Community"], 
    image: healthImg,
    icon: Heart,
    stats: "5,000+ beneficiaries",
    color: "bg-red-500",
  },
  { 
    title: "Rotaract Reads", 
    slug: "rotaract-reads",
    desc: "Literacy campaign distributing books and reading resources to schools, with mentorship and reading sessions.", 
    tags: ["Education", "Literacy"], 
    image: literacyImg,
    icon: BookOpen,
    stats: "10,000+ books distributed",
    color: "bg-accent600",
  },
  { 
    title: "Green Ghana Initiative", 
    slug: "green-ghana-initiative",
    desc: "Environmental sustainability project planting 10,000+ trees annually across Ghana in partnership with national agencies.", 
    tags: ["Environment", "Sustainability"], 
    image: greenImg,
    icon: Leaf,
    stats: "15,000+ trees planted",
    color: "bg-green-500",
  },
  { 
    title: "Water & Sanitation", 
    slug: "water-sanitation",
    desc: "Providing clean water infrastructure and sanitation facilities to rural communities in Northern and Volta Regions.", 
    tags: ["WASH", "Infrastructure"], 
    image: waterImg,
    icon: Droplets,
    stats: "20+ communities served",
    color: "bg-cyan-500",
  },
];

const impactStats = [
  { value: "50,000+", label: "Lives Impacted" },
  { value: "200+", label: "Communities Reached" },
  { value: "1,000+", label: "Volunteers Mobilized" },
  // { value: "₵2M+", label: "Resources Invested" },
];

const SignatureProjectsPage = () => (
  <div>
    {/* PageHero - Keep as is */}
    <PageHero 
      breadcrumb="Projects" 
      title="Signature District Projects" 
      subtitle="Flagship initiatives driving lasting impact across Ghana" 
      // image={heroAboutImg} 
      video={herovideo}
        mediaType="video"
         showOverlay={true}
    />

    {/* Impact Stats Strip */}
    <section className="bg-secondary/5 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {impactStats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold text-primary">{s.value}</p>
              <p className="text-gray-600 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Main Projects Grid Section */}
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Original projects grid - enhanced */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map(({ icon: Icon, title, desc, tags, image, stats, color, slug }) => (
            <div 
              id={slug}
              key={title} 
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-all group scroll-mt-24"
            >
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark900/80 via-primary900/40 to-transparent"></div>
                
                {/* Icon badge */}
                <div className="absolute top-4 left-4">
                  <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center shadow-lg`}>
                    <Icon size={18} className="text-white" />
                  </div>
                </div>
                
                {/* Stats badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-primary-dark text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                    {stats}
                  </span>
                </div>
                
                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display font-bold text-white text-xl drop-shadow-lg">
                    {title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{desc}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 flex-wrap">
                    {tags.map((t) => (
                      <span 
                        key={t} 
                        className="bg-secondary/5 text-primary-dark text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {/* <Link 
                    to={`/projects/signature#${slug}`}
                    className="text-primary hover:text-secondary transition-colors"
                    aria-label={`View details for ${title}`}
                  >
                    <ArrowRight size={18} />
                  </Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Additional Project Info Section */}
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-[1fr_380px] gap-10">
          <div className="prose max-w-none">
            <h2 className="font-display text-primary text-2xl font-bold mb-4">About Our Signature Projects</h2>
            <p className="text-gray-700 mb-4">
              District 9104's signature projects are flagship initiatives designed to create sustainable, 
              long-term impact across Ghana. These projects align with Rotary International's seven areas 
              of focus and are executed collaboratively by Rotaract clubs throughout the district.
            </p>
            <h3 className="font-display text-primary text-xl font-bold mt-6 mb-3">Project Selection Criteria</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Alignment with Rotary's areas of focus</li>
              <li>Scalability across multiple zones and regions</li>
              <li>Sustainable impact beyond the Rotary year</li>
              <li>Opportunity for multi-club collaboration</li>
              <li>Measurable outcomes and community benefit</li>
            </ul>
            <h3 className="font-display text-primary text-xl font-bold mt-6 mb-3">Get Involved</h3>
            <p className="text-gray-700 mb-4">
              Every Rotaract club in District 9104 participates in at least one signature project annually. 
              Whether you're a Rotaractor looking to lead a project or a partner organization interested 
              in collaboration, there's a place for you in our signature initiatives.
            </p>
          </div>
          <div className="space-y-6">
            <HighlightBox title="Project Impact 2024–25">
              <ul className="space-y-2">
                <li>• 50+ Health outreaches completed</li>
                <li>• 25 Schools supported with books</li>
                <li>• 15,000 Trees planted nationwide</li>
                <li>• 12 Boreholes constructed</li>
                <li>• 8 Regions actively engaged</li>
              </ul>
            </HighlightBox>
            <HighlightBox title="Partner Organizations">
              <ul className="space-y-2">
                <li>• Ghana Health Service</li>
                <li>• Ministry of Education</li>
                <li>• Forestry Commission</li>
                <li>• Community Water & Sanitation</li>
                <li>• Local Government Authorities</li>
              </ul>
            </HighlightBox>
            <div className="bg-primary rounded-lg p-6 text-white">
              <h4 className="font-semibold text-lg mb-2">Support Our Projects</h4>
              <p className="text-white text-sm mb-4">
                Partner with us to amplify our impact across Ghana.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-white text-primary px-4 py-2 rounded text-sm font-medium hover:bg-gray-100 transition"
              >
                Become a Partner <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-12 bg-accent600/20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-primary text-2xl md:text-3xl font-bold mb-3 ">Join a Signature Project</h2>
        <p className="text-accent600 max-w-xl mx-auto mb-6">
          Ready to make a difference? Connect with your local Rotaract club and get involved in our signature initiatives today.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link 
            to="/join" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-primary font-medium text-sm hover:bg-gray-100 transition-colors"
          >
            Join a Club <ArrowRight size={14} />
          </Link>
          <Link 
            to="/projects" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-primary font-medium text-sm hover:bg-gray-100 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default SignatureProjectsPage;