import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa"; // Import phone icon
import bgImage from "../assets/getTrained.webp";
// import LandingPageContact from "../components/landingPageContact";

const Training = () => {
  return (
    <div>
      {" "}
      <div className="relative h-screen bg-gray-900 text-white overflow-hidden">
        {/* Background Image */}
        <img
          className="absolute inset-0 object-cover h-full w-full"
          src={bgImage}
          alt="Drone training background"
        />
        <div className="overlay bg-black absolute inset-0 opacity-70" />

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4">
          <h1 className="text-4xl font-bold mb-6">Get Trained by Experts</h1>
          <p className="text-lg max-w-lg mb-8">
            Enhance your drone skills with hands-on training from our
            experienced instructors. Learn the latest techniques, industry best
            practices, and tips to master safe and effective drone operation.
          </p>

          {/* Book Now Button with Call Icon */}
          <Link
            to="/contact"
            className="btn flex items-center space-x-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300"
          >
            <span className=" p-2 rounded-full animate-pulse bg-gradient-to-r from-rose-200 via-rose-400 to-rose-600 shadow-2xl">
              <FaPhoneAlt className="text-lg animate-bounce" />
            </span>

            <span>Book a Call Now!</span>
          </Link>
        </div>

        {/* Training Details Section */}
        <div className="relative z-10 bg-gray-100 text-gray-800 py-12 px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-6">
            What You Will Learn
          </h2>
          <p className="text-center max-w-3xl mx-auto mb-8">
            Our training program covers everything you need to know about flying
            drones, including pre-flight preparation, flight maneuvers, safety
            protocols, and advanced camera handling techniques for capturing
            stunning visuals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Program Features */}
            <div className="p-6 bg-white rounded shadow text-center">
              <h3 className="text-xl font-semibold mb-4">Flight Basics</h3>
              <p>
                Learn the core principles of drone flight, including take-off,
                landing, and in-flight control techniques.
              </p>
            </div>
            <div className="p-6 bg-white rounded shadow text-center">
              <h3 className="text-xl font-semibold mb-4">
                Safety & Regulations
              </h3>
              <p>
                Understand the latest safety regulations and airspace rules to
                ensure responsible drone operation.
              </p>
            </div>
            <div className="p-6 bg-white rounded shadow text-center">
              <h3 className="text-xl font-semibold mb-4">Aerial Photography</h3>
              <p>
                Master aerial photography techniques for capturing high-quality
                images and videos from the skies.
              </p>
            </div>
            <div className="p-6 bg-white rounded shadow text-center">
              <h3 className="text-xl font-semibold mb-4">Advanced Maneuvers</h3>
              <p>
                Get comfortable with advanced flying techniques and maneuvers to
                increase control and confidence.
              </p>
            </div>
            <div className="p-6 bg-white rounded shadow text-center">
              <h3 className="text-xl font-semibold mb-4">
                Equipment Maintenance
              </h3>
              <p>
                Learn how to maintain and care for your drone to ensure optimal
                performance over time.
              </p>
            </div>
            <div className="p-6 bg-white rounded shadow text-center">
              <h3 className="text-xl font-semibold mb-4">
                Customized Sessions
              </h3>
              <p>
                Enjoy personalized training sessions tailored to your unique
                needs and skill level.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <LandingPageContact /> */}
    </div>
  );
};

export default Training;
