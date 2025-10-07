import Footer from "@/components/footer";
import { Metadata } from "next";
import MorseTranslatorClient from "./client";

export const metadata: Metadata = {
  title: "Morse Code Translator | Seez Utils",
  description: "Convert text to Morse code and vice versa.",
  keywords: [
    "morse code translator",
    "text to morse code",
    "morse code to text",
    "morse converter",
    "online morse translator",
    "encryption",
    "data conversion",
    "computer science",
  ],
};

export default function MorseCodeTranslatorPage() {
  return (
    <main className="max-w-7xl mx-auto px-4">
      <div className="py-4 min-h-screen max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">
          Morse Code Translator
        </h1>
        <p className="text-muted-foreground text-sm md:text-lg mb-8">
          Convert text to Morse code and Morse code to text.
        </p>

        {/* Client Component */}
        <MorseTranslatorClient />
      </div>

      <Footer />
    </main>
  );
}
