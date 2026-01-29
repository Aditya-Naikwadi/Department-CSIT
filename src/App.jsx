import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useEffect } from 'react';

// Pages
import Home from './pages/Home';
import Programs from './pages/Programs';
import Events from './pages/Events';
import Faculty from './pages/Faculty';
import ELibrary from './pages/ELibrary';
import Alumni from './pages/Alumni';
import Gallery from './pages/Gallery';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import GetStarted from './pages/GetStarted';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container min-h-screen flex flex-col bg-[var(--background)] text-[var(--text-main)] font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/e-library" element={<ELibrary />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/get-started" element={<GetStarted />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
