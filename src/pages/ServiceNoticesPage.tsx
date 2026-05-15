import PageHero from "../components/PageHero";
import EventItem from "../components/EventItem";
import heroAboutImg from "../assets/hero-about.jpg";

const notices = [
  { day: "20", month: "Jun", title: "District Clean-Up Day", description: "All clubs are invited to join the district-wide environment and waste management campaign across Greater Accra.", tag: "Environment", tagColor: "bg-green-100 text-green-800" },
  { day: "28", month: "Jun", title: "Free Eye Screening", description: "Partner with local clinics to offer free eye exams and referral support in underserved communities.", tag: "Health", tagColor: "bg-red-100 text-red-800" },
  { day: "10", month: "Jul", title: "Back-to-School Essentials Drive", description: "Collect and distribute school supplies for children in rural and peri-urban schools.", tag: "Education", tagColor: "bg-secondary/10 text-primary" },
  { day: "25", month: "Jul", title: "Blood Donation Campaign", description: "A district-wide blood donation initiative in partnership with the Ghana Health Service and regional hospitals.", tag: "Health", tagColor: "bg-red-100 text-red-800" },
  { day: "08", month: "Aug", title: "Green Ghana Tree Planting", description: "Join the national Green Ghana campaign with tree planting and environmental stewardship activities.", tag: "Environment", tagColor: "bg-green-100 text-green-800" },
  { day: "15", month: "Aug", title: "Youth Leadership Workshop", description: "Support the district leadership training for emerging Rotaractors on project planning and community engagement.", tag: "Leadership", tagColor: "bg-secondary/10 text-primary" },
  { day: "05", month: "Sep", title: "Water & Sanitation Outreach", description: "Deliver safe water education and hygiene kits to communities across Northern Ghana.", tag: "Water", tagColor: "bg-cyan-100 text-cyan-800" },
];

const ServiceNoticesPage = () => (
  <div>
    <PageHero breadcrumb="Projects" title="Community Service Notices" subtitle="Action alerts for service events across Rotaract District 9104" image={heroAboutImg} />
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 grid gap-10 lg:grid-cols-[2fr_1fr]">
        <div>
          <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
            <h2 className="font-display text-primary text-3xl font-bold mb-4">Latest service notices</h2>
            <p className="text-gray-600 mb-6">
              Rotaract District 9104 publishes service notices to keep clubs aligned with district-wide campaigns, health outreaches, education drives, and environmental actions. These updates are the best way for clubs and members to get involved quickly.
            </p>
            <div className="space-y-4">
              {notices.map((notice) => (
                <div key={notice.title} className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                  <EventItem {...notice} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
            <h3 className="font-display text-primary text-2xl font-bold mb-3">How to participate</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Share this notice with your club executive and service committee.</li>
              <li>• Confirm attendance with your Club President and District Service Chair.</li>
              <li>• Register your team for campaigns through the district events portal.</li>
              <li>• Report project results after each activity so we can track impact.</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-primary-dark text-white p-8 shadow-sm">
            <h3 className="font-display text-white text-2xl font-bold mb-3">District Service Priorities</h3>
            <p className="text-white/80 mb-4">These notices support the district's priority areas for the Rotary year.</p>
            <ul className="space-y-2 text-sm text-white/90">
              <li>• Health & wellbeing</li>
              <li>• Education & youth empowerment</li>
              <li>• Environmental sustainability</li>
              <li>• Water, sanitation & hygiene</li>
              <li>• Leadership development</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  </div>
);

export default ServiceNoticesPage;
