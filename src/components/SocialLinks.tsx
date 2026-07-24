import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const ICON_CLASSES = "w-5 h-5";

export default function SocialLinks() {
  const links = [
    { href: "https://www.facebook.com/rotaract9104", label: "Facebook", icon: FaFacebookF },
    { href: "https://www.instagram.com/rotaract9104", label: "Instagram", icon: FaInstagram },
    { href: "https://www.linkedin.com/company/rotaract9104", label: "LinkedIn", icon: FaLinkedinIn },
    { href: "https://twitter.com/rotaract9104", label: "X", icon: FaTwitter },
    { href: "https://www.youtube.com/rotaract9104", label: "YouTube", icon: FaYoutube },
  ];

  return (
    <div className="flex gap-3">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          aria-label={l.label}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors"
        >
          <l.icon className={ICON_CLASSES} />
        </a>
      ))}
    </div>
  );
}
