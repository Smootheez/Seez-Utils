import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto">
        <section
          id="hero"
          className="min-h-screen flex flex-col justify-center items-center text-shadow-sm"
        >
          <HeroSection />
        </section>
      </main>
      <Footer />
    </>
  );
}
