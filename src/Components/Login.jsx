import React, { useContext } from "react";
import { FaGoogle, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { signInUser, setUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const password = form.get("password");
    const email = form.get("email");

    signInUser(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
      })
      .catch((err) => {
        const error = err.message;
        console.log(error);
      });
  };
  return (
    <section
      data-aos="zoom-in"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200"
    >
      <div className="bg-white shadow-lg rounded-lg p-8 md:w-1/3 w-11/12">
        {/* College Branding */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold text-[#ff7f50]">BIST</h1>
          <p className="text-sm text-gray-500">
            Empowering Engineering Excellence
          </p>
        </div>

        {/* Login Header */}
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Student Login
        </h2>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
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
          <div className="mb-2 relative">
            <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff7f50]"
              required
            />
          </div>
          <div className="text-right mb-6">
            <a
              href="/forgot-password"
              className="text-sm text-[#ff7f50] hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#ff7f50] text-white py-3 rounded-md font-bold hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-3 text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Login */}
        <button className="w-full flex items-center justify-center bg-[#4285F4] text-white py-3 rounded-md font-bold hover:scale-105 transition-transform duration-300 shadow-lg">
          <FaGoogle className="mr-2" />
          Login with Google
        </button>

        {/* Register Option */}
        <div className="text-center mt-6">
          <p className="text-sm">
            Don't have an account?{" "}
            <Link
              to="/auth/register"
              className="text-[#ff7f50] hover:underline"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
