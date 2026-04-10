import PageHero from "../components/PageHero";
import EventItem from "../components/EventItem";

const notices = [
  { day: "20", month: "Jun", title: "Community Clean-Up Day", description: "All clubs are encouraged to participate in a district-wide environmental clean-up.", tag: "Environment", tagColor: "bg-green-100 text-green-800" },
  { day: "28", month: "Jun", title: "Free Eye Screening", description: "Partner with local hospitals to offer free eye exams in underserved areas.", tag: "Health", tagColor: "bg-red-100 text-red-800" },
  { day: "10", month: "Jul", title: "Back-to-School Drive", description: "Collect and distribute school supplies to children in rural communities.", tag: "Education", tagColor: "bg-blue-100 text-blue-800" },
  { day: "25", month: "Jul", title: "Blood Donation Campaign", description: "District-wide blood donation in partnership with the Ghana Health Service.", tag: "Health", tagColor: "bg-red-100 text-red-800" },
];

const ServiceNoticesPage = () => (
  <div>
    <PageHero breadcrumb="Projects" title="Community Service Notices" subtitle="Upcoming service opportunities across the district" />
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 space-y-6">
        {notices.map((n) => <EventItem key={n.title} {...n} />)}
      </div>
    </section>
  </div>
);

export default ServiceNoticesPage;
