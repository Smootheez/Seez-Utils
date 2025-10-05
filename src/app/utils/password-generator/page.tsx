import { Metadata } from "next";
import PasswordGeneratorClient from "./client";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Password Generator | Seez Utils",
  description:
    "Generate strong and secure passwords with customizable options.",
  keywords: [
    "password generator",
    "secure password",
    "strong password",
    "random password",
    "password creator",
    "online password tool",
    "Seez Utils",
  ],
};

export default function PasswordGeneratorPage() {
  return (
    <main className="px-4 pt-4">
      <div className="min-h-screen flex items-center justify-center">
        <PasswordGeneratorClient />
      </div>

      <Footer />
    </main>
  );
}
