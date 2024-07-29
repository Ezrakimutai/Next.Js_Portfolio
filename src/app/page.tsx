import IntroSection from "@/components/IntroSection";
import Image from "next/image";
import Navbar from "@/components/NavBar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <IntroSection />
        <About />
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </main>
  );
}
