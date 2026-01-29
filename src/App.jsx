
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Placeholder Pages
import Home from './pages/Home';
const Programs = () => <div className="p-8 text-center pt-24"><h1>Programs Page</h1></div>;
const Events = () => <div className="p-8 text-center pt-24"><h1>Events Page</h1></div>;
const Faculty = () => <div className="p-8 text-center pt-24"><h1>Faculty Page</h1></div>;
const ELibrary = () => <div className="p-8 text-center pt-24"><h1>E-Library Page</h1></div>;
const Alumni = () => <div className="p-8 text-center pt-24"><h1>Alumni Page</h1></div>;
const Gallery = () => <div className="p-8 text-center pt-24"><h1>Gallery Page</h1></div>;
const AboutUs = () => <div className="p-8 text-center pt-24"><h1>About Us Page</h1></div>;
const ContactUs = () => <div className="p-8 text-center pt-24"><h1>Contact Us Page</h1></div>;
const GetStarted = () => <div className="p-8 text-center pt-24"><h1>Get Started / Login</h1></div>;

function App() {
  return (
    <Router>
      <div className="app-container min-h-screen flex flex-col">
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
