import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center min-h-screen flex items-center justify-center text-white" style={{ backgroundImage: 'url(/Hero.jpg)' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto px-6 py-20 relative z-10 text-center">
        {/* Headline */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Fly in Style This <span className="text-yellow-500">Detty December</span> – Affordable Luxury Awaits!
        </motion.h1>

        {/* Subheadline */}
        <motion.h2
          className="text-2xl md:text-3xl mb-8"
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
              className="px-8 py-3 bg-yellow-500 text-charcoal font-semibold text-lg rounded-full hover:bg-[#333] hover:text-white transition-all duration-300"
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
