import { createBrowserRouter } from "react-router-dom";
import CheckOut from "../components/CheckOut/CheckOut";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:4000/courses"),
        element: <Home></Home>,
      },
      {
        path: "/home",
        loader: () => fetch("http://localhost:4000/courses"),
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
          const data = fetch(`http://localhost:4000/course/${id}`);
          return data;
        },
      },
      {
        path: "/check/:id",
        element: <CheckOut></CheckOut>,
        loader: ({ params }) => {
          const id = parseInt(params.id);
          const data = fetch(`http://localhost:4000/check/${id}`);
          return data;
        },
      },
    ],
  },
]);
