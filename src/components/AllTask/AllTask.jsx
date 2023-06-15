import { useContext, useEffect, useState } from "react";
import TaskRow from "./TaskRow";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import { toast } from "react-hot-toast";

const AllTask = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [loader, setLoader] = useState(false);
  const userEmail = user?.email;

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
    axios.delete(`http://localhost:5000/deletetask/${_id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        toast.success("Deleted successfully");
        const remaining = tasks.filter((task) => task._id === _id);
        setTasks(remaining);
        console.log(res.data);
      }
    });
  };

  useEffect(() => {
    setLoader(true);
    fetch(`http://localhost:5000/alltasks/${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoader(false);
      });
  }, [userEmail]);
  return (
    <>
      {loader ? (
        <div className="flex justify-center mt-48">
          <span className="loading loading-bars loading-lg  text-primary"></span>
        </div>
      ) : (
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
                ></TaskRow>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default AllTask;
