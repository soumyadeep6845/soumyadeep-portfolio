import { motion } from "framer-motion";
import { portfolio } from "./data/portfolio";

function App() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold tracking-tight">
          {portfolio.name}
        </h1>

        <p className="mt-4 text-xl text-white/60">
          {portfolio.role}
        </p>
      </motion.div>
    </main>
  );
}

export default App;