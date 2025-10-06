"use client";

import { motion } from "framer-motion";

const description = "Your one-stop shop for handy tools and playful projects.";
const welcomeText = "Welcome to Seez Utils!";

const containerOne = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.13 },
  },
};

const containerTwo = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const childDown = {
  hidden: { opacity: 0, y: `-0.25em` },
  visible: { opacity: 1, y: `0em` },
};

const childUp = {
  hidden: { opacity: 0, y: `0.25em` },
  visible: { opacity: 1, y: `0em` },
};

export default function HeroSection() {
    return (
      <>
        <motion.h1
          variants={containerOne}
          initial="hidden"
          animate="visible"
          className="text-5xl font-extrabold"
          style={{ display: "flex", gap: "0.05em" }}
        >
          {welcomeText.split("").map((char, i) => (
            <motion.span key={i} variants={childDown}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          variants={containerTwo}
          initial="hidden"
          animate="visible"
          style={{ display: "flex", gap: "0.05em" }}
          className="text-xl text-muted-foreground"
        >
          {description.split("").map((char, i) => (
            <motion.span key={i} variants={childUp}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.p>
      </>
    );
}