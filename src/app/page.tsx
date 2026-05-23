import LoadingScreen from "../components/LoadingScreen";
import FloatingDockDemo from "../components/ui/floating-dock-demo";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="app-root">
      <LoadingScreen />

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
        <FloatingDockDemo />
      </div>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
