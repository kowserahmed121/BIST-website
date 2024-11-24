import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch("/details.json")
      .then((res) => res.json())
      .then((data) => {
        const foundCourse = data.find((course) => course.id === parseInt(id));
        setCourse(foundCourse);
      });
  }, [id]);

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-gradient-to-b from-blue-50 to-blue-200 shadow-xl rounded-lg overflow-hidden">
        <img
          src={course.image}
          alt={course.course_name}
          className="w-full h-[460px] object-cover"
        />
        <div className="p-8">
          <h1 className="text-4xl font-extrabold text-blue-700">
            {course.course_name}
          </h1>
          <p className="text-gray-700 mt-4">{course.description}</p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <p className="text-lg font-semibold">
              <strong>Seats:</strong> {course.seats}
            </p>
            <p className="text-lg font-semibold">
              <strong>Duration:</strong> {course.duration}
            </p>
            <p className="text-lg font-semibold">
              <strong>Fee:</strong> {course.money}
            </p>
            <p className="text-lg font-semibold">
              <strong>Semester:</strong> {course.semester}
            </p>
            <p className="text-lg font-semibold">
              <strong>Rating:</strong> {course.rating} ⭐⭐⭐⭐⭐
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-blue-700">
              Subjects Covered
            </h2>
            <ul className="list-disc list-inside mt-4 text-gray-800">
              {course.subjects.map((subject, index) => (
                <li key={index} className="mt-2">
                  {subject}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-blue-700">
              Career Opportunities
            </h2>
            <ul className="list-disc list-inside mt-4 text-gray-800">
              {course.career_opportunities.map((career, index) => (
                <li key={index} className="mt-2">
                  {career}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-blue-700">
              Campus Facilities
            </h2>
            <ul className="list-disc list-inside mt-4 text-gray-800">
              {course.campus_facilities.map((facility, index) => (
                <li key={index} className="mt-2">
                  {facility}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-blue-700">
              Success Stories
            </h2>
            <div className="mt-4 space-y-4">
              {course.success_stories.map((story, index) => (
                <div
                  key={index}
                  className="p-4 bg-blue-100 rounded shadow-md text-gray-800"
                >
                  <p>
                    <strong>{story.name}</strong>, {story.job_title}
                  </p>
                  <p className="italic mt-2">"{story.quote}"</p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => navigate("/")}
            className="mt-10 px-6 py-3 bg-blue-500 text-white font-bold rounded shadow hover:bg-blue-700 transition flex items-center gap-2"
          >
            <span>🏠</span> Go Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
