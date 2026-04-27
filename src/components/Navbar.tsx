import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import logo from "@/assets/9104-Rotary-Logo-Cld2x-1-1.png";

const navItems = [
  { label: "Home", to: "/" },
  {
    label: "About", children: [
      { label: "Rotary International", to: "/about/rotary-international" },
      { label: "About Rotaract", to: "/about/rotaract" },
      { label: "About District 9104", to: "/about/district-9104" },
      { label: "District Rotaract Representative (DRR)", to: "/about/drr" },
      { label: "District Team", to: "/about/team" },
    ]
  },
  {
    label: "Projects", children: [
      { label: "Signature District Projects", to: "/projects/signature" },
      { label: "Club Projects", to: "/projects/club-projects" },
      // { label: "Professional Development", to: "/projects/professional-dev" },
      { label: "Community Service Notices", to: "/projects/service-notices" },
    ]
  },
  {
    label: "Media", children: [
      { label: "Blog", to: "/media/blog" },
      // { label: "DRR's Official Visits", to: "/media/drr-visits" },
      { label: "Event Flyers", to: "/media/flyers" },
      { label: "Gallery", to: "/media/gallery" },
      { label: "District Newsletters", to: "/media/newsletters/district" },
      { label: "RI News", to: "/media/newsletters/ri-news" },
      // { label: "Zone 22 & 22A Updates", to: "/media/newsletters/zone-updates" },
      // { label: "RI Special Updates", to: "/media/ri-updates" },
      { label: "Videos", to: "/media/videos" },
    ]
  },
  {
    label: "Events", children: [
      { label: "DLAC Registration", to: "/events/dlac" },
      { label: "District Event Calendar", to: "/events/calendar" },
      { label: "Event Flyers", to: "/events/flyers" },
    ]
  },
  {
    label: "Contact", children: [
      { label: "Club Locator", to: "/contact/club-locator" },
      // { label: "Contact Form", to: "/contact" },
    ]
  },
  { label: "Donate", to: "/donate" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-40 bg-white border-b-4 border-accent600 shadow">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
          <Link
            to="/"
            className="flex items-center justify-between shrink-0"
            aria-label="Go to homepage"
          >
            <img
              src={logo}
              alt="Rotaract District 9104"
              className="h-32 w-auto"
              loading="eager"
            />
          </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded transition ${location.pathname.startsWith("/" + item.label.toLowerCase()) ? "text-accent600" : "text-gray-700 hover:text-primary"}`}>
                  {item.label} <FaChevronDown size={10} />
                </button>
                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 bg-white border-t-4 border-accent600 shadow-lg rounded-b-lg min-w-[240px] py-2 z-50">
                    {item.children.map((child) => (
                      <Link key={child.to} to={child.to} className="block px-4 py-2 text-sm text-gray-700 hover:bg-secondary/5 hover:text-primary transition">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.label} to={item.to!} className={`px-3 py-2 text-sm font-medium rounded transition ${location.pathname === item.to ? "text-accent600" : "text-gray-700 hover:text-primary"}`}>
                {item.label}
              </Link>
            )
          )}
          <Link to="/join" className="ml-2 bg-accent600 text-slate-50 font-bold rounded px-4 py-2 text-sm hover:bg-secondary hover:text-primary-dark transition">
            Join Rotaract
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button className="lg:hidden text-primary" onClick={() => setMobileOpen(true)}>
          <FaBars size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-primary-dark z-50 overflow-y-auto">
          <div className="flex justify-between items-center p-4 border-b border-primary">
            <span className="text-white font-display font-bold text-lg">Menu</span>
            <button onClick={() => setMobileOpen(false)} className="text-white"><FaTimes size={24} /></button>
          </div>
          <div className="p-4 space-y-2">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    className="w-full text-left text-white font-semibold py-2 flex items-center justify-between"
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  >
                    {item.label} <FaChevronDown size={12} className={`transition ${openDropdown === item.label ? "rotate-180" : ""}`} />
                  </button>
                  {openDropdown === item.label && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link key={child.to} to={child.to} onClick={() => setMobileOpen(false)} className="block text-secondary/50 py-1 hover:text-accent600 text-sm">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.label} to={item.to!} onClick={() => setMobileOpen(false)} className="block text-white font-semibold py-2 hover:text-accent600">
                  {item.label}
                </Link>
              )
            )}
            <Link to="/join" onClick={() => setMobileOpen(false)} className="block mt-4 bg-accent600 text-primary-dark font-bold rounded px-4 py-3 text-center hover:bg-secondary transition">
              Join Rotaract
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
