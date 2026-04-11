import PageHero from "../components/PageHero";
import HighlightBox from "../components/HighlightBox";
import aboutDistrictImg from "../assets/about-district.jpg";
import heroAboutImg from "../assets/hero-about.jpg";

const AboutDistrictPage = () => (
  <div>
    <PageHero breadcrumb="About" title="About District 9104" subtitle="Serving communities across Ghana, West Africa — Zones 22 & 22A" image={heroAboutImg} />
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1fr_380px] gap-10">
        <div className="prose max-w-none">
          <img src={aboutDistrictImg} alt="District 9104 map" className="w-full h-56 object-cover rounded-lg mb-6" loading="lazy" width={800} height={600} />
          <h2 className="font-display text-blue-800 text-2xl font-bold mb-4">District Overview</h2>
          <p className="text-gray-700 mb-4">Rotaract District 9104 is one of the most vibrant and dynamic Rotaract districts in Africa. Covering the entirety of Ghana, our district is home to over 60 clubs with more than 3,000 active members dedicated to creating lasting change.</p>
          <h3 className="font-display text-blue-800 text-xl font-bold mt-8 mb-3">Strategic Goals</h3>
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
  </div>
);

export default AboutDistrictPage;
