import React from "react";
import {
  FaRegLightbulb,
  FaCogs,
  FaLaptopCode,
  FaBolt,
  FaBuilding,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "../assets/banner4.jpg";
import img1 from "../assets/banner3.jpg";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 w-11/12 mx-auto py-8 md:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-orange-500 text-lg font-bold flex items-center">
            <span className="mr-2">
              <FaRegLightbulb />
            </span>
            ABOUT US
          </h2>
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome to{" "}
            <span className="text-orange-500">
              BACE Institute of Science and Technology
            </span>{" "}
            (BIST)
          </h1>
          <p className="text-gray-600">
            BIST is a renowned Polytechnic Institute offering a comprehensive
            4-year Diploma in Engineering program. We specialize in four key
            disciplines: <strong>Mechanical Technology</strong>,{" "}
            <strong>Computer Technology</strong>,{" "}
            <strong>Electrical Technology</strong>, and{" "}
            <strong>Civil Technology</strong>. Our mission is to equip students
            with the skills, knowledge, and confidence needed to excel in their
            careers as Diploma Engineers.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-orange-100 text-orange-500 rounded-full">
                <FaCogs size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  Mechanical Engineering
                </h3>
                <p className="text-gray-500">
                  Master the art of mechanical systems, machine design, and
                  modern manufacturing.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-orange-100 text-orange-500 rounded-full">
                <FaLaptopCode size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Computer Technology</h3>
                <p className="text-gray-500">
                  Learn cutting-edge programming, networking, and web
                  development skills.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-orange-100 text-orange-500 rounded-full">
                <FaBolt size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Electrical Technology</h3>
                <p className="text-gray-500">
                  Specialize in power systems, electrical circuits, and
                  innovative electronics.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-orange-100 text-orange-500 rounded-full">
                <FaBuilding size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Civil Technology</h3>
                <p className="text-gray-500">
                  Gain expertise in construction, structural design, and project
                  management.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img src={img} alt="Student Studying" className="rounded-lg" />
            <div className="bg-orange-500 p-6 text-white rounded-lg flex items-center">
              <div>
                <h3 className="text-lg font-bold">4 Years of Excellence</h3>
                <p>
                  Shaping the future of aspiring engineers with world-class
                  education.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <img src={img1} alt="Group Learning" className="rounded-lg" />
            <div className="bg-gray-100 p-6 text-gray-800 rounded-lg">
              <p className="text-sm">
                “Empowering the next generation of engineers and innovators.”
              </p>
              <p className="mt-2 text-2xl font-bold text-orange-500">BIST</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-10 flex flex-col lg:flex-row items-center justify-between gap-4">
        <Link
          to="/about"
          className="bg-orange-500 text-white font-semibold py-3 px-10 flex items-center hover:bg-[#116e63] shadow-md relative"
          style={{
            borderRadius: "20px 30px 30px 0px",
          }}
        >
          About More
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg flex items-center gap-2 hover:bg-green-600"
        >
          Call Now +88 01770 609016
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
