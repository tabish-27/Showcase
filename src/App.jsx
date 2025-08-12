import './App.css'
import Home from "./Components/Pages/Home.jsx"
import About from "./Components/Pages/About.jsx"
import Header from './Components/Pages/Header.jsx'
import Experience from './Components/Pages/Experience.jsx';
import Education from './Components/Pages/Education.jsx';
import Skills from './Components/Pages/Skills.jsx';
import Projects from './Components/Pages/Projects.jsx';
import Footer from './Components/Pages/Footer.jsx';
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-blue-600 dark:bg-purple-600 text-white shadow-lg hover:bg-blue-700 dark:hover:bg-purple-700 focus:outline-none"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={22} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <main className="w-full">
        <Home />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
      </main>
      <Footer/>
      <ScrollToTopButton />
    </div>
  );
}

export default App;