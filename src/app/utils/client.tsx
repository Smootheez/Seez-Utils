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
    title: "Lorem Ipsum",
    description: "Generate lorem ipsum placeholder text.",
    href: "/utils/lorem-ipsum",
    author: "Smootheez",
  },
  {
    title: "Password Generator",
    description: "Create strong, secure passwords.",
    href: "/utils/password-generator",
    author: "Smootheez",
  },
  {
    title: "Unit Converter",
    description: "Convert between various units of measurement.",
    href: "/utils/unit-converter",
    author: "Smootheez",
  },
  {
    title: "Color Picker",
    description: "Select and get color codes.",
    href: "/utils/color-picker",
    author: "Smootheez",
  },
  {
    title: "Markdown Preview",
    description: "Render Markdown in real-time.",
    href: "/utils/markdown-preview",
    author: "Smootheez",
  },
  {
    title: "JSON Formatter",
    description: "Format and validate JSON data.",
    href: "/utils/json-formatter",
    author: "Smootheez",
  },
  {
    title: "Base64 Encoder/Decoder",
    description: "Encode and decode Base64 strings.",
    href: "/utils/base64",
    author: "Smootheez",
  },
  {
    title: "QR Code Generator",
    description: "Create QR codes from text or URLs.",
    href: "/utils/qr-code",
    author: "Smootheez",
  },
  {
    title: "Timestamp Converter",
    description: "Convert between timestamps and readable dates.",
    href: "/utils/timestamp",
    author: "Smootheez",
  },
  {
    title: "Text Case Converter",
    description: "Convert text between different cases.",
    href: "/utils/text-case",
    author: "Smootheez",
  },
  {
    title: "URL Encoder/Decoder",
    description: "Encode and decode URL components.",
    href: "/utils/url-encoder",
    author: "Smootheez",
  },
  {
    title: "Image Compressor",
    description: "Compress images without losing quality.",
    href: "/utils/image-compressor",
    author: "Smootheez",
  },
  {
    title: "Currency Converter",
    description: "Convert between different currencies.",
    href: "/utils/currency-converter",
    author: "Smootheez",
  },
  {
    title: "Random Number Generator",
    description: "Generate random numbers within a range.",
    href: "/utils/random-number",
    author: "Smootheez",
  },
  {
    title: "HTML Escape/Unescape",
    description: "Escape and unescape HTML characters.",
    href: "/utils/html-escape",
    author: "Smootheez",
  },
  {
    title: "CSS Formatter",
    description: "Format and beautify CSS code.",
    href: "/utils/css-formatter",
    author: "Smootheez",
  },
  {
    title: "SVG Optimizer",
    description: "Optimize and compress SVG files.",
    href: "/utils/svg-optimizer",
    author: "Smootheez",
  },
  {
    title: "Regex Tester",
    description: "Test and debug regular expressions.",
    href: "/utils/regex-tester",
    author: "Smootheez",
  },
  {
    title: "File Hash Generator",
    description: "Generate file hashes (MD5, SHA-1, etc.).",
    href: "/utils/file-hash",
    author: "Smootheez",
  },
  {
    title: "IP Address Lookup",
    description: "Get information about IP addresses.",
    href: "/utils/ip-lookup",
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
