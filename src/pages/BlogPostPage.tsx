import { useParams, Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { ArrowLeft, Clock, Calendar, User, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import heroAboutImg from "../assets/hero-about.jpg";
import healthImg from "../assets/fighting-disease.jpg";
import trainingImg from "../assets/training.jpg";
import greenImg from "../assets/green-ghana.jpg";
import fellowshipImg from "../assets/fellowship.jpg";
import careerImg from "../assets/career-expo.jpg";
import heroSlide2 from "../assets/hero-slide-2.jpg";
import { THEME } from "@/lib/theme";

// Define the BlogPost interface
interface BlogPost {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  content: string;
  author: string;
  authorRole: string;
  readTime: string;
  emoji?: string;
}

// Posts data with full content
const posts: BlogPost[] = [
  { 
    id: "district-health-outreach-2024",
    category: "Service", 
    date: "Dec 15, 2024", 
    title: "District Health Outreach Reaches 500+ Beneficiaries", 
    excerpt: "The annual Free Health Outreach in Tamale provided free screenings and medication to over 500 community members.",
    image: healthImg,
    content: `
      <p>The District 9104 annual Free Health Outreach took place in Tamale, Northern Region, bringing together over 50 healthcare professionals and 100 Rotaract volunteers from across the district.</p>
      
      <h3>Comprehensive Healthcare Services</h3>
      <p>The three-day outreach provided a range of free medical services including:</p>
      <ul>
        <li>General health screenings and consultations</li>
        <li>Malaria testing and treatment</li>
        <li>Blood pressure and diabetes checks</li>
        <li>Eye examinations and free reading glasses</li>
        <li>Dental check-ups and oral hygiene education</li>
        <li>Nutritional counseling for mothers and children</li>
      </ul>
      
      <h3>Community Impact</h3>
      <p>Over 500 community members received free healthcare services, with many receiving their first medical check-up in years. The outreach specifically targeted underserved communities including the elderly, pregnant women, and children under five.</p>
      
      <p>"This initiative demonstrates the power of Rotaract in addressing critical healthcare gaps in our communities," said the District Rotaract Representative. "We're not just providing one-time care; we're connecting people to ongoing health resources and education."</p>
      
      <h3>Partnerships and Support</h3>
      <p>The outreach was made possible through partnerships with the Ghana Health Service, Tamale Teaching Hospital, and several local Rotary clubs. Pharmaceutical companies donated medications valued at over ₵50,000.</p>
      
      <p>Looking ahead, the district plans to make this an annual signature project, rotating through different regions each year to ensure equitable access to healthcare across Ghana.</p>
    `,
    author: "District Media Team",
    authorRole: "Rotaract District 9104",
    readTime: "4 min read"
  },
  { 
    id: "club-officers-training-2024",
    category: "Leadership", 
    date: "Dec 1, 2024", 
    title: "Club Officers Training Empowers 200 Leaders", 
    excerpt: "Newly elected club officers gathered for an intensive leadership training session ahead of the Rotary year.",
    image: trainingImg,
    content: `
      <p>Over 200 newly elected club officers from 45 Rotaract clubs across Ghana gathered in Kumasi for the annual Club Officers Training (COT) programme. The two-day intensive training prepared incoming leadership for the responsibilities ahead in the 2025-2026 Rotary year.</p>
      
      <h3>Comprehensive Curriculum</h3>
      <p>The training covered essential topics including:</p>
      <ul>
        <li>Club administration and governance best practices</li>
        <li>Strategic planning and goal setting</li>
        <li>Membership retention and growth strategies</li>
        <li>Financial management and accountability</li>
        <li>Project planning and execution</li>
        <li>Public relations and social media management</li>
        <li>Inter-club collaboration and district engagement</li>
      </ul>
      
      <h3>Facilitators and Speakers</h3>
      <p>The training featured experienced facilitators including past District Rotaract Representatives, Rotary leaders, and professional trainers. Breakout sessions allowed officers to network with counterparts from other clubs and share best practices.</p>
      
      <p>"The quality of leadership at the club level directly impacts our ability to serve communities effectively," noted the training coordinator. "These officers leave equipped with practical tools and a strong support network."</p>
      
      <h3>Looking Forward</h3>
      <p>Each club leadership team developed a preliminary action plan for their tenure, with commitments to specific membership and service goals. The district leadership team will provide ongoing mentorship and support throughout the year.</p>
    `,
    author: "District Media Team",
    authorRole: "Rotaract District 9104",
    readTime: "5 min read"
  },
  { 
    id: "green-ghana-2024",
    category: "Environment", 
    date: "Nov 20, 2024", 
    title: "Green Ghana: 10,000 Trees and Counting", 
    excerpt: "Rotaract clubs across Ghana planted over 10,000 trees in the national Green Ghana initiative.",
    image: greenImg,
    content: `
      <p>Rotaract District 9104 exceeded its target of 10,000 trees in this year's Green Ghana initiative, with clubs across all seven zones participating in the national reforestation effort.</p>
      
      <h3>Nationwide Participation</h3>
      <p>From the coastal regions of Greater Accra to the savannah landscapes of the Northern Region, Rotaractors mobilized in their communities to plant indigenous tree species including mahogany, teak, acacia, and various fruit trees.</p>
      
      <h3>Strategic Partnerships</h3>
      <p>The initiative was executed in partnership with the Forestry Commission of Ghana, local government authorities, and traditional leaders. These partnerships ensured that trees were planted in designated areas with proper oversight for long-term survival.</p>
      
      <h3>Beyond Planting</h3>
      <p>The Green Ghana project extends beyond the single planting day. Clubs have adopted the planted areas and committed to quarterly monitoring visits to ensure the trees thrive. Additionally, educational sessions on environmental sustainability were conducted in 30 schools across the country.</p>
      
      <p>"Environmental sustainability is one of Rotary's seven areas of focus, and this project demonstrates our commitment to creating lasting environmental impact," said the District Environment Chair.</p>
      
      <h3>Measurable Impact</h3>
      <p>Over the next decade, these 10,000+ trees will sequester an estimated 500 tons of carbon dioxide, provide habitat for wildlife, prevent soil erosion, and contribute to Ghana's climate action goals.</p>
    `,
    author: "District Media Team",
    authorRole: "Rotaract District 9104",
    readTime: "4 min read"
  },
  { 
    id: "inter-club-fellowship-2024",
    category: "Fellowship", 
    date: "Nov 10, 2024", 
    title: "Inter-Club Fellowship Night in Accra", 
    excerpt: "Rotaractors from 12 clubs gathered for a night of networking, fun, and fellowship in Accra.",
    image: fellowshipImg,
    content: `
      <p>The spirit of Rotaract fellowship was on full display as over 150 Rotaractors from 12 clubs across Greater Accra gathered for an unforgettable inter-club fellowship night at the Accra City Hotel.</p>
      
      <h3>Building Connections</h3>
      <p>The evening was designed to strengthen bonds between clubs and create opportunities for collaboration. Rotaractors participated in ice-breaker activities, team-building games, and networking sessions that transcended individual club boundaries.</p>
      
      <h3>Cultural Showcase</h3>
      <p>Clubs showcased their unique cultures and traditions through performances, with Rotaractors from different regions of Ghana sharing traditional dances, music, and cuisine. The Rotaract Club of Accra East performed a spectacular cultural display that earned a standing ovation.</p>
      
      <h3>Service Through Fellowship</h3>
      <p>"Fellowship is not separate from service—it amplifies it," remarked the Zone 1 Coordinator. "When Rotaractors know and trust each other across clubs, we can execute larger, more impactful projects together."</p>
      
      <p>The event concluded with several clubs committing to joint service projects for the upcoming quarter, including a combined health outreach and an environmental cleanup initiative.</p>
      
      <h3>Quarterly Tradition</h3>
      <p>Given the success of the event, zone leadership announced plans to make inter-club fellowship nights a quarterly tradition, rotating hosting responsibilities among the clubs.</p>
    `,
    author: "District Media Team",
    authorRole: "Rotaract District 9104",
    readTime: "3 min read"
  },
  { 
    id: "career-expo-2024",
    category: "Career", 
    date: "Oct 28, 2024", 
    title: "Career Expo 2024: Connecting Talent with Opportunity", 
    excerpt: "Over 300 Rotaractors attended the annual career expo featuring 25+ employers and workshops.",
    image: careerImg,
    content: `
      <p>The annual Rotaract District 9104 Career Expo brought together over 300 young professionals and students with 25 leading employers, creating invaluable opportunities for career growth and professional development.</p>
      
      <h3>Diverse Employer Participation</h3>
      <p>Participating organizations spanned multiple sectors including banking and finance (Ecobank, Stanbic, GCB), telecommunications (MTN, Vodafone), technology (Hubtel, Ampersand), manufacturing (Unilever, Nestlé), and professional services (PwC, Deloitte).</p>
      
      <h3>Workshop Sessions</h3>
      <p>Beyond the exhibition floor, attendees participated in career development workshops covering:</p>
      <ul>
        <li>CV writing and personal branding</li>
        <li>Interview preparation and techniques</li>
        <li>LinkedIn optimization for job seekers</li>
        <li>Navigating career transitions</li>
        <li>Entrepreneurship and freelancing</li>
      </ul>
      
      <h3>On-the-Spot Opportunities</h3>
      <p>Several employers conducted preliminary interviews during the expo, with over 50 attendees advancing to second-round interviews. Additionally, 15 Rotaractors secured internship placements through connections made at the event.</p>
      
      <p>"Professional development is a core pillar of Rotaract, and this expo demonstrates our commitment to equipping members for career success," said the Professional Development Chair.</p>
      
      <h3>Mentorship Programme Launch</h3>
      <p>The expo also marked the launch of the District 9104 Career Mentorship Programme, pairing 100 Rotaractors with experienced professionals for six-month mentorship engagements.</p>
    `,
    author: "District Media Team",
    authorRole: "Rotaract District 9104",
    readTime: "5 min read"
  },
  { 
    id: "ri-president-message-2024",
    category: "Rotary", 
    date: "Oct 15, 2024", 
    title: `RI President's Message: ${THEME.name}`, 
    excerpt: "RI President Stephanie Urchick's inspiring message on harnessing the magic within each of us.",
    image: heroSlide2,
    content: `
      <p>Rotary International President Stephanie Urchick delivered an inspiring message to Rotaractors worldwide, emphasizing the unique power of young leaders to create transformative change through service.</p>
      
      <h3>The Magic of Rotary</h3>
      <p>President Urchick's theme, "The Magic of Rotary," calls on members to recognize and amplify the extraordinary impact that happens when dedicated individuals unite for a common purpose. "The magic isn't in tricks or illusions," she explained. "It's in the moments when we see a child receive their first pair of glasses, when clean water flows in a village for the first time, when peace breaks out where there was once conflict."</p>
      
      <h3>Rotaract's Vital Role</h3>
      <p>In her message, President Urchick specifically acknowledged the contributions of Rotaract clubs worldwide. "You are not the future of Rotary—you are Rotary, right now. Your energy, innovation, and commitment are essential to our organization's continued relevance and impact."</p>
      
      <h3>Call to Action</h3>
      <p>The President challenged Rotaract clubs to:</p>
      <ul>
        <li>Expand membership to include diverse voices and perspectives</li>
        <li>Deepen partnerships with Rotary clubs for greater impact</li>
        <li>Document and share success stories to inspire others</li>
        <li>Engage in at least one international service project this year</li>
      </ul>
      
      <p>District 9104 Rotaractors have embraced this challenge, with several clubs already initiating cross-border collaborations with Rotaract clubs in Nigeria, Kenya, and South Africa.</p>
    `,
    author: "District Media Team",
    authorRole: "Rotaract District 9104",
    readTime: "4 min read"
  },
];

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find(p => p.id === id);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post?.title || '';
    
    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  if (!post) {
    return (
      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been moved.</p>
          <Link to="/media/blog" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-dark transition">
  <ArrowLeft size={16} /> Return to Blog
</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHero 
        breadcrumb="Blog" 
        title={post.title} 
        subtitle={post.excerpt}
        image={post.image}
      />
      
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* Back Button */}
          <Link 
            to="/media/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Link>
          
          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-8 pb-6 border-b border-gray-200">
            <span className="bg-accent600 text-primary-dark text-xs font-bold px-3 py-1 rounded-full">
              {post.category}
            </span>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Calendar size={14} />
              {post.date}
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Clock size={14} />
              {post.readTime}
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <User size={14} />
              {post.author}
            </div>
          </div>
          
          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-display prose-a:text-secondary prose-img:rounded-lg prose-img:shadow-md prose-ul:list-disc prose-ol:list-decimal"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <Share2 size={18} className="text-gray-500" />
                <span className="text-gray-700 font-medium">Share this article:</span>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => handleShare('facebook')}
                  className="p-2 rounded-full bg-secondary text-white hover:bg-primary-dark transition-colors"
                  aria-label="Share on Facebook"
                >
                  <Facebook size={18} />
                </button>
                <button 
                  onClick={() => handleShare('twitter')}
                  className="p-2 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter size={18} />
                </button>
                <button 
                  onClick={() => handleShare('linkedin')}
                  className="p-2 rounded-full bg-primary-dark text-white hover:bg-primary transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin size={18} />
                </button>
              </div>
            </div>
          </div>
          
          {/* Author Info */}
          <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-primary mb-1">About the Author</h4>
            <p className="text-gray-700 font-medium">{post.author}</p>
            <p className="text-gray-500 text-sm">{post.authorRole}</p>
          </div>
        </div>
      </section>
      
      {/* Related Posts CTA */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-primary mb-3">Want More Stories?</h3>
          <p className="text-gray-600 mb-6">Explore more updates, projects, and fellowship stories from District 9104.</p>
          <Link 
            to="/media/blog"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-primary-dark transition"
          >
            View All Articles <ArrowLeft size={14} className="rotate-180" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;