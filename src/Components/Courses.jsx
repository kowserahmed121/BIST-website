import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // ফ্রেমার মোশন ইম্পোর্ট করুন

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/courses.json")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-4 md:mb-10">
          Let's Check Our <span className="text-orange-500">Courses</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {courses.slice(0, 6).map((course, index) => (
            <motion.div
              key={course.id}
              className="rounded-lg shadow-lg overflow-hidden bg-white transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.3, // এই অংশে প্রতিটি কাডের জন্য আলাদা দেরি হবে
              }}
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.course_name}
                  className="w-full h-48 object-cover transition-all duration-500 transform hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs py-1 px-3 rounded-full">
                  {course.course_name}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl text-start font-semibold text-gray-800 mb-2">
                  {course.course_name}
                </h3>
                <p className="text-gray-600 text-start text-sm mb-4">
                  {course.description}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <div>
                    <p>{course.seats} Seats</p>
                    <p>{course.duration}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-500">⭐</span> {course.rating}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-md md:text-lg font-bold text-gray-800">
                    {course.money}
                  </p>
                  <Link
                    to={`/course/${course.id}`}
                    className="px-3 mx:px-6 py-1 md:py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <Link
          to="/courses"
          className="bg-orange-500 mt-12 text-white font-semibold py-3 px-10 items-center hover:bg-[#116e63] shadow-md relative inline-block"
          style={{
            borderRadius: "20px 30px 30px 0px",
          }}
        >
          See All Courses
        </Link>
      </div>
    </div>
  );
};

export default Courses;
