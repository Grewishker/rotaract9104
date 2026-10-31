import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import footerLogo from "@/assets/Club-Rotaract LogoLockup-Template_EN21.png";
import { THEME } from "@/lib/theme";

const socials = [
  { icon: FaFacebookF, href: "#" },
  { icon: FaTwitter, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaLinkedinIn, href: "#" },
  { icon: FaYoutube, href: "#" },
];

const Footer = () => (
  <footer className="bg-primary-dark text-secondary/70">
    <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      <div>
        {/* Logo */}
          <Link
            to="/"
            className="flex"
            aria-label="Go to homepage"
          >
            <img
              src={footerLogo}
              alt={THEME.siteName}
              className="h-20 w-auto"
              loading="eager"
            />
          </Link>
        <p className="text-sm mb-4">{THEME.tagline}</p>
        <div className="flex gap-2">
          {socials.map((s, i) => (
            <a key={i} href={s.href} className="w-8 h-8 rounded-full bg-primary hover:bg-accent600 hover:text-primary-dark flex items-center justify-center transition text-secondary/70">
              <s.icon size={14} />
            </a>
          ))}
        </div>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-4">About</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/about/rotary-international" className="hover:text-white transition">Rotary International</Link></li>
          <li><Link to="/about/rotaract" className="hover:text-white transition">About Rotaract</Link></li>
          <li><Link to="/about/district-9104" className="hover:text-white transition">District 9104</Link></li>
          <li><Link to="/about/drr" className="hover:text-white transition">DRR</Link></li>
          <li><Link to="/about/team" className="hover:text-white transition">District Team</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-4">Projects & Media</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/projects/signature" className="hover:text-white transition">Signature Projects</Link></li>
          <li><Link to="/projects/club-projects" className="hover:text-white transition">Club Projects</Link></li>
          <li><Link to="/media/blog" className="hover:text-white transition">Blog</Link></li>
          <li><Link to="/media/gallery" className="hover:text-white transition">Gallery</Link></li>
          <li><Link to="/media/videos" className="hover:text-white transition">Videos</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-4">Events & Connect</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/events/dlac" className="hover:text-white transition">DLAC 2027</Link></li>
          <li><Link to="/events/calendar" className="hover:text-white transition">Event Calendar</Link></li>
          <li><Link to="/contact/club-locator" className="hover:text-white transition">Club Locator</Link></li>
          <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
          <li><Link to="/donate" className="hover:text-white transition">Donate</Link></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-primary">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-secondary">
        <span>© {THEME.copyrightYear} {THEME.siteName}, Ghana. All rights reserved.</span>
        <span>Service Above Self • {THEME.name}</span>
      </div>
    </div>
  </footer>
);

export default Footer;
