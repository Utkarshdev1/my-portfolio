import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";

const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Skills = lazy(() => import("./components/Skills"));
const SeedFusion = lazy(() => import("./components/Seedfusion"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Suspense fallback={null}>
        <Projects />
        <Experience />
        <Skills />
        <SeedFusion />
        <Contact />
      </Suspense>
    </main>
  );
}

export default App;
