import PageHero from "../components/PageHero";
import HighlightBox from "../components/HighlightBox";

const AboutRotaractPage = () => (
  <div>
    <PageHero breadcrumb="About" title="About Rotaract" subtitle="Young leaders building a better world through service, fellowship, and professional development." />
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1fr_380px] gap-10">
        <div className="prose max-w-none">
          <h2 className="font-display text-blue-800 text-2xl font-bold mb-4">History of Rotaract</h2>
          <p className="text-gray-700 mb-4">Rotaract was established in 1968 by Rotary International to bring together young people aged 18 and above to develop leadership skills, promote ethical standards, and advance goodwill and peace around the world.</p>
          <h3 className="font-display text-blue-800 text-xl font-bold mt-8 mb-3">Our Mission</h3>
          <p className="text-gray-700 mb-4">To provide an opportunity for young men and women to enhance the knowledge and skills that will assist them in personal development, address the physical and social needs of their communities, and promote better relations between all people worldwide through a framework of friendship and service.</p>
          <h3 className="font-display text-blue-800 text-xl font-bold mt-8 mb-3">Membership</h3>
          <p className="text-gray-700">Rotaract membership is open to anyone aged 18 and above who believes in the ideal of service. Members meet regularly, participate in service projects, enjoy fellowship activities, and develop professionally through various programs and initiatives.</p>
        </div>
        <div className="space-y-6">
          <HighlightBox title="Core Values">
            <ul className="space-y-2">
              <li>• Service Above Self</li>
              <li>• Fellowship & Fun</li>
              <li>• Diversity & Inclusion</li>
              <li>• Integrity & Ethics</li>
              <li>• Leadership Development</li>
            </ul>
          </HighlightBox>
          <HighlightBox title="Benefits of Membership">
            <ul className="space-y-2">
              <li>• Global networking opportunities</li>
              <li>• Leadership & professional development</li>
              <li>• Community service impact</li>
              <li>• Lifelong friendships</li>
              <li>• Rotary family connections</li>
            </ul>
          </HighlightBox>
        </div>
      </div>
    </section>
  </div>
);

export default AboutRotaractPage;
