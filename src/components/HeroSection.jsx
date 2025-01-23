import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center h-[550px] flex items-center justify-center text-white mt-1 px-4 sm:px-6 md:px-8 lg:px-10" style={{ backgroundImage: 'url(/Hero.jpg)' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto relative z-10 text-center">
        {/* Headline */}
        <motion.h1
          className="text-2xl sm:text-xl md:text-2xl lg:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Fly in Style This Detty December Affordable Luxury Awaits!  
          {/*  <span className="text-[#2e5c99]"></span> */}
        </motion.h1>

        {/* Subheadline */}
        <motion.h2
          className="text-lg sm:text-xl md:text-2xl mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          Experience the perfect blend of comfort, convenience, and class with Detty VIP—your gateway to a stress-free festive season.
        </motion.h2>

        {/* CTA Button */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            animate={{
              y: [0, -10, 0, 10, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <Link
              to="/booking"
              className="px-8 py-3 bg-[#2e5c99] text-charcoal font-semibold text-lg rounded-full hover:bg-[#333] hover:text-white transition-all duration-300"
            >
              Reserve Your Seat Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
