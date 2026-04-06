import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { RouterContext } from "./context/router";
import About from "./pages/About";
import ActiveProjects from "./pages/ActiveProjects";
import Contact from "./pages/Contact";
// import FacultyAllies from "./pages/FacultyAllies";
import Fellows from "./pages/Fellows";
// import Governance from "./pages/Governance";
import Home from "./pages/Home";
import PastProjects from "./pages/PastProjects";
import Publications from "./pages/Publications";

function getPath() {
  const hash = window.location.hash;
  if (!hash || hash === "#" || hash === "#/") return "/";
  const p = hash.startsWith("#") ? hash.slice(1) : hash;
  return p || "/";
}

function renderPage(path) {
  switch (path) {
    case "/":
      return <Home />;
    case "/about":
      return <About />;
    // case "/people/governance":
    //   return <Governance />;
    // case "/people/faculty-allies":
    //   return <FacultyAllies />;
    case "/people/fellows":
      return <Fellows />;
    case "/research/active-projects":
      return <ActiveProjects />;
    case "/research/past-projects":
      return <PastProjects />;
    case "/publications":
      return <Publications />;
    case "/contact":
      return <Contact />;
    default:
      return <Home />;
  }
}

export default function App() {
  const [path, setPath] = useState(getPath);

  useEffect(() => {
    const handleHashChange = () => {
      setPath(getPath());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigate = (newPath) => {
    window.location.hash = newPath;
  };

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      <div
        className="min-h-screen flex flex-col"
        style={{ background: "var(--cream)" }}
      >
        <Navbar />
        <main className="flex-1 pt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              {renderPage(path)}
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </RouterContext.Provider>
  );
}
