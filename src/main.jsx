import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./Page/Home";
import AllCourses from "./Page/AllCourses";
import AboutUs from "./Components/AboutUs";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import AuthLayout from "./Page/AuthLayout";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AuthProvider from "./Provider/AuthProvider";
import CourseDetails from "./Page/CourseDetails";
import PrivetRoute from "./Provider/PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <AllCourses></AllCourses>,
      },
      {
        path: "/course/:id",
        element: (
          <PrivetRoute>
            <CourseDetails></CourseDetails>
          </PrivetRoute>
        ),
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/testimonials",
        element: <Testimonial></Testimonial>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
