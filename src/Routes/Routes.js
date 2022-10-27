import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import CheckOut from "../components/CheckOut/CheckOut";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Home from "../components/Home/Home";
import LandPage from "../components/LandPage/LandPage";
import Login from "../components/Login/Login";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import Register from "../components/Register/Register";
import Main from "../layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        path: "/",
        loader: () =>
          fetch("https://dream-courses-server-side.vercel.app/courses"),
        element: <LandPage></LandPage>,
      },
      {
        path: "/home",
        loader: () =>
          fetch("https://dream-courses-server-side.vercel.app/courses"),
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/course/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) => {
          const id = parseInt(params.id);
          const data = fetch(
            `https://dream-courses-server-side.vercel.app/course/${id}`
          );
          return data;
        },
      },
      {
        path: "/check/:id",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          const id = parseInt(params.id);
          const data = fetch(
            `https://dream-courses-server-side.vercel.app/check/${id}`
          );
          return data;
        },
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);
