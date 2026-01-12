import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import About from "./pages/About"

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      {<NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:projectId" element={<ProjectDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {<Footer />}
    </Router>
  );
}

export default App;
