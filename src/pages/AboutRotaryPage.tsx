import PageHero from "../components/PageHero";
import HighlightBox from "../components/HighlightBox";
import aboutRotaryImg from "../assets/about-rotary.jpg";
import heroAboutImg from "../assets/hero-about.jpg";
import { Link } from "react-router-dom";
import {
  Globe,
  Users,
  ArrowRight,
  Star,
  Award,
  Heart,
  BookOpen,
  Lightbulb,
  Shield,
  Plane, 
  Cloud, 
  Compass, 
  Navigation, 
  Wind, 
  ArrowUpRight,
  Timer,
  Globe2,
  HeartHandshake,
  Handshake,
  Droplets,
} from "lucide-react";
import { motion } from "framer-motion";
import fightingdisease from "@/assets/fighting-disease.jpg";
import grwingeconomies from "@/assets/growing-economies.png";
import promotingpeace from "@/assets/promoting-peace.jpg";
import cleanwater from "@/assets/clean-water.jpg";
import maternalchildhealth from "@/assets/maternal-child-health.jpg";
import rotaryinternationallogo from "@/assets/rotary-international-logo.jpg";
import pillar1 from "@/assets/pillar-1.jpg";
import pillar2 from "@/assets/pillar-2.jpg";
import pillar3 from "@/assets/pillar-3.jpg";
import pillar4 from "@/assets/pillar-4.jpg";
import pillar5 from "@/assets/pillar-5.jpg";
import pillar6 from "@/assets/pillar-6.jpg";
import fourWayTestItems1 from "@/assets/fourWayTestItems1.png";
import fourWayTestItems2 from "@/assets/fourWayTestItems2.png";
import fourWayTestItems3 from "@/assets/fourWayTestItems3.png";
import fourWayTestItems4 from "@/assets/fourWayTestItems4.png";

const pillars = [
  {
    image: pillar1,
    icon: Heart,
    title: "Club Service",
    description: "Building strong, active clubs that are effective community assets.",
  },
  {
    image: pillar2,
    icon: Users,
    title: "Vocational Service",
    description: "Encouraging members to serve through their vocations and professions.",
  },
  {
    image: pillar3,
    icon: Globe,
    title: "Community Service",
    description: "Supporting community development through hands-on service projects.",
  },
  {
    image: pillar4,
    icon: Shield,
    title: "International Service",
    description: "Advancing international understanding and goodwill through service.",
  },
  {
    image: pillar5,
    icon: Lightbulb,
    title: "Youth Service",
    description: "Empowering youth through Rotaract, Interact, and RYLA programmes.",
  },
  {
    image: pillar6,
    icon: BookOpen,
    title: "New Generations",
    description: "Creating pathways for young leaders to grow and make a difference.",
  },
];

const areasOfFocus = [
  { label: "Fighting Disease", image: fightingdisease, bgColor: "bg-red-500" },
  { label: "Growing Local Economies", image: grwingeconomies, bgColor: "bg-green-500" },
  { label: "Promoting Peace", image: promotingpeace, bgColor: "bg-accent600" },
  { label: "Providing Clean Water", image: cleanwater, bgColor: "bg-cyan-500" },
  { label: "Improving Maternal and Child Health", image: maternalchildhealth, bgColor: "bg-accent600" },
  { label: "Supporting Education", bgColor: "bg-accent600" },
  { label: "Protecting the Environment", bgColor: "bg-emerald-500" },
];

const timeline = [
  { year: "1905", event: "First Rotary club established in Chicago by Paul Harris" },
  { year: "1910", event: "Rotary becomes international with first club in Canada" },
  { year: "1917", event: "Rotary Foundation established to do good in the world" },
  { year: "1925", event: "Rotary holds first World Conference in Europe" },
  { year: "1945", event: "Rotary serves as NGO consultant to UN Charter conference" },
  { year: "1985", event: "PolioPlus program launched to immunize children worldwide" },
  { year: "2012", event: "Rotary and partners reduce polio cases by 99% worldwide" },
  { year: "2015", event: "Rotary and partners launch the Polio Eradication Initiative" },
  { year: "2020", event: "Rotary responds to COVID-19 with global relief efforts" },
  { year: "2025", event: "Rotary celebrates 120 years of service above self" },
];

