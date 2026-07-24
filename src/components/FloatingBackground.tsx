import { motion } from "framer-motion";

export default function FloatingBackground() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -left-16 top-8 w-72 h-72 rounded-full bg-gradient-to-br from-[#005DAA]/30 to-rose-400/20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-gradient-to-tr from-rose-400/20 to-[#005DAA]/10 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
