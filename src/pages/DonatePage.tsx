import PageHero from "../components/PageHero";
import HighlightBox from "../components/HighlightBox";
import donateImg from "../assets/donate.jpg";
import heroAboutImg from "../assets/hero-about.jpg";

const tiers = [
  { amount: "GHS 100", name: "Friend of Rotaract", features: ["Certificate of appreciation", "Name on donor wall", "Social media recognition", "Quarterly impact report"], featured: false },
  { amount: "GHS 500", name: "Rotaract Champion", features: ["All Friend benefits", "VIP event invitations", "Branded merchandise", "Personal thank-you from DRR", "Featured donor spotlight"], featured: true },
  { amount: "GHS 1,000+", name: "Platinum Partner", features: ["All Champion benefits", "Corporate branding at events", "Annual partnership agreement", "Board-level recognition", "Custom impact report", "Strategic partnership opportunities"], featured: false },
];

const DonatePage = () => (
  <div>
    <PageHero breadcrumb="Support Us" title="Donate" subtitle="Support Rotaract District 9104's mission to serve communities across Ghana" image={heroAboutImg} />
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <img src={donateImg} alt="Community giving" className="w-full h-56 object-cover rounded-lg mb-10" loading="lazy" />
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-lg p-8 text-center relative ${t.featured ? "bg-blue-900 text-white border-2 border-yellow-400" : "bg-white border border-blue-100"}`}>
              {t.featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>}
              <div className="font-display font-bold text-4xl mb-2 text-yellow-400">{t.amount}</div>
              <h3 className={`font-display font-bold text-xl mb-4 ${t.featured ? "text-white" : "text-blue-800"}`}>{t.name}</h3>
              <ul className={`text-sm space-y-2 mb-6 text-left ${t.featured ? "text-blue-200" : "text-gray-600"}`}>
                {t.features.map((f) => <li key={f}>✓ {f}</li>)}
              </ul>
              <button className="w-full font-semibold px-6 py-3 rounded transition bg-yellow-400 text-blue-900 hover:bg-yellow-300">Donate Now</button>
            </div>
          ))}
        </div>
        <HighlightBox title="Where Your Donation Goes">
          <p>Every donation directly supports Rotaract District 9104's service projects, including health outreaches, literacy campaigns, environmental initiatives, and professional development programs. Your generosity helps us create lasting impact in communities across Ghana.</p>
        </HighlightBox>
      </div>
    </section>
  </div>
);

export default DonatePage;
