"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Coffee, Heart } from "lucide-react";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: [50, -12, 0], opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="max-w-7xl mx-auto bg-primary-foreground/20 drop-shadow-lg/20 px-6 py-8 border-x border-t mb-4 rounded-t-xl mt-8"
    >
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        {/* Brand */}
        <Link
          href="/"
          className="text-2xl font-changa-one tracking-wide hover:text-accent transition-colors"
        >
          Seez Utils
        </Link>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <Link
            href="https://github.com/smootheez/seez-utils"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-accent transition-colors"
          >
            <Github size={16} />
            Source Code
          </Link>

          <Link
            href="https://paypal.me/smootheez"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-accent transition-colors"
          >
            <Heart size={16} />
            Donate via PayPal
          </Link>

          <Link
            href="https://ko-fi.com/smootheez"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-accent transition-colors"
          >
            <Coffee size={16} />
            Support on Ko-fi
          </Link>
        </div>
      </div>

      <Separator />
      {/* Divider */}
      <div className="pt-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Seez Utils — Built with ❤️ by{" "}
        <Link
          href="https://github.com/smootheez"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors font-medium"
        >
          Smootheez
        </Link>
      </div>
    </motion.footer>
  );
}
