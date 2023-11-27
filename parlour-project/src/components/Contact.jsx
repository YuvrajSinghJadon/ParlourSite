import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto my-8 p-8 pt-5 bg-orange-100 rounded-lg shadow-md">
      <div className="mb-8">
        <h2 className="text-5xl font-caveat mb-4 text-center text-gray-800">
          Get In Touch
        </h2>
      </div>

      <div className="mb-8">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-600 p-8 rounded-lg shadow-md">
          <p className="text-gray-600">
            Thank you for considering us for your makeup needs. We look forward
            to hearing from you!
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">
          Contact Options:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            href="https://wa.me/7828970454"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white py-3 px-6 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green transition duration-300"
          >
            WhatsApp Us
          </a>

          <a
            href="mailto:anshj9y@gmail.com"
            className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue transition duration-300"
          >
            Email Us
          </a>

          <a
            href="tel:7828970454"
            className="bg-purple-500 text-white py-3 px-6 rounded-md hover:bg-purple-600 focus:outline-none focus:shadow-outline-purple transition duration-300"
          >
            Call Us
          </a>
        </div>
      </div>

      <div className="mb-8">
        <div className="bg-gradient-to-r from-green-400 to-teal-600 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Location:</h3>
          <p className="text-gray-600">123 Beauty Street, Glam City</p>
          {/* Add a map if applicable */}
        </div>
      </div>

      <div className="mb-8">
        <div className="bg-gradient-to-r from-blue-400 to-cyan-600 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Connect With Us:
          </h3>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/society_unfiltered_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/your_facebook/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="bg-gradient-to-r from-yellow-400 to-red-600 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Business Hours:
          </h3>
          <p className="text-gray-600">
            Monday - Friday: 9:00 AM - 6:00 PM <br />
            Saturday: 10:00 AM - 4:00 PM <br />
            Sunday: Closed
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-indigo-400 to-purple-600 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            What Our Clients Say:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-to-r from-blue-400 to-green-600 p-8 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "Amazing makeup artist! I loved my look for the special day.
                Highly recommended!"
              </p>
              <p className="text-lg font-bold text-purple-600">
                - Happy Client
              </p>
            </div>

            {/* Add more testimonials as needed */}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="bg-gradient-to-r from-purple-400 to-pink-600 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Quick Contact:
          </h3>
          <a
            href="https://wa.me/7828970454"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            Don't want to wait? Message us on WhatsApp!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
