import SplashCursor from "../components/SplashCursor";
import FloatingDockDemo from "../components/ui/floating-dock-demo";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Sosmed from "../components/Sosmed";

export default function Home() {
  return (
    <div className="app-root">
      <SplashCursor 
        SIM_RESOLUTION={32}
        DYE_RESOLUTION={512}
        PRESSURE_ITERATIONS={8}
      />
      
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
        <FloatingDockDemo />
      </div>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Sosmed />
      </main>
    </div>
  );
}
