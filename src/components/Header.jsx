import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const mobileNavVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="bg-[#333333] text-yellow py-4 px-6 border-yellow-200 border-b-2">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto relative">
        {/* Logo */}
        <motion.div
          className="text-4xl font-pacifico text-yellow tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Link to="/">Detty VIP</Link>
        </motion.div>

        {/* Nav Menu */}
        <nav className="hidden md:flex space-x-6 font-semibold">
          <Link to="/" className="hover:text-yellow transition-colors text-white">Home</Link>
          <Link to="/about" className="hover:text-yellow transition-colors text-white">About</Link>
          <Link to="/booking" className="hover:text-yellow transition-colors text-white">Booking</Link>
          <Link to="/contact" className="hover:text-yellow transition-colors text-white">Contact</Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <motion.button
            className="text-2xl text-yellow"
            onClick={toggleMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={`fixed inset-0 bg-[#333333] text-yellow flex flex-col justify-center items-center z-50`}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileNavVariants}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-4 left-4">
              <motion.div
                className="text-4xl font-pacifico text-yellow tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Link to="/">Detty VIP</Link>
              </motion.div>
            </div>
            <div className="absolute top-4 right-4">
              <motion.button
                className="text-4xl text-yellow"
                onClick={toggleMenu}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <FaTimes />
              </motion.button>
            </div>
            <nav className="space-y-8 text-2xl font-semibold text-center">
              <Link to="/" className="block hover:text-yellow text-white" onClick={toggleMenu}>Home</Link>
              <Link to="/about" className="block hover:text-yellow text-white" onClick={toggleMenu}>About</Link>
              <Link to="/booking" className="block hover:text-yellow text-white" onClick={toggleMenu}>Booking</Link>
              <Link to="/contact" className="block hover:text-yellow text-white" onClick={toggleMenu}>Contact</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
