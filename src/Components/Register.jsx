import React, { useContext, useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaImage } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast"; // Add toast for error notifications

const Register = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    // Validate password: minimum 6 characters and should include letters and numbers
    const passwordRegex = /^(?=.*[a-zA-Z0-9]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and contain letters and numbers"
      );
      return;
    }

    // Create the user using createUser function
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        setUser(user);

        // Update user profile with name and photo URL
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            toast.success("User registered successfully!");
            navigate("/"); // Redirect to home page after successful registration
          })
          .catch((err) => {
            console.log("Error updating user profile:", err);
            toast.error("Failed to update user profile. Please try again.");
          });
      })
      .catch((err) => {
        console.log("Error creating user:", err);
        toast.error("Failed to create user. Please try again.");
      });
  };

  return (
    <section
      data-aos="zoom-in"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-blue-100"
    >
      <Toaster /> {/* Toast notifications */}
      <div className="bg-white shadow-lg rounded-lg p-8 md:w-1/3 w-11/12">
        {/* Branding */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold text-[#ff7f50]">BIST</h1>
          <p className="text-sm text-gray-500">Join us for a better future!</p>
        </div>

        {/* Register Header */}
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Student Registration
        </h2>

        {/* Register Form */}
        <form onSubmit={handleRegister}>
          {/* Name Input */}
          <div className="mb-4 relative">
            <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff7f50]"
              required
            />
          </div>

          {/* Photo URL Input */}
          <div className="mb-4 relative">
            <FaImage className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            <input
              type="url"
              id="photo-url"
              name="photo"
              placeholder="Photo URL"
              className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff7f50]"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4 relative">
            <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff7f50]"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6 relative">
            <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff7f50]"
              required
            />
            {error.name && <p className="text-red-600">{error.name}</p>}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-[#ff7f50] text-white py-3 rounded-md font-bold hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Register
          </button>
        </form>

        {/* Already Registered */}
        <div className="text-center mt-6">
          <p className="text-sm">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-[#ff7f50] hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
