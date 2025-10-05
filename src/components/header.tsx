"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const MotionHeader = motion.header;
const MotionA = motion.a;

// Animation variants
const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

export default function Header() {
  return (
    <MotionHeader
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: [-50, 12, 0], opacity: 1 }} // 👈 keyframes: up -> down -> settle
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // smooth, spring-like curve
      }}
      className="fixed top-0 left-0 w-full z-40 px-4"
    >
      <div className="max-w-7xl mx-auto border-b border-x rounded-full px-4 py-2 mt-3 drop-shadow-lg/20 bg-primary-foreground/20 backdrop-blur-xs flex justify-between items-center">
        <Link
          href="/"
          className="text-4xl font-changa-one tracking-wide hover:text-accent transition-colors"
        >
          Seez Utils
        </Link>

        <DesktopNav />
      </div>
    </MotionHeader>
  );
}

function DesktopNav() {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="flex gap-x-6 font-semibold"
    >
      {[
        {
          href: "/",
          label: "Home",
          desc: "Go to the homepage of Seez Utils.",
        },
        {
          href: "/utils",
          label: "Utils",
          desc: "Start exploring fun and practical utilities.",
        },
        {
          href: "/about",
          label: "About",
          desc: "Learn more about Seez Utils and its creator.",
        },
        {
          href: "/contact",
          label: "Contact",
          desc: "Want to get in touch? Find out how to reach me here.",
        },
      ].map(({ href, label, desc }) => (
        <motion.div key={href} variants={linkVariants}>
          <HoverCard>
            <HoverCardTrigger asChild>
              <MotionA
                href={href}
                whileHover={{
                  scale: 1.1,
                  y: -2,
                  color: "var(--accent)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  color: { duration: 0.25 },
                }}
                className="relative inline-block will-change-transform"
              >
                {label}
                <motion.span
                  className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-accent rounded-full"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </MotionA>
            </HoverCardTrigger>
            <HoverCardContent>{desc}</HoverCardContent>
          </HoverCard>
        </motion.div>
      ))}
    </motion.nav>
  );
}
