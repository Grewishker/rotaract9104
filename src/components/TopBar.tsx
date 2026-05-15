import { THEME } from "@/lib/theme";

const TopBar = () => (
  <div className="w-full bg-pink-600 text-white/80 text-xs py-1.5 px-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-1">
      <span>★ Rotaract District 9104 | Ghana | West Africa </span>
      <span>Theme 2025-2026: {THEME.name} | <a href="/login" className="underline hover:text-white">Member Login</a></span>
    </div>
  </div>
);

export default TopBar;
