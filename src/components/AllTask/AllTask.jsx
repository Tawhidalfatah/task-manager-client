import { useContext, useEffect, useState } from "react";
import TaskRow from "./TaskRow";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const AllTask = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [loader, setLoader] = useState(false);
  const userEmail = user?.email;
  const [toggle, setToggle] = useState(false);

  // const {
  //   data: tasks = [],
  //   isLoading: isTaskLoading,
  //   refetch,
  // } = useQuery({
  //   queryKey: ["alltasks", user?.email],
  //   enabled: !loading,
  //   queryFn: async () => {
  //     const res = axios.get(`http://localhost:5000/alltasks/${user?.email}`);
  //     return res.data;
  //   },
  // });

  const handleDelete = (_id) => {
    console.log(_id);
    axios
      .delete(
        `https://task-manager-production-145d.up.railway.app/deletetask/${_id}`
      )
      .then((res) => {
        if (res.data.deletedCount > 0) {
          toast.success("Deleted successfully");
          const remaining = tasks.filter((task) => task._id === _id);
          setTasks(remaining);
          setToggle(!toggle);
          console.log(res.data);
        }
      });
  };

  useEffect(() => {
    setLoader(true);
    fetch(
      `https://task-manager-production-145d.up.railway.app/alltasks/${userEmail}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoader(false);
      });
  }, [userEmail, toggle]);
  return (
    <>
      {loader ? (
        <div className="flex justify-center mt-48">
          <span className="loading loading-bars loading-lg  text-primary"></span>
        </div>
      ) : tasks.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Task Name</th>
                <th>Description</th>
                <th>Priority</th>
                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks?.map((task, index) => (
                <TaskRow
                  key={task._id}
                  taskDetails={task}
                  index={index}
                  handleDelete={handleDelete}
                  setToggle={setToggle}
                  toggle={toggle}
                ></TaskRow>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex justify-center mt-10">
          <div className="flex flex-col items-center gap-10">
            <h2 className="text-3xl"> No Tasks Available</h2>
            <Link to="/addtask">
              <button className="btn btn-primary mx-auto">Add Task</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default AllTask;
