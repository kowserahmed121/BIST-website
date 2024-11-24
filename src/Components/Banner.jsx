import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../assets/banner.jpg";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import { IoBookOutline } from "react-icons/io5";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Banner = () => {
  const settings = {
    dots: false, // ডটস সরানো হয়েছে
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />, // কাস্টম Next অ্যারো
    prevArrow: <CustomPrevArrow />, // কাস্টম Prev অ্যারো
  };

  return (
    <div data-aos="zoom-in" className="w-full h-screen bg-gray-900 relative">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="relative">
          <img
            src={banner1}
            alt="Slide 1"
            className="w-full h-screen object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-65 flex items-center ">
            <div className="w-8/12 mx-auto space-y-8">
              <h2 className="text-orange-400  text-3xl font-bold uppercase flex items-center gap-2">
                <IoBookOutline className=" text-4xl"></IoBookOutline> Welcome to
                our BIST
              </h2>
              <h1 className="text-6xl font-bold text-white">
                Start Your Beautiful <br /> And{" "}
                <span className="text-orange-400">Bright</span> Future{" "}
              </h1>
              <p className="text-white text-lg font-medium">
                Join us in creating a future filled with opportunities,
                knowledge, and success.
              </p>
              <div className="flex items-center gap-8">
                <Link
                  to="/about"
                  className="bg-orange-500 text-white font-semibold py-3 px-10 flex items-center hover:bg-[#116e63] shadow-md relative"
                  style={{
                    borderRadius: "20px 30px 30px 0px",
                  }}
                >
                  About More
                </Link>
                <button
                  className="bg-white  font-semibold py-3 px-10 flex items-center hover:bg-orange-500 hover:text-white shadow-md relative"
                  style={{
                    borderRadius: "20px 30px 30px 0px",
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <img
            src={banner}
            alt="Slide 2"
            className="w-full h-screen object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="w-8/12 mx-auto space-y-8">
              <h2 className="text-orange-400  text-3xl font-bold uppercase flex items-center gap-2">
                <IoBookOutline className=" text-4xl"></IoBookOutline> Welcome to
                our BIST
              </h2>
              <h1 className="text-6xl font-bold text-white">
                Start Your Beautiful <br /> And{" "}
                <span className="text-orange-400">Bright</span> Future{" "}
              </h1>
              <p className="text-white text-lg font-medium">
                Join us in creating a future filled with opportunities,
                knowledge, and success.
              </p>
              <div className="flex items-center gap-8">
                <button
                  className="bg-orange-500 text-white font-semibold py-3 px-10 flex items-center hover:bg-[#116e63] shadow-md relative"
                  style={{
                    borderRadius: "20px 30px 30px 0px",
                  }}
                >
                  About More
                </button>
                <button
                  className="bg-white  font-semibold py-3 px-10 flex items-center hover:bg-orange-500 hover:text-white shadow-md relative"
                  style={{
                    borderRadius: "20px 30px 30px 0px",
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative">
          <img
            src={banner2}
            alt="Slide 3"
            className="w-full h-screen object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="w-8/12 mx-auto space-y-8">
              <h2 className="text-orange-400  text-3xl font-bold uppercase flex items-center gap-2">
                <IoBookOutline className=" text-4xl"></IoBookOutline> Welcome to
                our BIST
              </h2>
              <h1 className="text-6xl font-bold text-white">
                Start Your Beautiful <br /> And{" "}
                <span className="text-orange-400">Bright</span> Future{" "}
              </h1>
              <p className="text-white text-lg font-medium">
                Join us in creating a future filled with opportunities,
                knowledge, and success.
              </p>
              <div className="flex items-center gap-8">
                <button
                  className="bg-orange-500 text-white font-semibold md:py-3 py-1 px-6 md:px-10 flex items-center hover:bg-[#116e63] shadow-md relative"
                  style={{
                    borderRadius: "20px 30px 30px 0px",
                  }}
                >
                  About More
                </button>
                <button
                  className="bg-white  font-semibold md:py-3 py-1 px-6 md:px-10 flex items-center hover:bg-orange-500 hover:text-white shadow-md relative"
                  style={{
                    borderRadius: "20px 30px 30px 0px",
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

// Custom Next Arrow
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-700 p-3 rounded-full cursor-pointer text-white hover:bg-gray-500"
      onClick={onClick}
    >
      <FaArrowRight size={20} />
    </div>
  );
};

// Custom Prev Arrow
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-700 p-3 rounded-full cursor-pointer text-white hover:bg-gray-500"
      onClick={onClick}
    >
      <FaArrowLeft size={20} />
    </div>
  );
};

export default Banner;
