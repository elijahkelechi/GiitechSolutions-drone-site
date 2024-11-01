import React from "react";

const LandingPageTestimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "Amazing service! The aerial footage exceeded our expectations.",
    },
    {
      name: "Jane Smith",
      feedback:
        "Professional and efficient. Helped us complete our project on time.",
    },
    {
      name: "Paul Brown",
      feedback:
        "High-quality results, and the team was fantastic to work with.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-12">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
          <p className="italic">"{testimonial.feedback}"</p>
          <p className="text-gray-500 mt-4">- {testimonial.name}</p>
        </div>
      ))}
    </div>
  );
};

export default LandingPageTestimonials;
