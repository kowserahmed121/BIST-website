import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#08214d] text-white py-10">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About BIST */}
        <div>
          <h3 className="text-2xl font-bold text-orange-500 mb-4">BIST</h3>
          <p className="text-gray-300">
            BACE Institute of Science and Technology (BIST) is a leading
            Polytechnic Institute offering a 4-year Diploma in Engineering
            program in Mechanical, Computer, Electrical, and Civil Technologies.
            Our mission is to empower students with essential skills and
            knowledge for a successful engineering career.
          </p>
          <div className="mt-6">
            <div className="flex items-center gap-3 mb-3">
              <FaPhoneAlt className="text-orange-500" />
              <p>+88 01770 609016</p>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <FaMapMarkerAlt className="text-orange-500" />
              <p>Mograpar, Sonargoan, Narayanganj</p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-orange-500" />
              <p>bist.51069@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="text-gray-300 space-y-2">
            <li>About Us</li>
            <li>FAQs</li>
            <li>Our Technologies</li>
            <li>Terms Of Service</li>
            <li>Privacy Policy</li>
            <li>Latest News</li>
          </ul>
        </div>

        {/* Campus Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Campus</h3>
          <ul className="text-gray-300 space-y-2">
            <li>Campus Safety</li>
            <li>Student Activities</li>
            <li>Mechanical Engineering</li>
            <li>Computer Technology</li>
            <li>Electrical Engineering</li>
            <li>Civil Technology</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-300">
            Subscribe to our newsletter to get the latest updates and news from
            BIST.
          </p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full py-2 px-4 rounded-lg outline-none"
            />
            <button
              type="submit"
              className="w-full mt-3 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 text-center border-t border-gray-600 pt-6">
        <div className="flex justify-center gap-4 text-xl mb-4">
          <FaFacebook className="cursor-pointer hover:text-orange-500" />
          <FaLinkedin className="cursor-pointer hover:text-orange-500" />
          <FaWhatsapp className="cursor-pointer hover:text-orange-500" />
          <FaInstagram className="cursor-pointer hover:text-orange-500" />
        </div>
        <p className="text-gray-400">
          © {new Date().getFullYear()} BACE Institute of Science and Technology.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
