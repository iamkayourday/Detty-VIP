import React from 'react';
import { motion } from 'framer-motion';
import { FaDollarSign, FaAirbnb, FaClipboardCheck } from 'react-icons/fa';

const Features = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      {/* Heading and Subheading */}
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-semibold text-[#fcd34d]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Overview of Our Features
        </motion.h2>
        <motion.p
          className="text-lg text-charcoal mt-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        >
          Discover the premium services that make your experience unforgettable.
        </motion.p>
      </div>

      {/* Feature Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Feature 1 */}
        <motion.div
          className="p-10 rounded-lg shadow-xl text-charcoal transform hover:scale-105 transition duration-300 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="flex justify-center items-center bg-white w-16 h-16 rounded-full shadow-md mx-auto -mt-16 mb-6">
            <FaDollarSign className="text-4xl text-[#ffd700] transform transition-all duration-300 hover:scale-125" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-[#fcd34d]">Affordable Luxury</h3>
          <p className="text-lg">
            Enjoy premium travel without breaking the bank.
          </p>
        </motion.div>

        {/* Feature 2 */}
        <motion.div
          className="p-10 rounded-lg shadow-xl text-charcoal transform hover:scale-105 transition duration-300 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="flex justify-center items-center bg-white w-16 h-16 rounded-full shadow-md mx-auto -mt-16 mb-6">
            <FaAirbnb className="text-4xl text-[#ffd700] transform transition-all duration-300 hover:scale-125" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-[#fcd34d]">VIP Onboard Experience</h3>
          <p className="text-lg">
            Relax in style, and vibe with like-minded travelers.
          </p>
        </motion.div>

        {/* Feature 3 */}
        <motion.div
          className="p-10 rounded-lg shadow-xl text-charcoal transform hover:scale-105 transition duration-300 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
        >
          <div className="flex justify-center items-center bg-white w-16 h-16 rounded-full shadow-md mx-auto -mt-16 mb-6">
            <FaClipboardCheck className="text-4xl text-[#ffd700] transform transition-all duration-300 hover:scale-125" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-[#fcd34d]">Quick and Easy Booking</h3>
          <p className="text-lg">
            No queues, no hassle—just smooth service.
          </p>
        </motion.div>
      </div>

      {/* CTA Button */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <p className="text-2xl font-semibold text-charcoal mb-4">
          Limited seats available—<span className="text-[#fcd34d]">Reserve now!</span>
        </p>
        <motion.button
          className="bg-charcoal text-[#ffd700] py-3 px-10 rounded-full shadow-md transform transition-all duration-300 hover:scale-105"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Reserve Your Seat Now
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Features;
