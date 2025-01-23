import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Flights from "./Pages/Flights";
// import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";



// Import pages


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen flex-grow">
        {/* Header */}
        <Header />

        {/* Main Content */}
        
          <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Flights />} />
          <Route path="/contact" element={<Contact />} /> */}
          </Routes>

        {/* Footer */}
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
