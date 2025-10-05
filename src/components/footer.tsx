"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: [50, -12, 0], opacity: 1 }} // 👈 keyframes: up -> down -> settle
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // smooth, spring-like curve
      }}
      className="max-w-7xl mx-auto bg-primary-foreground/20 drop-shadow-lg/20 px-4 py-8 border-x border-t mb-4 rounded-t-xl mt-8"
    >
      <Link
        href="/"
        className="text-2xl font-changa-one tracking-wide hover:text-accent transition-colors"
      >
        Seez Utils
      </Link>
    </motion.footer>
  );
}
