import React from "react";

const LandingPageServices = () => {
  const services = [
    {
      title: "Aerial Surveying",
      description: "Precise data for accurate mapping and measurements.",
    },
    {
      title: "Inspection Services",
      description: "Inspect infrastructure safely and efficiently.",
    },
    {
      title: "Media Production",
      description: "Capture stunning aerial footage for events and projects.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-12">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
        >
          <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default LandingPageServices;
