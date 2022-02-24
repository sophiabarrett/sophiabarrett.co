import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  return (
    <Router>
      <div className="page-wrapper">
        <Header />
        <main>
          <Routes>
            <Route exact path="/portfolio/about" element={<About />} />
            <Route exact path="/portfolio/portfolio" element={<Portfolio />} />
            <Route exact path="/portfolio/contact" element={<Contact />} />
            <Route exact path="/portfolio/resume" element={<Resume />} />
            <Route path="portfolio/*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
