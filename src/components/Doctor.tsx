import React from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Doctor = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white px-4">

      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">Our Owner</h2>
        <p className="text-muted-foreground text-sm sm:text-base mt-2">
          Meet Dr. Azeet Yadav, a trusted expert in ophthalmology.
        </p>
      </div>

      {/* Doctor Card */}
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl w-full flex flex-col md:flex-row items-center transition-transform transform hover:scale-105 hover:shadow-xl">

        {/* Text Part */}
        <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-black mb-4">Dr. Azeet Yadav</h1>
          <p className="text-black mb-4">
            Bsc - Ophthalmology <br />
            Dedicated to eye care and vision health, Dr. Yadav brings expertise, compassion, and a commitment to improving patients' quality of life.
          </p>
          <p className="text-black mb-4">
            Location: Bhairawa, Nepal
          </p>

          {/* Visit Button */}
          <div className="flex justify-center md:justify-start">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-3 rounded-full shadow-md hover:opacity-90"
            >
              Visit Clinic
            </a>
          </div>

          {/* Icons */}
          <div className="flex space-x-4 justify-center md:justify-start mt-6 text-black text-2xl">
            <a href="https://wa.me/9779826459523" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://www.facebook.com/azeet.ydv" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/azeet.ydv/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Image Part */}
        <div className="flex-1 flex justify-center">
          <img
            src="/doctor.jpeg" // Make sure doctor.png is inside /public folder
            alt="Doctor"
            className="rounded-2xl w-72 h-72 object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default Doctor;
