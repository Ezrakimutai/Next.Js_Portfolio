import Image from "next/image";
import IntroSection from "@/components/IntroSection";
import Navbar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <IntroSection />
      </div>
    </main>
  );
}
