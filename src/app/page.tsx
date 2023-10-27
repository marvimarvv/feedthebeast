"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import Image from "next/image";
import eyeImageSrc from "../../public/images/eye.jpg";
import { useRef } from "react";

export default function Home() {
  const gateRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: gateRef,
    offset: ["start end", "end end"],
  });

  const rotateRightGate = useTransform(scrollYProgress, [0, 0.8], [0, 80]);
  const rotateLeftGate = useTransform(scrollYProgress, [0, 0.8], [0, -80]);
  const scaleGate = useTransform(scrollYProgress, [0.6, 1], [1, 5]);
  const scaleImage = useTransform(scrollYProgress, [0.5, 1], [0, 5]);

  return (
    <main className="min-h-screen h-[800vh] overflow-clip">
      <motion.div className="mix-blend-color-burn fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div style={{ scale: scaleImage }}>
          <Image
            alt="Human eye photograph"
            src={eyeImageSrc}
            width={400}
            height={400}
          />
        </motion.div>
      </motion.div>
      <motion.div ref={gateRef} className="h-[400vh] origin-top">
        <motion.div
          className="fixed w-full mix-blend-color-burn"
          style={{ scale: scaleGate }}
        >
          <motion.div
            className="bg-black gate-left h-[80vh] w-1/2 sticky top-12 inline-grid place-items-center origin-left gate-mask"
            style={{ rotateY: rotateLeftGate }}
          >
            <span className="text-fluid-3xl text-neutral-100 absolute right-8 gate-text-mask">
              FEED
            </span>
          </motion.div>
          <motion.div
            className="bg-black gate-right h-[80vh] w-1/2 sticky top-12 origin-right inline-grid place-items-center gate-mask"
            style={{ rotateY: rotateRightGate }}
          >
            <span className="text-fluid-3xl text-neutral-100 absolute left-8 gate-text-mask">
              BEAST
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  );
}
