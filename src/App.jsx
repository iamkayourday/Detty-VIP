import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header";
import Footer from "./components/Footer";
// import Home from "./Pages/Home";



// Import pages


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen flex-grow">
        {/* Header */}
        <Header />

        {/* Main Content */}
        
          <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
