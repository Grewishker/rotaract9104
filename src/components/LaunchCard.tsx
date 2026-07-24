import Countdown from "./Countdown";
import SocialLinks from "./SocialLinks";
import { motion } from "framer-motion";

type LaunchCardProps = {
  targetDate: Date;
  onComplete?: () => void;
};

export default function LaunchCard({ targetDate, onComplete }: LaunchCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl w-full bg-white/60 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-lg"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-accent">Official Website Launching Soon</h1>
          <p className="mt-3 text-slate-700 max-w-xl">
            We're putting the finishing touches on our new digital experience. Thank you for your
            patience—we can't wait to welcome you.
          </p>
          <div className="mt-6">
            <div className="text-sm text-slate-600">Launch Date</div>
            <div className="font-medium">{targetDate.toLocaleDateString()}</div>
            <div className="text-sm text-slate-600">Launch Time</div>
            <div className="font-medium">{targetDate.toLocaleTimeString()}</div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="mb-4">
            <Countdown targetDate={targetDate} onComplete={onComplete} />
          </div>
          {/* <div className="flex gap-3 mt-4">
            <button className="px-4 py-2 rounded-md bg-[#005DAA] text-white hover:brightness-110 transition">
              Notify Me
            </button>
            <button className="px-4 py-2 rounded-md border border-slate-200 hover:bg-white/50 transition">
              Learn More
            </button>
          </div> */}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-slate-600 font-display-italic">Fellowship...True Service</div>
        <SocialLinks />
      </div>
    </motion.div>
  );
}
