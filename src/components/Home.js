import React from "react";
import { IMAGES } from "../constants"; // Make sure this path is correct
import Testimonials from "./Testimonials"; // Import the Testimonials component

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('${IMAGES.HERO}')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-wide leading-tight mb-6">
            Welcome to <span className="text-green-300">Gitalife</span>
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mb-8">
            Empowering communities, changing lives, and making the world a better
            place one step at a time.
          </p>
          <div className="flex space-x-4">
            <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-lg text-lg font-semibold">
              Donate Now
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-semibold">
              Join Us
            </button>
            <button className="bg-gray-700 hover:bg-gray-800 text-white py-3 px-8 rounded-lg text-lg font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            At [NGO Name], our mission is to provide resources, education, and
            support to underserved communities worldwide. Together, we aim to
            create sustainable solutions and empower individuals to thrive.
          </p>
          <img
            src={IMAGES.MISSION}
            alt="Our Mission"
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </section>

      {/* Call-to-Actions */}
      <section className="py-16 bg-green-500 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Take Action</h2>
        <p className="text-lg mb-6">
          Your support can help change lives. Join us today!
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-green-500 font-bold py-2 px-6 rounded-lg hover:bg-gray-200">
            Donate Now
          </button>
          <button className="bg-white text-green-500 font-bold py-2 px-6 rounded-lg hover:bg-gray-200">
            Join Us
          </button>
          <button className="bg-white text-green-500 font-bold py-2 px-6 rounded-lg hover:bg-gray-200">
            Learn More
          </button>
        </div>
        <img
          src={IMAGES.CALL_TO_ACTIONS}
          alt="Take Action"
          className="rounded-lg shadow-lg mx-auto mt-8"
        />
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white"> {/* Added a white background for contrast */}
        <Testimonials /> {/* Render the Testimonials component here */}
      </section>
    </div>
  );
}

export default Home;