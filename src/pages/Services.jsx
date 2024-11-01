import React from "react";
import droneServiceBg from "../assets/landingImage2.webp"; // Background image for the page

const Services = () => {
  return (
    <div className="relative bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-screen">
        <img
          src={droneServiceBg}
          alt="Drone Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-6xl font-bold mb-6">Our Drone Services</h1>
          <p className="text-xl max-w-2xl">
            Explore a wide range of cutting-edge drone solutions designed to
            help businesses and industries elevate their perspectives.
          </p>
          <a
            href="#services"
            className="mt-8 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 transition duration-300 text-white rounded-lg font-semibold"
          >
            Discover Our Services
          </a>
        </div>
      </div>

      {/* Service Overview Section */}
      <div className="m-4 md:m-12">
        <div id="services" className="py-16 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Our Expertise</h2>
            <p className="text-lg max-w-3xl mx-auto mb-12">
              We specialize in a diverse range of drone services to cater to
              various industries, from aerial photography to advanced mapping
              and inspections.
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Aerial Photography & Videography",
                  description:
                    "Capture stunning high-definition images and videos for real estate, marketing, and events.",
                },
                {
                  title: "Drone Inspections",
                  description:
                    "Efficiently inspect structures like bridges, towers, and solar farms using advanced drone technology.",
                },
                {
                  title: "Surveying & Mapping",
                  description:
                    "Accurate aerial surveying and 3D mapping for construction, agriculture, and urban planning.",
                },
                {
                  title: "Agriculture & Crop Monitoring",
                  description:
                    "Monitor crop health and boost productivity with advanced multispectral imaging drones.",
                },
                {
                  title: "Security & Surveillance",
                  description:
                    "Enhance your security with real-time aerial surveillance for large properties and events.",
                },
                {
                  title: "Search & Rescue Missions",
                  description:
                    "Deploy drones for search and rescue operations in difficult or remote terrains.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Section */}
        <div className="py-16 px-8 bg-gray-900 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Our Technology</h2>
            <p className="text-lg max-w-3xl mx-auto mb-12">
              We utilize the latest drone technology and equipment to deliver
              accurate, safe, and efficient services. Our drones are equipped
              with advanced cameras, sensors, and real-time data processing
              systems.
            </p>

            {/* Technology Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "High-Resolution Cameras",
                  description:
                    "Capture ultra-high-definition imagery with precision for any application.",
                },
                {
                  title: "Thermal Imaging",
                  description:
                    "Detect heat signatures and anomalies for inspections and surveillance.",
                },
                {
                  title: "LiDAR Technology",
                  description:
                    "Create detailed 3D maps with LiDAR sensors for topography and urban planning.",
                },
                {
                  title: "Real-Time Data Transmission",
                  description:
                    "Receive live data from drones during operations for immediate decision-making.",
                },
                {
                  title: "Advanced Flight Control",
                  description:
                    "Our drones feature advanced stabilization and flight control systems for safe operations.",
                },
                {
                  title: "Long-Range & Endurance",
                  description:
                    "Extended battery life and long-range capabilities to cover large areas efficiently.",
                },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-4">{tech.title}</h3>
                  <p>{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Call to Action Section */}
        <div className="py-16 bg-cyan-500 text-white text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Elevate Your Business?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and see how our drone
            services can help you achieve new heights.
          </p>
          <a
            href="/contact"
            className="px-8 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition duration-300"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
