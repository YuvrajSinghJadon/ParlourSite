import React from "react";
import { FaPalette, FaRing, FaGraduationCap } from "react-icons/fa";

const Services = () => {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Our Services & Prices
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service Card 1 */}
        <div className="bg-gradient-to-b from-purple-200 to-purple-100 p-6 rounded-lg shadow-md">
          <FaPalette className="text-4xl mb-4 mx-auto text-purple-600" />
          <h3 className="text-xl font-bold mb-2 text-purple-800">
            Makeup Application
          </h3>
          <p className="text-gray-600 mb-4">
            Perfect for special occasions and events.
          </p>
          <p className="text-lg font-bold text-purple-600">$500</p>
        </div>

        {/* Service Card 2 */}
        <div className="bg-gradient-to-b from-pink-200 to-pink-100 p-6 rounded-lg shadow-md">
          <FaRing className="text-4xl mb-4 mx-auto text-pink-600" />
          <h3 className="text-xl font-bold mb-2 text-pink-800">
            Bridal Makeup
          </h3>
          <p className="text-gray-600 mb-4">
            Includes a trial session and wedding day application.
          </p>
          <p className="text-lg font-bold text-pink-600">$1500</p>
        </div>

        {/* Service Card 3 */}
        <div className="bg-gradient-to-b from-blue-200 to-blue-100 p-6 rounded-lg shadow-md">
          <FaGraduationCap className="text-4xl mb-4 mx-auto text-blue-600" />
          <h3 className="text-xl font-bold mb-2 text-blue-800">
            Makeup Lesson
          </h3>
          <p className="text-gray-600 mb-4">
            Learn professional makeup techniques tailored to you.
          </p>
          <p className="text-lg font-bold text-blue-600">$800</p>
        </div>

        {/* Add more service cards as needed */}
      </div>
    </div>
  );
};

export default Services;
