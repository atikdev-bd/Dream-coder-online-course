import { createBrowserRouter } from "react-router-dom";
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
        loader: ({ params }) => {
          fetch(`http://localhost:4000/course/${parseInt(params.id)}`);
        },
        element: <CourseDetails></CourseDetails>,
      },
    ],
  },
]);
