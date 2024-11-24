import React from "react";
import {
  FaAward,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBookOpen,
} from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section
      data-aos="flip-left"
      className="relative pb-16 pt-8 bg-gradient-to-r from-blue-900 to-indigo-800 "
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?technology,education')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="w-11/12 mx-auto text-center space-y-6">
        <h2 className="text-lg font-semibold text-orange-400">WHY CHOOSE US</h2>
        <h1 className="text-4xl font-bold">
          Discover the <span className="text-orange-500">BIST Advantage</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-3xl mx-auto">
          At BACE Institute of Science and Technology (BIST), we are dedicated
          to empowering students with hands-on learning, advanced technologies,
          and unparalleled mentorship. Join us to shape your future in
          engineering!
        </p>
      </div>

      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {/* Feature 1 */}
        <div className="flex flex-col items-center bg-white text-gray-800 rounded-lg shadow-lg p-6">
          <div className="p-4 bg-orange-100 text-orange-500 rounded-full">
            <FaAward size={40} />
          </div>
          <h3 className="text-xl font-bold mt-4">Proven Excellence</h3>
          <p className="text-gray-500 text-center mt-2">
            Over 4 years of producing top-notch Diploma Engineers who excel in
            their fields.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center bg-white text-gray-800 rounded-lg shadow-lg p-6">
          <div className="p-4 bg-orange-100 text-orange-500 rounded-full">
            <FaUserGraduate size={40} />
          </div>
          <h3 className="text-xl font-bold mt-4">Skilled Graduates</h3>
          <p className="text-gray-500 text-center mt-2">
            95% of our graduates successfully secure jobs in Mechanical,
            Computer, Electrical, and Civil fields.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center bg-white text-gray-800 rounded-lg shadow-lg p-6">
          <div className="p-4 bg-orange-100 text-orange-500 rounded-full">
            <FaChalkboardTeacher size={40} />
          </div>
          <h3 className="text-xl font-bold mt-4">Expert Faculty</h3>
          <p className="text-gray-500 text-center mt-2">
            Learn from industry-leading faculty who combine theoretical and
            practical knowledge.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col items-center bg-white text-gray-800 rounded-lg shadow-lg p-6">
          <div className="p-4 bg-orange-100 text-orange-500 rounded-full">
            <FaBookOpen size={40} />
          </div>
          <h3 className="text-xl font-bold mt-4">Modern Resources</h3>
          <p className="text-gray-500 text-center mt-2">
            State-of-the-art labs, advanced tools, and cutting-edge curriculum
            for comprehensive learning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
