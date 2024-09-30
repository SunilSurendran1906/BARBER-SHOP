import "./App.css"; // Ensure Tailwind CSS is imported here
import { Navbar } from "./components/Navbar/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer/Footer.jsx";
function App() {
  return (
    <div className="App max-w-[1491px] w-full mx-auto bg-gray-250">
      <div className="shadow-2xl bg-white">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
