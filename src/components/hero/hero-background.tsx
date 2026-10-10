"use client";

import { motion, useMotionTemplate, type MotionValue } from "motion/react";

type Props = {
  /** Pointer position in px, relative to the hero */
  px: MotionValue<number>;
  py: MotionValue<number>;
};

/** Drifting aurora blobs, a fading grid and a soft spotlight that follows the cursor. */
export default function HeroBackground({ px, py }: Props) {
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${px}px ${py}px, rgba(167, 139, 250, 0.14), transparent 70%)`;

  return (
    <>
      <div className="hero-grid absolute inset-0" />

      <motion.div
        className="absolute -left-[12%] top-[2%] h-[46vmax] w-[46vmax] rounded-full bg-[#a78bfa]/20 blur-[120px]"
        animate={{ x: [0, 90, -30, 0], y: [0, 60, 20, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[12%] top-[18%] h-[40vmax] w-[40vmax] rounded-full bg-[#d6c4ff]/15 blur-[120px]"
        animate={{ x: [0, -80, 30, 0], y: [0, -40, 50, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-[25%] left-[28%] h-[36vmax] w-[36vmax] rounded-full bg-[#7c5cd6]/20 blur-[120px]"
        animate={{ x: [0, 60, -60, 0], y: [0, -50, -20, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Only devices with a precise pointer get the spotlight */}
      <motion.div
        className="absolute inset-0 hidden [@media(pointer:fine)]:block"
        style={{ background: spotlight }}
      />

      {/* Soft fade into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#0c0a0f]" />
    </>
  );
}
