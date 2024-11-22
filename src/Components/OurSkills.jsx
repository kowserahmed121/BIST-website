const OurSkills = () => {
  return (
    <section className="bg-blue-900 py-10 md:py-16 px-5">
      <div className="w-11/12 mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Section - Form */}
        <div className="bg-orange-500 text-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Start Your Enrollment
          </h2>
          <p className="text-sm md:text-base mb-6">
            Join us and be part of the BIST community. Shape your future with
            us.
          </p>
          <form>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mb-4 rounded-md text-gray-700"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 mb-4 rounded-md text-gray-700"
            />
            <select
              className="w-full p-3 mb-4 rounded-md text-gray-700"
              defaultValue=""
            >
              <option value="" disabled>
                Choose Course
              </option>
              <option value="CSE">Computer Science</option>
              <option value="EEE">Electrical Engineering</option>
              <option value="BBA">Business Administration</option>
            </select>
            <textarea
              placeholder="Type Message"
              className="w-full p-3 mb-4 rounded-md text-gray-700"
              rows="3"
            ></textarea>
            <button
              type="submit"
              className="bg-white text-orange-500 px-6 py-3 rounded-md font-bold hover:bg-gray-200 transition"
            >
              ENROLL NOW &rarr;
            </button>
          </form>
        </div>

        {/* Right Section - Skills */}
        <div className="text-white">
          <h3 className="text-sm md:text-base uppercase tracking-wide font-semibold text-orange-400 mb-2">
            Our Skills
          </h3>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Explore Your Creativity <br /> And Talent With Us
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            At <span className="font-semibold">BIST</span>, we focus on
            empowering students with the skills needed to thrive in the modern
            world. Whether it’s technology, business, or arts, we nurture talent
            and creativity.
          </p>
          <div>
            <div className="mb-4">
              <p className="text-sm md:text-base font-medium mb-1">
                Our Students
              </p>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-orange-400 h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-sm md:text-base font-medium mb-1">
                Our Teachers
              </p>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-orange-400 h-2 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-sm md:text-base font-medium mb-1">
                Our Courses
              </p>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-orange-400 h-2 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
          </div>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-bold hover:bg-orange-600 transition mt-6">
            LEARN MORE &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurSkills;
