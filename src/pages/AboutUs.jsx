import React from "react";
import aboutUsDroneBg from "../assets/landingImage2.webp"; // Background image for the About Us section
import LandingPageContact from "../components/LandingPageContact";

const AboutUs = () => {
  return (
    <div className="relative bg-gray-500 h-svh">
      {/* Hero Section */}
      <div className="relative h-screen">
        <img
          src={aboutUsDroneBg}
          alt="About Us Background"
          className="absolute inset-0 w-fußßll h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60" />

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-3xl">
            Leading the future of drone services with innovation, integrity, and
            a passion for excellence.
          </p>
        </div>
      </div>

      {/* Company Overview Section */}
      <div className="m-4  md:m-12">
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Who We Are</h2>
            <p className="text-lg max-w-3xl mx-auto mb-12">
              At <span className="font-semibold">GiiTech Drones</span>, we are a
              team of experienced professionals committed to pushing the
              boundaries of what’s possible in drone technology. With years of
              industry experience, we provide a wide range of high-quality,
              innovative drone solutions for industries worldwide.
            </p>

            {/* Values Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation",
                  description:
                    "We lead the charge in drone technology, constantly innovating to bring our clients the most advanced solutions.",
                },
                {
                  title: "Expertise",
                  description:
                    "With a team of seasoned drone pilots and engineers, we provide precise and efficient drone services for every industry.",
                },
                {
                  title: "Safety & Compliance",
                  description:
                    "We prioritize safety in every mission, adhering to all aviation regulations and ensuring the utmost compliance.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Mission and Vision Section */}
        <div className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto text-center p-2 md:p-4">
            <h2 className="text-4xl font-bold mb-8">Our Mission & Vision</h2>
            <p className="text-lg max-w-3xl mx-auto mb-12">
              Our mission is to deliver cutting-edge drone solutions that
              empower industries to thrive in the digital age. We envision a
              world where drone technology plays an integral role in improving
              efficiency, safety, and innovation across various sectors.
            </p>
            <div className="flex justify-center space-x-2 md:space-x-8">
              <div className="bg-gray-800 mb-8 p-2 md:p-4 rounded-lg shadow-lg w-72">
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p>
                  To transform industries through innovation, precision, and
                  safety, making aerial data and advanced technologies
                  accessible to all.
                </p>
              </div>
              <div className="bg-gray-800 mt-8 p-2 md:p-4 rounded-lg shadow-lg w-72">
                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                <p>
                  To lead the future of drone technology, setting global
                  standards for quality, safety, and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Team Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Meet the Team</h2>
            <p className="text-lg max-w-3xl mx-auto mb-12">
              Our team of certified drone pilots, engineers, and aerial data
              experts is dedicated to providing exceptional service and results
              for every client.
            </p>

            {/* Team Members */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "John Smith",
                  role: "Founder & CEO",
                  bio: "With over 10 years of experience in drone technology, John is a visionary leader pushing the boundaries of drone innovation.",
                  img: { aboutUsDroneBg },
                },
                {
                  name: "Emily Johnson",
                  role: "Lead Drone Engineer",
                  bio: "Emily specializes in developing advanced flight systems and ensuring our drones deliver precision and performance.",
                  img: { aboutUsDroneBg },
                },
                {
                  name: "Michael Lee",
                  role: "Chief Pilot",
                  bio: "Michael is a certified drone pilot with expertise in aerial surveying, inspections, and cinematography.",
                  img: { aboutUsDroneBg },
                },
              ].map((teamMember, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={teamMember.img}
                    alt={teamMember.name}
                    className="w-full h-56 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-2xl font-semibold mb-2">
                    {teamMember.name}
                  </h3>
                  <p className="text-cyan-500 font-medium">{teamMember.role}</p>
                  <p className="text-gray-700 mt-2">{teamMember.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Call to Action */}
        <LandingPageContact />
      </div>
    </div>
  );
};

export default AboutUs;
