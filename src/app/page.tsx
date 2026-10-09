import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import ClothingSection from "@/components/ClothingSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      <Hero />
      <NewArrivals />
      <ClothingSection />
    </main>
  );
}
