import LaunchCard from "./LaunchCard";
import FloatingBackground from "./FloatingBackground";
import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { LAUNCH_DATE } from "../config/site";
import logoSrc from "@/assets/Rotaract Logo_EN21 (3).png";

type Props = { onBypass?: () => void; onComplete?: () => void };

const TARGET = LAUNCH_DATE ? new Date(LAUNCH_DATE) : new Date(Date.now() + 1000 * 60 * 60 * 24 * 7);

export default function LaunchPage({ onBypass, onComplete }: Props) {
  const [target] = useState(TARGET);

  useEffect(() => {
    document.title = "Official Website Launching Soon | Rotaract District 9104 Ghana";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "We're launching the official Rotaract District 9104 Ghana website soon.");
  }, []);

  // small wheel rotation
  const [rot, setRot] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRot((r) => (r + 1) % 360), 40);
    return () => clearInterval(t);
  }, []);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "l") {
        onBypass?.();
      }
    },
    [onBypass]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-slate-50 relative">
      <FloatingBackground />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 w-full max-w-5xl">
        <div className="flex flex-col items-center gap-8">
          <motion.img
            src={logoSrc}
            alt="Rotaract District 9104 Logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-28 h-28 object-contain"
          />

          <LaunchCard targetDate={target} onComplete={onComplete} />

          <div className="text-sm text-slate-500">© 2026 Rotaract District 9104 Ghana — All Rights Reserved.</div>
        </div>
      </motion.div>
    </div>
  );
}