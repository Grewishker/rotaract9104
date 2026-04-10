import PageHero from "../components/PageHero";
import HighlightBox from "../components/HighlightBox";

const AboutRotaryPage = () => (
  <div>
    <PageHero breadcrumb="About" title="Rotary International" subtitle="A global network of 1.4 million neighbors, friends, and leaders who come together to create positive, lasting change." />
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1fr_380px] gap-10">
        <div className="prose max-w-none">
          <h2 className="font-display text-blue-800 text-2xl font-bold mb-4">The World's First Service Organization</h2>
          <p className="text-gray-700 mb-4">Rotary International was founded in 1905 by Paul P. Harris in Chicago, Illinois. What began as a small club of business professionals has grown into a global humanitarian movement with over 46,000 clubs worldwide.</p>
          <p className="text-gray-700 mb-4">Rotary brings together dedicated individuals to exchange ideas, build relationships, and take action. Our members are people of action who believe that by working together, we can accomplish great things.</p>
          <h3 className="font-display text-blue-800 text-xl font-bold mt-8 mb-3">Rotaract's Place in Rotary</h3>
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
  </div>
);

export default AboutRotaryPage;
