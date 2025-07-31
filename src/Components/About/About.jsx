import React from "react";
import "./about.css"
const About = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-2 text-lg">Who we are & what we do</p>
      </section>

      {/* About Content */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">Welcome to Pashupati Planners</h2>
          <p className="text-lg">
            Pashupati Planners is your trusted partner for creating unforgettable events. Based in Nepal,
            we specialize in organizing weddings, corporate functions, parties, and cultural programs
            with creativity, precision, and heart.
          </p>

          <p className="text-lg">
            Founded in 2025, our mission is to turn your ideas into seamless experiences. From intimate
            gatherings to grand celebrations, we handle everything — from concept to execution.
          </p>

          <p className="text-lg">
            Our team of experienced event managers, designers, and coordinators work closely with clients
            to ensure every event is unique, meaningful, and flawless.
          </p>
        </div>
      </section>

      {/* Our Vision & Mission */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
            <p className="text-lg">
              To be the most innovative and customer-focused event planning company in Nepal and beyond.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
            <p className="text-lg">
              To deliver exceptional event experiences that exceed expectations through creativity,
              commitment, and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section (Optional) */}
      {/* Add this only if you want to display team members */}
      {/* 
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <img src="/team1.jpg" alt="Team Member" className="rounded-full w-32 h-32 mx-auto mb-4" />
            <h4 className="text-xl font-semibold">Ram Bahadur</h4>
            <p>Founder & CEO</p>
          </div>
          ...
        </div>
      </section>
      */}

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-10">
        <p>&copy; {new Date().getFullYear()} Pashupati Planners. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
