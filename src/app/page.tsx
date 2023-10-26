"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";

export default function Home() {
  const gateRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: gateRef,
    offset: ["start end", "end end"],
  });

  const rotateRightGate = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const rotateLeftGate = useTransform(scrollYProgress, [0.2, 1], [0, -80]);
  const scaleImage = useTransform(scrollYProgress, [0.1, 0.5], [1, 1]);

  return (
    <main className="min-h-screen p-space-xs-s h-[800vh]">
      <motion.div ref={gateRef} className="h-[400vh] flex relative">
        <motion.div className="bg-primary-950" style={{ scale: scaleImage }}>
          IMAGE
        </motion.div>
        <motion.div
          className="bg-neutral-950 gate-left h-[80vh] grow sticky top-12 grid place-items-center origin-left"
          style={{ rotateY: rotateLeftGate, transformStyle: "preserve-3d" }}
        >
          <span className="text-fluid-3xl text-neutral-100 absolute right-8">
            FEED
          </span>
        </motion.div>
        <motion.div
          className="bg-neutral-950 gate-right h-[80vh] grow sticky top-12 origin-right grid place-items-center"
          style={{ rotateY: rotateRightGate }}
        >
          <span className="text-fluid-3xl text-neutral-100 absolute left-8">
            BEAST
          </span>
        </motion.div>
      </motion.div>
    </main>
  );
}
