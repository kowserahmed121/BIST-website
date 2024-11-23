import img from "../assets/banner.jpg";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-11/12 mx-auto py-10">
      {/* Contact Information Section */}
      <div className="bg-white py-10 shadow-lg">
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Office Address */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-orange-100 p-4 rounded-full ">
              <FaMapMarkerAlt className="text-orange-500 text-3xl" />
            </div>
            <h4 className="text-lg font-semibold mt-4 mb-2">
              Institute Address
            </h4>
            <p className="text-gray-600 text-sm">
              Mograpar, Sonargoan, Narayanganj
            </p>
          </div>

          {/* Call Us */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-orange-100 p-4 rounded-full shadow-md">
              <FaPhoneAlt className="text-orange-500 text-3xl" />
            </div>
            <h4 className="text-lg font-semibold mt-4 mb-2">Call Us</h4>
            <p className="text-gray-600 text-sm">+88 01770 609016</p>
          </div>

          {/* Email Us */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-orange-100 p-4 rounded-full shadow-md">
              <FaEnvelope className="text-orange-500 text-3xl" />
            </div>
            <h4 className="text-lg font-semibold mt-4 mb-2">Email Us</h4>
            <p className="text-gray-600 text-sm">bist.51069@gmail.com</p>
          </div>

          {/* Open Time */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-orange-100 p-4 rounded-full shadow-md">
              <FaClock className="text-orange-500 text-3xl" />
            </div>
            <h4 className="text-lg font-semibold mt-4 mb-2">Open Time</h4>
            <p className="text-gray-600 text-sm">sun - thu (9:00AM - 3:30PM)</p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left Section: Image */}
        <div>
          <img src={img} alt="Contact Us" className="rounded-lg shadow-lg" />
        </div>

        {/* Right Section: Contact Form */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 mb-6">
            We are here to help you. Feel free to contact us with your queries
            or concerns.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full py-3 px-4 border rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full py-3 px-4 border rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <input
              type="text"
              placeholder="Your Subject"
              className="w-full py-3 px-4 border rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              placeholder="Write Your Message"
              className="w-full py-3 px-4 border rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
              rows="5"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
