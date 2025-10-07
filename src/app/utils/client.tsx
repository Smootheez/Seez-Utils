"use client";

import Footer from "@/components/footer";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion, Variants } from "framer-motion";

const utilsItem = [
  {
    title: "Nether Calculator",
    description: "Calculate distances between Overworld and Nether.",
    href: "/utils/nether-calculator",
    author: "Smootheez",
  },
  {
    title: "Discord Webhook Sender",
    description: "Send messages to Discord via webhooks.",
    href: "/utils/discord-webhook",
    author: "Smootheez",
  },
  {
    title: "Password Generator",
    description: "Create strong, secure passwords.",
    href: "/utils/password-generator",
    author: "Smootheez",
  },
  {
    title: "Binary Code Translator",
    description: "Convert text to binary and vice versa.",
    href: "/utils/binary-code-translator",
    author: "Smootheez",
  },
  {
    title: "Morse Code Translator",
    description: "Translate text to Morse code and vice versa.",
    href: "/utils/morse-code-translator",
    author: "Smootheez",
  },
];

// ✨ Variants
const containerVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
      type: "spring",
      stiffness: 80,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 12 },
  },
};

const MotionSeparator = motion.create(Separator);

export default function UtilsClient() {
  return (
    <main className="max-w-7xl mx-auto p-6">
      <div className="mb-6">
        <div className="mb-2 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: [-50, 10, 0] }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-3xl md:text-4xl font-bold mb-1"
          >
            Choose a Utility
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: [50, -5, 0] }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-muted-foreground text-sm md:text-lg"
          >
            A collection of useful tools and utilities for everyday tasks.
          </motion.p>
        </div>
        <MotionSeparator
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 grid mb-8"
      >
        {utilsItem.map(({ href, title, description, author }) => (
          <UtilsItem
            key={href}
            href={href}
            title={title}
            description={description}
            author={author}
          />
        ))}
      </motion.div>
      <Footer />
    </main>
  );
}

function UtilsItem({
  href,
  title,
  description,
  author,
}: {
  href: string;
  title: string;
  description: string;
  author: string;
}) {
  return (
    <motion.a
      variants={itemVariants}
      href={href}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 14,
      }}
      className="block"    
    >
      <Card className="relative overflow-hidden min-h-55 h-full drop-shadow-lg/40">
        <div className="absolute left-0 top-0 w-1.5 h-full bg-accent" />
        <CardHeader className="p-5">
          <CardTitle>
            <h2 className="text-xl font-bold">{title}</h2>
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
        </CardHeader>
        <CardFooter className="text-xs text-muted-foreground absolute bottom-3 w-full justify-center px-5 font-semibold">
          Author: {author}
        </CardFooter>
      </Card>
    </motion.a>
  );
}
