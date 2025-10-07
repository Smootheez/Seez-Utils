import Footer from "@/components/footer";
import BinaryCodeTranslatorClient from "./client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Binary Code Translator | Seez Utils",
  description: "Convert text to binary and vice versa with ease.",
  keywords: [
    "binary code translator",
    "text to binary",
    "binary to text",
    "binary converter",
    "online binary translator",
    "developer tools",
    "coding utility",
    "encryption",
    "data conversion",
    "computer science",
  ],
};

export default function BinaryCodeTranslatorPage() {
  return (
    <main className="max-w-7xl mx-auto px-4">
      <div className="py-4 min-h-screen max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">
          Binary Code Translator
        </h1>
        <p className="text-muted-foreground text-sm md:text-lg mb-8">
          Convert text to binary and vice versa.
        </p>

        {/* Client Component */}
        <BinaryCodeTranslatorClient />
      </div>

      <Footer />
    </main>
  );
}
