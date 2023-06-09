import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Banner from "../components/Banner/Banner";
import AddTask from "../components/AddTask/AddTask";
import AllTask from "../components/AllTask/AllTask";
import Login from "../components/Login/Login";
import UpdateTask from "../components/UpdateTask/UpdateTask";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Banner />,
      },
      {
        path: "alltasks",
        element: <AllTask></AllTask>,
      },
      {
        path: "updatetask/:id",
        element: <UpdateTask></UpdateTask>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "addtask",
        element: <AddTask></AddTask>,
      },
    ],
  },
]);
