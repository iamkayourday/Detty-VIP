import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaPen,
} from "react-icons/fa";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate an API call or form submission process
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000); // Simulates a 2-second wait
  };

  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-24">
        {/* Left Section */}
        <motion.div
          className="md:w-1/2 text-charcoal"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold mb-6">We’re Here to Help</h2>
          <p className="text-lg mb-8">
            We’re here to make your Detty December unforgettable! Got questions
            or need help getting started? Reach out to us through any of the
            options below, and our VIP team will ensure you’re flying in style
            in no time.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaPhone className="text-xl" />
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p>(123) 456-7890</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-xl" />
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <a href="info@dettyvip.com">info@dettyvip.com</a>
                {/* <p>info@dettyvip.com</p> */}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-xl" />
              <div>
                <h3 className="text-xl font-semibold">Whatsapp</h3>
                <p>(123) 456-7890</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Follow Us On</h3>
            <div className="flex gap-6">
              <a
                href="https://www.facebook.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white w-16 h-16 rounded-full shadow-md flex items-center justify-center"
              >
                <FaFacebook className="text-4xl text-[#2e5c99] transform transition-all duration-300 hover:scale-125" />
              </a>
              <a
                href="https://twitter.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white w-16 h-16 rounded-full shadow-md flex items-center justify-center"
              >
                <FaTwitter className="text-4xl text-[#1DA1F2] transform transition-all duration-300 hover:scale-125" />
              </a>
              <a
                href="https://www.instagram.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white w-16 h-16 rounded-full shadow-md flex items-center justify-center"
              >
                <FaInstagram className="text-4xl text-[#E1306C] transform transition-all duration-300 hover:scale-125" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="md:w-1/2 bg-yellow p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {isSubmitted ? (
            <div className="text-center text-charcoal">
              <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
              <p className="text-lg mb-6">
                We’ve received your message and will get back to you shortly.
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <FaEnvelope className="text-6xl text-charcoal mx-auto" />
              </motion.div>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-charcoal mb-6">
                Contact Form
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="relative">
                  <label
                    htmlFor="fullName"
                    className="block text-charcoal font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal" />
                    <input
                      type="text"
                      id="fullName"
                      className="w-full pl-10 p-3 border border-charcoal rounded-md focus:ring-2 focus:ring-charcoal"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block text-charcoal font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal" />
                    <input
                      type="email"
                      id="email"
                      className="w-full pl-10 p-3 border border-charcoal rounded-md focus:ring-2 focus:ring-charcoal"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="block text-charcoal font-medium mb-2"
                  >
                    Message
                  </label>
                  <div className="relative">
                    <FaPen className="absolute left-3 top-3 text-charcoal" />
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full pl-10 p-3 border border-charcoal rounded-md focus:ring-2 focus:ring-charcoal"
                      placeholder="Enter your message"
                      required
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className={`w-full py-3 px-6 rounded-lg shadow-lg transform transition-transform ${
                    isLoading
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-[#2e5c99] text-white hover:bg-[#1d3758] hover:scale-105"
                  }`}
                  disabled={isLoading}
                >
                  {isLoading ? "Please wait..." : "Send Message"}
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
