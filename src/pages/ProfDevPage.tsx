import PageHero from "../components/PageHero";
import HighlightBox from "../components/HighlightBox";
import trainingImg from "../assets/training.jpg";
import careerImg from "../assets/career-expo.jpg";
import heroAboutImg from "../assets/hero-about.jpg";

const ProfDevPage = () => (
  <div>
    <PageHero breadcrumb="Projects" title="Professional Development" subtitle="Equipping Rotaractors with skills for career and leadership success" image={heroAboutImg} />
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1fr_380px] gap-10">
        <div className="prose max-w-none">
          <img src={trainingImg} alt="Leadership training" className="w-full h-56 object-cover rounded-lg mb-6" loading="lazy" />
          <h2 className="font-display text-blue-800 text-2xl font-bold mb-4">Leadership Training</h2>
          <p className="text-gray-700 mb-6">Our leadership training programs develop the next generation of community leaders. Through workshops, seminars, and hands-on exercises, Rotaractors gain essential skills in team management, project planning, and public speaking.</p>
          <h2 className="font-display text-blue-800 text-2xl font-bold mb-4">Mentorship Program</h2>
          <p className="text-gray-700 mb-6">Connecting young professionals with experienced Rotarians and industry leaders who provide guidance, career advice, and networking opportunities.</p>
          <img src={careerImg} alt="Career expo" className="w-full h-56 object-cover rounded-lg mb-6" loading="lazy" />
          <h2 className="font-display text-blue-800 text-2xl font-bold mb-4">Career Expo</h2>
          <p className="text-gray-700">Annual district career expo bringing together employers, entrepreneurs, and professionals to help Rotaractors explore career opportunities and build professional networks.</p>
        </div>
        <div className="space-y-6">
          <HighlightBox title="Upcoming Training Events">
            <ul className="space-y-2">
              <li>• Club Officers Training — June 22</li>
              <li>• Grant Writing Workshop — July 10</li>
              <li>• Public Speaking Masterclass — Aug 5</li>
              <li>• Career Expo 2025 — Sept 15</li>
            </ul>
          </HighlightBox>
          <HighlightBox title="Impact Numbers">
            <ul className="space-y-2">
              <li>• 500+ Rotaractors trained annually</li>
              <li>• 50+ mentorship pairs</li>
              <li>• 20+ workshops per year</li>
              <li>• 15+ corporate partners</li>
            </ul>
          </HighlightBox>
        </div>
      </div>
    </section>
  </div>
);

export default ProfDevPage;
