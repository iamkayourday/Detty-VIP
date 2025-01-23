import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaUsers, FaCreditCard, FaPlaneDeparture, FaPlaneArrival, FaCheckCircle } from "react-icons/fa";

const Flights = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true); 
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('plane.jpg')" }}
      >
        <div className="absolute bottom-6 left-6 bg-white bg-opacity-70 p-6 rounded-lg max-w-lg">
          <h1 className="text-3xl font-bold text-[#2e5c99]">
            Reserve Your Detty VIP Flight Today
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-screen-lg mx-auto px-6 py-12">
        <section>
          <h3 className="text-2xl font-bold text-gray-800">Available Routes</h3>
          <p className="text-gray-700 mt-4 flex items-center gap-2">
            <FaPlaneDeparture className="text-[#2e5c99]" />
            London (Stansted Airport) 
            <span className="mx-2">→</span>
            <FaPlaneArrival className="text-[#2e5c99]" />
            Lagos (Muritala Muhammed)
          </p>
        </section>

        <section className="mt-8">
          <h3 className="text-2xl font-bold text-gray-800">Booking CTA</h3>
          <p className="text-gray-700 mt-4">
            Ticket will open for sale on <strong>[Enter Date Here]</strong>
          </p>
        </section>

        {/* Booking Form */}
        {!formSubmitted ? (
          <form
            onSubmit={handleSubmit}
            className="mt-12 bg-white shadow-lg rounded-lg p-6 space-y-6"
          >
            <h3 className="text-xl font-bold text-gray-800">Booking Form</h3>

            {/* Full Name */}
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                required
                className="w-full border border-gray-300 rounded-lg px-10 py-2 focus:outline-none focus:ring-2 focus:ring-[#2e5c99]"
              />
            </div>

            {/* Email Address */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full border border-gray-300 rounded-lg px-10 py-2 focus:outline-none focus:ring-2 focus:ring-[#2e5c99]"
              />
            </div>

            {/* Phone Number */}
            <div className="relative">
              <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                required
                className="w-full border border-gray-300 rounded-lg px-10 py-2 focus:outline-none focus:ring-2 focus:ring-[#2e5c99]"
              />
            </div>

            {/* Number of Passengers */}
            <div className="relative">
              <FaUsers className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="number"
                name="numPassengers"
                placeholder="Number of Passengers"
                min="1"
                required
                className="w-full border border-gray-300 rounded-lg px-10 py-2 focus:outline-none focus:ring-2 focus:ring-[#2e5c99]"
              />
            </div>

            {/* Payment Information */}
            <div className="relative">
              <FaCreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                name="paymentInfo"
                placeholder="Payment Information"
                required
                className="w-full border border-gray-300 rounded-lg px-10 py-2 focus:outline-none focus:ring-2 focus:ring-[#2e5c99]"
              />
            </div>

            {/* CTA Button */}
            <button
              type="submit"
              className="w-full bg-[#2e5c99] text-white font-bold py-3 rounded-lg hover:bg-opacity-90 transition"
            >
              Confirm My Seat Now
            </button>
          </form>
        ) : (
          /* Success Message */
          <div className="mt-12 bg-green-100 text-green-800 p-6 rounded-lg shadow-lg flex items-center gap-4">
            <FaCheckCircle className="text-green-600 text-3xl" />
            <div>
              <h3 className="text-2xl font-bold">Booking Confirmed!</h3>
              <p className="mt-2 text-lg">
                Thank you for reserving your Detty VIP flight! We’ll be in touch
                soon with more details. 🎉
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Flights;
