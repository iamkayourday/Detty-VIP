import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <motion.div
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('/About_hero.webp')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="absolute bottom-6 left-6 bg-white bg-opacity-70 p-6 rounded-lg max-w-lg"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-3xl font-bold text-[#2e5c99]">About Detty VIP</h1>
          <h2 className="text-xl font-semibold text-gray-800 mt-2">
            Luxury Travel, Designed for Detty December
          </h2>
        </motion.div>
      </motion.div>

      {/* Content Section */}
      <div className="max-w-screen-lg mx-auto px-6 py-12 space-y-12">
        {/* Mission Section */}
        <motion.section
          className="flex flex-col md:flex-row items-center md:space-x-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
        >
          <motion.img
            src="About1.jpg"
            alt="woman-walks-along-airport-with-suitcases"
            className="w-full md:w-1/2 h-[300px] object-cover rounded-lg"
            whileHover={{ scale: 1.05 }}
          />
          <motion.div
            className="mt-6 md:mt-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
            <p className="text-gray-700 mt-4">
              At Detty VIP, we believe travel should be as exciting as the
              destination. That’s why we provide luxury chartered flights at an
              affordable price, ensuring your Detty December starts the moment
              you arrive at the airport.
            </p>
          </motion.div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section
          className="flex flex-col md:flex-row-reverse items-center md:space-x-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
        >
          <motion.img
            src="About2.jpg"
            alt="businessman-giving-his-passport-airline-check-waiting-area"
            className="w-full md:w-1/2 h-[300px] object-cover rounded-lg"
            whileHover={{ scale: 1.05 }}
          />
          <motion.div
            className="mt-6 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-800">Why Choose Us</h3>
            <ul className="mt-4 space-y-4 text-gray-700">
              <li>
                <strong>Stress-Free Travel:</strong> Skip the queues and delays.
              </li>
              <li>
                <strong>Fixed Price:</strong> Affordable premium experience with
                no hidden charges.
              </li>
              <li>
                <strong>Affordable Premium Experience:</strong> Enjoy high-class
                travel without the premium price tag.
              </li>
              <li>
                <strong>Designed for You:</strong> Tailored to meet the needs of
                Detty December travellers.
              </li>
            </ul>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
