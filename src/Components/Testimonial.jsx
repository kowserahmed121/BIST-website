import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  // Fetch JSON data
  useEffect(() => {
    fetch("testimonial.json")
      .then((response) => response.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);

  return (
    <section className="py-16  bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
     <div className="w-11/12 mx-auto">
     <div className="w-11/12 mx-auto text-center space-y-6">
        <h2 className="text-lg font-semibold text-orange-400">TESTIMONIALS</h2>
        <h1 className="text-4xl font-bold">What Our Students Say</h1>
        <p className="text-gray-200 text-lg max-w-3xl mx-auto">
          Hear from our students about their experiences at BACE Institute of
          Science and Technology (BIST). Join a community that empowers you to
          succeed in your engineering career.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white text-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full border-4 border-orange-400"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold">{testimonial.name}</h3>
              <p className="text-orange-500">{testimonial.role}</p>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-600">
                <strong>Department:</strong> {testimonial.department}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Semester:</strong> {testimonial.semester}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Session:</strong> {testimonial.session}
              </p>
            </div>
            <p className="text-gray-600 text-center mt-4 italic">
              "{testimonial.text}"
            </p>
            <div className="flex items-center gap-1 mt-3">
              {[...Array(testimonial.rating)].map((_, index) => (
                <FaStar key={index} className="text-yellow-500" />
              ))}
            </div>
          </div>
        ))}
      </div>
     </div>
    </section>
  );
};

export default Testimonial;
