import { AnimatePresence, motion } from "motion/react";
import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import { RouterContext } from "./context/router";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const GovernanceFacultyAdvocates = lazy(() => import("./pages/GovernanceFacultyAdvocates"));
const Fellows = lazy(() => import("./pages/Fellows"));
const Partners = lazy(() => import("./pages/Partners"));
const ActiveProjects = lazy(() => import("./pages/ActiveProjects"));
const PastProjects = lazy(() => import("./pages/PastProjects"));
const Publications = lazy(() => import("./pages/Publications"));
const Contact = lazy(() => import("./pages/Contact"));

function PageLoader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        style={{
          width: 40,
          height: 40,
          border: "4px solid var(--cream)",
          borderTop: "4px solid var(--orange)",
          borderRadius: "50%",
        }}
      />
    </div>
  );
}

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
    case "/people/governance&faculty-allies":
      return <GovernanceFacultyAdvocates />;
    case "/people/fellows":
      return <Fellows />;
    case "/people/partners":
      return <Partners />;
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
  const [loading, setLoading] = useState(true);

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

  const handlePreloaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {loading && <Preloader onComplete={handlePreloaderComplete} />}
      <div
        className="min-h-screen flex flex-col"
        style={{
          background: "var(--cream)",
          opacity: loading ? 0 : 1,
          transition: "opacity 0.4s ease",
        }}
      >
        <Navbar />
        <main className="flex-1 pt-16">
          <Suspense fallback={<PageLoader />}>
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
          </Suspense>
        </main>
        <Footer />
      </div>
    </RouterContext.Provider>
  );
}
