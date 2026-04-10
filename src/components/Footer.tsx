import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const socials = [
  { icon: FaFacebookF, href: "#" },
  { icon: FaTwitter, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaLinkedinIn, href: "#" },
  { icon: FaYoutube, href: "#" },
];

const Footer = () => (
  <footer className="bg-blue-900 text-blue-300">
    <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center">
            <span className="text-yellow-400 font-display font-bold text-xs">RAC<br/>D9104</span>
          </div>
          <div>
            <h3 className="text-white font-display font-bold text-lg">Rotaract District 9104</h3>
            <p className="text-blue-400 text-xs">Ghana • West Africa</p>
          </div>
        </div>
        <p className="text-sm mb-4">Service Above Self — empowering young leaders across Ghana through Rotaract.</p>
        <div className="flex gap-2">
          {socials.map((s, i) => (
            <a key={i} href={s.href} className="w-8 h-8 rounded-full bg-blue-800 hover:bg-yellow-400 hover:text-blue-900 flex items-center justify-center transition text-blue-300">
              <s.icon size={14} />
            </a>
          ))}
        </div>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-4">About</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/about/rotary-international" className="hover:text-yellow-400 transition">Rotary International</Link></li>
          <li><Link to="/about/rotaract" className="hover:text-yellow-400 transition">About Rotaract</Link></li>
          <li><Link to="/about/district-9104" className="hover:text-yellow-400 transition">District 9104</Link></li>
          <li><Link to="/about/drr" className="hover:text-yellow-400 transition">DRR</Link></li>
          <li><Link to="/about/team" className="hover:text-yellow-400 transition">District Team</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-4">Projects & Media</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/projects/signature" className="hover:text-yellow-400 transition">Signature Projects</Link></li>
          <li><Link to="/projects/club-projects" className="hover:text-yellow-400 transition">Club Projects</Link></li>
          <li><Link to="/media/blog" className="hover:text-yellow-400 transition">Blog</Link></li>
          <li><Link to="/media/gallery" className="hover:text-yellow-400 transition">Gallery</Link></li>
          <li><Link to="/media/videos" className="hover:text-yellow-400 transition">Videos</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-4">Events & Connect</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/events/dlac" className="hover:text-yellow-400 transition">DLAC 2025</Link></li>
          <li><Link to="/events/calendar" className="hover:text-yellow-400 transition">Event Calendar</Link></li>
          <li><Link to="/contact/club-locator" className="hover:text-yellow-400 transition">Club Locator</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400 transition">Contact Us</Link></li>
          <li><Link to="/donate" className="hover:text-yellow-400 transition">Donate</Link></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-blue-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-blue-400">
        <span>© 2025 Rotaract District 9104, Ghana. All rights reserved.</span>
        <span>Service Above Self • The Magic of Rotary</span>
      </div>
    </div>
  </footer>
);

export default Footer;
