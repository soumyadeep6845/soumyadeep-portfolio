import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RecruiterSnapshot from "./components/RecruiterSnapshot";
import Impact from "./components/Impact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";

function App() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <Hero />

      <RecruiterSnapshot />

      <Impact />

      <Projects />

      <Experience />

      <Skills />

      <Achievements />

      <About />

      <Contact />
    </main>
  );
}

export default App;