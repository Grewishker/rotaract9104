import PageHero from "../components/PageHero";
import heroAboutImg from "../assets/hero-about.jpg";

const videos = [
  {
    title: "District Leadership Showcase",
    desc: "Watch Rotaract District 9104 leaders share progress, partnerships, and community impact.",
    videoId: "vYQZUg8A2vQ",
  },
  {
    title: "Service Impact Stories",
    desc: "See how youth-led projects are improving health, education, and sustainability across Ghana.",
    videoId: "AQZDVRBx8wM",
  },
  {
    title: "Environmental Action Highlights",
    desc: "Experience the Green Ghana initiative and district clean-up campaigns in action.",
    videoId: "XBu-kSvynfc",
  },
  {
    title: "Fellowship & Leadership",
    desc: "Join moments from fellowship events, leadership training, and membership celebrations.",
    videoId: "HLHaZHOtULs",
  },
  {
    title: "Blood Donation Drive Recap",
    desc: "Relive the community blood donation campaign that supported regional health services.",
    videoId: "k4lfmud8rW0",
  },
];

const VideosPage = () => (
  <div>
    <PageHero breadcrumb="Media" title="Videos" subtitle="Watch stories of service, leadership, and fellowship from District 9104" image={heroAboutImg} />
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm text-center">
          <h2 className="font-display text-primary text-3xl font-bold mb-3">District Video Library</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore a curated playlist of District 9104 videos. Each embed plays directly from YouTube so you can watch our service stories without leaving the page.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {videos.map((video) => (
            <div key={video.videoId} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[16/9] bg-black">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-primary mb-2">{video.title}</h3>
                <p className="text-slate-600 mb-4">{video.desc}</p>
                <a
                  href={`https://youtu.be/${video.videoId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex text-sm font-medium text-primary hover:text-secondary"
                >
                  Open on YouTube
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default VideosPage;
