import { useState } from "react";
import PageHero from "../components/PageHero";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import heroAboutImg from "../assets/hero-about.jpg";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", club: "", subject: "General Inquiry", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <PageHero breadcrumb="Contact" title="Contact Us" subtitle="Get in touch with Rotaract District 9104" image={heroAboutImg} />
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1fr_380px] gap-10">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input name="name" value={form.name} onChange={handleChange} className="w-full border border-secondary/20 rounded px-3 py-2 focus:outline-none focus:border-secondary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full border border-secondary/20 rounded px-3 py-2 focus:outline-none focus:border-secondary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Club (Optional)</label>
              <input name="club" value={form.club} onChange={handleChange} className="w-full border border-secondary/20 rounded px-3 py-2 focus:outline-none focus:border-secondary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <select name="subject" value={form.subject} onChange={handleChange} className="w-full border border-secondary/20 rounded px-3 py-2 focus:outline-none focus:border-secondary">
                <option>General Inquiry</option>
                <option>Membership</option>
                <option>Events</option>
                <option>Partnerships</option>
                <option>Media</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea name="message" rows={5} value={form.message} onChange={handleChange} className="w-full border border-secondary/20 rounded px-3 py-2 focus:outline-none focus:border-secondary" />
            </div>
            <button type="submit" className="bg-accent600 text-primary-dark font-semibold px-6 py-3 rounded hover:bg-secondary transition">Send Message</button>
          </form>
          <div className="space-y-6">
            <div className="bg-primary-dark text-white border-l-4 border-secondary p-6 rounded-r-lg">
              <h3 className="text-white font-display font-bold text-xl mb-3">Contact Info</h3>
              <div className="text-white/90 text-sm space-y-2">
                <p>📧 info@rotaractd9104.org</p>
                <p>📱 +233 XX XXX XXXX</p>
                <p>📍 Accra, Ghana</p>
                <p>🕐 Mon–Fri: 9AM–5PM GMT</p>
              </div>
            </div>
            <div className="flex gap-2">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-primary hover:bg-accent600 hover:text-primary-dark flex items-center justify-center transition text-white/90">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
