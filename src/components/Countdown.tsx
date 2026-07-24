import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CountdownProps = {
  targetDate: Date;
  onComplete?: () => void;
};

const pad = (n: number) => String(n).padStart(2, "0");

export default function Countdown({ targetDate, onComplete }: CountdownProps) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const diff = Math.max(0, targetDate.getTime() - now.getTime());
  const seconds = Math.floor(diff / 1000);
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  useEffect(() => {
    if (diff === 0 && onComplete) onComplete();
  }, [diff, onComplete]);

  const groups = [
    { label: "Days", value: pad(days) },
    { label: "Hours", value: pad(hours) },
    { label: "Minutes", value: pad(minutes) },
    { label: "Seconds", value: pad(secs) },
  ];

  return (
    <div className="flex gap-3 items-center justify-center" role="timer" aria-live="polite">
      {groups.map((g, i) => (
        <div key={g.label} className="text-center">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={g.value}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl min-w-[64px]"
            >
              <div className="text-2xl md:text-3xl font-semibold text-accent">{g.value}</div>
            </motion.div>
          </AnimatePresence>
          <div className="text-xs text-slate-600 mt-2">{g.label}</div>
        </div>
      ))}
    </div>
  );
}
