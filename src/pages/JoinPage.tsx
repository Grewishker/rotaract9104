import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import HighlightBox from "../components/HighlightBox";

const steps = [
  { num: 1, title: "Find a Club", desc: "Use our Club Locator to find a Rotaract club near you." },
  { num: 2, title: "Attend a Meeting", desc: "Visit a club meeting to experience the fellowship firsthand." },
  { num: 3, title: "Apply", desc: "Submit your membership application through the club." },
  { num: 4, title: "Get Inducted", desc: "Welcome to the Rotaract family! Begin your service journey." },
];

const JoinPage = () => (
  <div>
    <PageHero breadcrumb="Join Us" title="Join Rotaract" subtitle="Become part of a global movement of young leaders making a difference" />
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="w-14 h-14 rounded-full bg-yellow-400 text-blue-900 font-display font-bold text-xl flex items-center justify-center mx-auto mb-3">{s.num}</div>
              <h3 className="font-semibold text-blue-800 mb-1">{s.title}</h3>
              <p className="text-gray-500 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-blue-800 text-2xl font-bold mb-4">Eligibility</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Age 18 and above</li>
              <li>Interest in community service</li>
              <li>Willingness to participate in club activities</li>
              <li>Good moral character</li>
              <li>No prior Rotaract membership required</li>
            </ul>
            <h3 className="font-display text-blue-800 text-xl font-bold mb-3">Membership Dues</h3>
            <p className="text-gray-700">Annual membership dues vary by club, typically ranging from GHS 50–200. This covers club activities, district dues, and RI registration.</p>
          </div>
          <div className="space-y-6">
            <HighlightBox title="Benefits of Membership">
              <ul className="space-y-2">
                <li>• Leadership development opportunities</li>
                <li>• Global networking with 250,000+ Rotaractors</li>
                <li>• Professional development programs</li>
                <li>• Community service impact</li>
                <li>• Lifelong friendships and fellowship</li>
                <li>• Access to Rotary grants and resources</li>
              </ul>
            </HighlightBox>
            <Link to="/contact/club-locator" className="inline-block bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded hover:bg-yellow-300 transition">Find a Club Near You</Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default JoinPage;
