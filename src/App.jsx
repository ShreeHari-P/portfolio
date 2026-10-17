import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Tools from "./components/Tools";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased selection:bg-stone-800 selection:text-white min-h-screen">
      {/* Background layer with subtle grid and radial glow */}
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="absolute left-1/2 -translate-x-1/2 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]" />
        </div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
        <Navbar />
        <Hero />
        <Technologies />
        <Tools />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </div>
    </div>
  );
}
