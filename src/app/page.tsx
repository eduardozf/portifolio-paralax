import FAQSection from "@/components/FAQ/index";
import HeroSection from "@/components/Hero/index";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FAQSection />
    </main>
  );
}
