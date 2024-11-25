import React, { useState } from "react";

const OurTeachers = () => {
  const [teachers] = useState([
    {
      id: 1,
      name: "Eng Masum",
      role: "Principle",
      image: "https://i.ibb.co.com/DK3vDzp/02-removebg-preview.png",
    },
    {
      id: 2,
      name: "Frank A. Mitchell",
      role: "Associate Professor",
      image: "https://i.ibb.co.com/YbnR259/03-removebg-preview-1.png",
    },
    {
      id: 3,
      name: "Susan D. Lunsford",
      role: "CEO & Founder",
      image: "https://i.ibb.co.com/WxFGTY7/01-removebg-preview.png",
    },
    {
      id: 4,
      name: "Dennis A. Pruitt",
      role: "Associate Professor",
      image: "https://i.ibb.co.com/WxFGTY7/01-removebg-preview.png",
    },
  ]);

  return (
    <div className="w-11/12 mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Meet Our <span className="text-orange-500">Teachers</span>
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          Meet the brilliant minds shaping our future at BIST.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-2 max-w-7xl mx-auto px-2">
        {teachers.map((teacher) => (
          <div
            key={teacher.id}
            className="group relative overflow-hidden rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300 w-11/12 mx-auto"
          >
            <img
              src={teacher.image}
              alt={teacher.name}
              className="w-full h-72 object-cover transform group-hover:scale-110 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black text-white p-4">
              <h3 className="text-2xl font-semibold">{teacher.name}</h3>
              <p className="text-lg">{teacher.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeachers;
