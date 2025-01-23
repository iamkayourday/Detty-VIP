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
    exit: { opacity: 0, y: -50 },
  };

  return (
    <header className="bg-white border-b-2 py-4 px-6">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto relative">
        {/* Logo */}
        <motion.div
          className="logo text-4xl font-bold text-[#2e5c99] tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Link to="/" className="block">
            Detty VIP
          </Link>
        </motion.div>

        {/* Desktop Nav Menu */}
        <nav className="hidden md:flex space-x-6 text-black">
          <Link to="/" className="hover:text-[#2e5c99] transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-[#2e5c99] transition-colors">
            About
          </Link>
          <Link
            to="/booking"
            className="hover:text-[#2e5c99] transition-colors"
          >
            Booking
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#2e5c99] transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <motion.button
            className="text-2xl text-[#2e5c99]"
            onClick={toggleMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 flex flex-col justify-center items-center z-50 bg-white"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileNavVariants}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-4 left-4 text-4xl font-semibold">
              <motion.div
                className="logo text-4xl font-bold text-[#2e5c99] tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Link to="/" className="block" onClick={toggleMenu}>
                  Detty VIP
                </Link>
              </motion.div>
            </div>
            <div className="absolute top-4 right-4">
              <motion.button
                className="text-3xl text-[#2e5c99]"
                onClick={toggleMenu}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <FaTimes />
              </motion.button>
            </div>
            <nav className="space-y-8 text-xl font-semibold text-center">
              <Link
                to="/"
                className="block text-black hover:text-[#2e5c99]"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-black hover:text-[#2e5c99]"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/booking"
                className="block text-black hover:text-[#2e5c99]"
                onClick={toggleMenu}
              >
                Booking
              </Link>
              <Link
                to="/contact"
                className="block text-black hover:text-[#2e5c99]"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
