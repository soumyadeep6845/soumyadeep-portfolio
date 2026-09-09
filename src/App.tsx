import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RecruiterSnapshot from "./components/RecruiterSnapshot";
import Impact from "./components/Impact";

function App() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <Hero />

      <RecruiterSnapshot />

      <Impact />
    </main>
  );
}

export default App;