import React from "react";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('/About_hero.webp')" }}
      >
        <div className="absolute bottom-6 left-6 bg-white bg-opacity-70 p-6 rounded-lg max-w-lg">
          <h1 className="text-3xl font-bold text-[#2e5c99]">
            About Detty VIP
          </h1>
          <h2 className="text-xl font-semibold text-gray-800 mt-2">
            Luxury Travel, Designed for Detty December
          </h2>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-screen-lg mx-auto px-6 py-12 space-y-12">
        {/* Mission Section */}
        <section className="flex flex-col md:flex-row items-center md:space-x-6">
          <img
            src="Hero.jpg"
            alt="Our Mission"
            className="w-full md:w-1/2 h-[300px] object-cover rounded-lg"
          />
          <div className="mt-6 md:mt-0">
            <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
            <p className="text-gray-700 mt-4">
              At Detty VIP, we believe travel should be as exciting as the
              destination. That’s why we provide luxury chartered flights at an
              affordable price, ensuring your Detty December starts the moment
              you arrive at the airport.
            </p>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="flex flex-col md:flex-row-reverse items-center md:space-x-6">
          <img
            src="Hero.jpg"
            alt="Why Choose Us"
            className="w-full md:w-1/2 h-[300px] object-cover rounded-lg"
          />
          <div className="mt-6 md:mt-0">
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
                <strong>Affordable Premium Experience:</strong> Enjoy
                high-class travel without the premium price tag.
              </li>
              <li>
                <strong>Designed for You:</strong> Tailored to meet the needs of
                Detty December travellers.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
