import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      className="bg-[#333333] text-yellow py-8"
      initial="hidden"
      animate="visible"
      variants={footerVariants}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto text-center space-y-4">
        {/* Links */}
        <div className="space-x-4">
          <motion.a href="/about" className="hover:text-yellow transition-colors">
            About Us
          </motion.a>
          <motion.a href="/terms" className="hover:text-yellow transition-colors">
            Terms & Conditions
          </motion.a>
          <motion.a href="/privacy" className="hover:text-yellow transition-colors">
            Privacy Policy
          </motion.a>
        </div>

        {/* Social Media Icons */}
        <div className="space-x-4">
          <motion.a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <FaFacebook className="inline-block text-2xl" />
          </motion.a>
          <motion.a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <FaTwitter className="inline-block text-2xl" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <FaInstagram className="inline-block text-2xl" />
          </motion.a>
        </div>

        {/* Copyright */}
        <p className="text-yellow">
          &copy; 2025 Detty VIP. All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
