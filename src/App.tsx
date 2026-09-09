import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RecruiterSnapshot from "./components/RecruiterSnapshot";
import Impact from "./components/Impact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";

function App() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <Hero />

      <RecruiterSnapshot />

      <Impact />

      <Experience />

      <Projects />

      <Skills />

      <About />
    </main>
  );
}

export default App;