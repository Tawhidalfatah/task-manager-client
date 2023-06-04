import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Banner from "../components/Banner/Banner";
import AddTask from "../components/AddTask/AddTask";

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
        element: <div>All tasks</div>,
      },
      {
        path: "addtask",
        element: <AddTask></AddTask>,
      },
    ],
  },
]);
