import React from "react";
import Banner from "../Components/Banner";
import AboutUs from "../Components/AboutUs";
import Courses from "../Components/Courses";
import WhyChooseUs from "../Components/WhyChooseUs";
import Testimonial from "../Components/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Courses></Courses>
      <WhyChooseUs></WhyChooseUs>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