const fourWayTestItems = [
  { question: "Is it the TRUTH?", image: fourWayTestItems1, number: 1 },
  { question: "Is it FAIR to all concerned?", image: fourWayTestItems2, number: 2 },
  { question: "Will it build GOODWILL and BETTER FRIENDSHIPS?", image: fourWayTestItems3, number: 3 },
  { question: "Will it be BENEFICIAL to all concerned?", image: fourWayTestItems4, number: 4 },
];

const AboutRotaryPage = () => (
  <div>
    {/* Original PageHero - Keep as is */}
    <PageHero 
      breadcrumb="About" 
      title="Rotary International" 
      subtitle="A global network of 1.4 million neighbors, friends, and leaders who come together to create positive, lasting change." 
      image={heroAboutImg} 
    />
    
    {/* Original Content Section - Keep as is */}
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1fr_380px] gap-10">
        <div className="prose max-w-none">
          <img src={aboutRotaryImg} alt="Rotary meeting" className="w-full h-56 object-cover rounded-lg mb-6" loading="lazy" width={800} height={600} />
          <h2 className="font-display text-primary text-2xl font-bold mb-4">The World's First Service Organization</h2>
          <p className="text-gray-700 mb-4">Rotary International was founded in 1905 by Paul P. Harris in Chicago, Illinois. What began as a small club of business professionals has grown into a global humanitarian movement with over 46,000 clubs worldwide.</p>
          <p className="text-gray-700 mb-4">Rotary brings together dedicated individuals to exchange ideas, build relationships, and take action. Our members are people of action who believe that by working together, we can accomplish great things.</p>
          <h3 className="font-display text-primary text-xl font-bold mt-8 mb-3">Rotaract's Place in Rotary</h3>
          <p className="text-gray-700 mb-4">Rotaract is Rotary International's service club for young people aged 18 and above. Rotaract clubs bring together young adults to exchange ideas with leaders in the community, develop leadership and professional skills, and have fun through service.</p>
          <p className="text-gray-700">Since 2020, Rotaract has been recognized as a membership type within Rotary, giving Rotaractors a stronger voice and greater opportunities within the global Rotary family.</p>
        </div>
        <div className="space-y-6">
          <HighlightBox title="RI at a Glance">
            <ul className="space-y-2">
              <li>• 1.4 million members worldwide</li>
              <li>• 46,000+ clubs in 200+ countries</li>
              <li>• Founded in 1905</li>
              <li>• Motto: Service Above Self</li>
              <li>• HQ: Evanston, Illinois, USA</li>
            </ul>
          </HighlightBox>
          <HighlightBox title="7 Areas of Focus">
            <ul className="space-y-2">
              <li>1. Peace & Conflict Resolution</li>
              <li>2. Disease Prevention & Treatment</li>
              <li>3. Water, Sanitation & Hygiene</li>
              <li>4. Maternal & Child Health</li>
              <li>5. Basic Education & Literacy</li>
              <li>6. Community Economic Development</li>
              <li>7. Environment</li>
            </ul>
          </HighlightBox>
        </div>
      </div>
    </section>

    {/* NEW: Stats Strip from RotaryInternational */}
    <section className="bg-slate-100 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "1.4M+", label: "Members Worldwide" },
            { value: "35,000+", label: "Clubs Globally" },
            { value: "200+", label: "Countries & Territories" },
            { value: "1905", label: "Year Founded" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-heading font-black text-3xl text-primary">{s.value}</p>
              <p className="text-primary/60 font-body text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* NEW: Who is Rotary Section */}
    

    {/* NEW: How Rotaract Fits */}
    <section className="py-20 bg-accent600">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-white font-heading font-black text-3xl md:text-4xl mb-4">
            How Rotaract Fits Within Rotary
          </h2>
          <p className="text-blue/90 font-body">
            Rotaract is not a separate organisation — it is a vital part of
            the Rotary family, established by Rotary International to develop
            the next generation of leaders.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Interact",
              age: "Ages 12–18",
              desc: "School-based clubs for young people learning to become service leaders.",
              color: "border-pink-brand",
              badge: "bg-pink-brand text-primary",
            },
            {
              title: "Rotaract",
              age: "Ages 18–30",
              desc: "University and community clubs for young professionals driving change.",
              color: "border-secondary/40",
              badge: "bg-secondary text-primary",
              highlight: true,
            },
            {
              title: "Rotary",
              age: "Ages 30+",
              desc: "The main body of Rotary — professional leaders creating sustainable impact.",
              color: "border-white/30",
              badge: "bg-white/20 text-white",
            },
          ].map((item) => (
            <div
              key={item.title}
              className={`bg-white/5 rounded-2xl p-8 border-2 ${item.color} ${item.highlight ? "scale-105 bg-white/10" : ""}`}
            >
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-heading font-bold mb-4 ${item.badge}`}>
                {item.age}
              </span>
              <h3 className="text-white font-heading font-black text-2xl mb-3">{item.title}</h3>
              <p className="text-white font-body text-sm leading-relaxed">{item.desc}</p>
              {item.highlight && (
                <span className="inline-block mt-4 text-secondary/70 text-xs font-heading font-bold uppercase tracking-wider">
                  ← You are here
                </span>
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-white font-body text-sm mt-8">
          All three groups are supported and sponsored by Rotary International
          and share the same values of service, integrity, and fellowship.
        </p>
      </div>
    </section>

    {/* NEW: Areas of Focus */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title text-4xl font-bold mb-4">EXPLORE OUR CAUSES</h2>
          <p className="section-subtitle text-gray-600">Seven priorities guiding Rotary's global humanitarian work</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {areasOfFocus.map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-4 shadow-lg relative group cursor-pointer">
                {item.image && (
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                )}
                <div className={`absolute inset-0 ${item.bgColor} opacity-10 group-hover:opacity-30 transition-opacity duration-300`} />
              </div>
              <h3 className="font-semibold text-lg max-w-[200px]">{item.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* NEW: Avenues of Service */}
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-heading font-bold text-xs uppercase tracking-wider mb-4">
            How We Serve
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-primary mb-4">
            Avenues of Service
          </h2>
          <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
            The six pathways through which Rotarians serve their communities and the world
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map(({ image, icon: Icon, title, description }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark800/70 via-primary800/10 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Icon size={20} className="text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-primary mb-3 group-hover:text-secondary/70 transition-colors">
                  {title}
                </h3>
                <p className="text-gray-600 font-body text-sm leading-relaxed">
                  {description}
                </p>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link 
                    to={`/service/${title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-secondary/70 hover:text-primary transition-colors group/link"
                  >
                    Learn more 
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* NEW: Four Way Test */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-heading font-bold text-xs uppercase tracking-wider mb-4">
              Our Guiding Principles
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary mb-4">
              The Four-Way Test
            </h2>
            <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
              Rotary's ethical guide — a test of the things members think, say, or do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {fourWayTestItems.map((item) => (
              <div
                key={item.number}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-74 overflow-hidden">
                  <img
                    src={item.image}
                    alt={`Four-Way Test - ${item.question}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                </div>

                <div className="p-4 flex-1 justify-end">
                  <div className="transform group-hover:translate-y-[-4px] transition-transform duration-300">
                    <div className="inline-block mb-3">
                      <span className="text-accent600 font-heading font-black text-4xl">
                        {item.number}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-accent600 leading-tight drop-shadow-lg">
                      {item.question}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* NEW: CTA */}
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading font-black text-primary text-3xl md:text-4xl mb-4">
          Be Part of the Rotary Family
        </h2>
        <p className="text-primary/70 font-body max-w-xl mx-auto mb-8">
          Rotaract District 9104 is your entry point into this global
          movement. Join a club, serve your community, and connect with
          change-makers across Ghana and the world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/join"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-heading font-bold text-sm shadow-lg hover:bg-primary/90 transition-all group"
          >
            Join Rotaract{" "}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/about/rotaract"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-primary text-primary font-heading font-bold text-sm hover:bg-primary hover:text-white transition-all"
          >
            Learn About Rotaract
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default AboutRotaryPage;