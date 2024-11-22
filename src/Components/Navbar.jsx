import { NavLink } from "react-router-dom";
import { FaPen } from "react-icons/fa";
import logo from "../assets/logo.jpg";
const Navbar = () => {
  const links = (
    <div className=" text-lg flex flex-col md:flex-row gap-4 md:gap-10 ">
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
  return (
    <div>
      <div className="navbar  w-11/12 mx-auto">
        <div className="navbar-start py-4">
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
            <img className="h-12 w-12" src={logo} alt="" />
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
          <button
            className="bg-orange-500 text-white font-semibold py-3 px-6 flex items-center hover:bg-[#116e63] shadow-md relative"
            style={{
              borderRadius: "20px 30px 30px 0px",
            }}
          >
            <FaPen className="mr-2" />
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
