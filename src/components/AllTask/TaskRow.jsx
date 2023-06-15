import axios from "axios";
import { toast } from "react-hot-toast";
import { FaCheck, FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const TaskRow = ({ taskDetails, index, handleDelete, setToggle, toggle }) => {
  const { _id, task, description, status, priority } = taskDetails;

  const handleComplete = (id) => {
    axios
      .patch(
        `https://task-manager-production-145d.up.railway.app/completetask/${id}`
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Task Completed");
          setToggle(!toggle);
        }
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{task}</td>
      <td>{description}</td>
      <td>{priority}</td>
      <td>{status}</td>
      <td className="flex justify-center gap-10">
        {status !== "completed" && (
          <div className="tooltip" data-tip="Complete Task">
            <button onClick={() => handleComplete(_id)} className="">
              <FaCheck className="text-green-600" size="25px" />
            </button>
          </div>
        )}
        {status !== "completed" && (
          <div className="tooltip" data-tip="Edit Task">
            <Link to={`/updatetask/${_id}`}>
              <button className="">
                <FaEdit className="text-primary" size="25px" />
              </button>
            </Link>
          </div>
        )}
        <div className="tooltip" data-tip="Delete Task">
          <button onClick={() => handleDelete(_id)} className="">
            <FaTrashAlt className="text-red-600" size="25px" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TaskRow;
