import React from "react";
import Banner from "../Components/Banner";
import AboutUs from "../Components/AboutUs";
import Courses from "../Components/Courses";
import WhyChooseUs from "../Components/WhyChooseUs";
import Testimonial from "../Components/Testimonial";
import PhotoGallery from "../Components/PhotoGallery";
import OurTeachers from "../Components/OurTeachers";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Courses></Courses>
      <WhyChooseUs></WhyChooseUs>
      <Testimonial></Testimonial>
      <PhotoGallery></PhotoGallery>
      <OurTeachers></OurTeachers>
    </div>
  );
};

export default Home;
