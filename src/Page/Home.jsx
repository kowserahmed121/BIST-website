import React, { useEffect } from "react";
import Banner from "../Components/Banner";
import AboutUs from "../Components/AboutUs";
import Courses from "../Components/Courses";
import WhyChooseUs from "../Components/WhyChooseUs";
import Testimonial from "../Components/Testimonial";
import PhotoGallery from "../Components/PhotoGallery";
import OurTeachers from "../Components/OurTeachers";
import OurSkills from "../Components/OurSkills";
import Contact from "../Components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Courses></Courses>
      <WhyChooseUs></WhyChooseUs>
      <Testimonial></Testimonial>
      <OurTeachers></OurTeachers>
      <PhotoGallery></PhotoGallery>
      <OurSkills></OurSkills>
      <Contact></Contact>
    </div>
  );
};

export default Home;
