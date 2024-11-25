import { Link, NavLink } from "react-router-dom";
import { FaPen, FaUser, FaSignOutAlt } from "react-icons/fa";
import logo from "../assets/logo.jpg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For the dropdown

  const links = (
    <div className="text-lg flex flex-col md:flex-row gap-4 md:gap-10">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-orange-500 font-bold border-b-2 border-orange-500"
            : "text-gray-800 hover:text-orange-500 transition-all duration-300"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-orange-500 font-bold border-b-2 border-orange-500"
            : "text-gray-800 hover:text-orange-500 transition-all duration-300"
        }
      >
        About Us
      </NavLink>
      <NavLink
        to="/courses"
        className={({ isActive }) =>
          isActive
            ? "text-orange-500 font-bold border-b-2 border-orange-500"
            : "text-gray-800 hover:text-orange-500 transition-all duration-300"
        }
      >
        Our Courses
      </NavLink>
      <NavLink
        to="/testimonials"
        className={({ isActive }) =>
          isActive
            ? "text-orange-500 font-bold border-b-2 border-orange-500"
            : "text-gray-800 hover:text-orange-500 transition-all duration-300"
        }
      >
        Testimonials
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "text-orange-500 font-bold border-b-2 border-orange-500"
            : "text-gray-800 hover:text-orange-500 transition-all duration-300"
        }
      >
        Contact
      </NavLink>
    </div>
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        setIsDropdownOpen(false); // Close dropdown after logout
      })
      .catch((error) => console.error("Error logging out:", error));
  };

  return (
    <div className="sticky top-0 z-50 transition-all duration-300">
      <div
        className={`navbar px-2 md:px-10 md:py-6 py-4 bg-white shadow-md ${
          isScrolled ? "bg-opacity-70 backdrop-blur-md" : ""
        } transition-all duration-500 ease-in-out`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <img className="h-8 w-8 md:h-12 md:w-12" src={logo} alt="" />
            <h2 className="text-3xl font-bold">
              <span className="text-[#116e63]">BI</span>
              <span className="text-orange-500">ST</span>
            </h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="relative">
              <img
                src={user.photoURL}
                alt="User Profile"
                className="w-16 h-16 rounded-full cursor-pointer shadow-md"
                onClick={toggleDropdown} // Show dropdown on click
              />
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-300 z-10">
                  <div className="py-2 px-4">
                    <div className="flex items-center space-x-2">
                      <FaUser />
                      <span>{user.displayName || "Profile"}</span>
                    </div>
                  </div>
                  <div className="border-t border-gray-200">
                    <button
                      onClick={handleLogout}
                      className="w-full text-left py-2 px-4 hover:bg-gray-100"
                    >
                      <div className="flex items-center space-x-2">
                        <FaSignOutAlt />
                        <span>Logout</span>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/auth/login"
              className="bg-orange-500 text-white font-semibold       py-1 md:py-3 px-3 md:px-6 flex items-center hover:bg-[#116e63] shadow-md relative"
              style={{
                borderRadius: "20px 30px 30px 0px",
              }}
            >
              <FaPen className="mr-2" />
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
