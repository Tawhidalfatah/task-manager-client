import { FaCheck, FaEdit, FaTrashAlt } from "react-icons/fa";

const TaskRow = ({ taskDetails, index, handleDelete }) => {
  const { _id, task, description, status, priority } = taskDetails;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{task}</td>
      <td>{description}</td>
      <td>{priority}</td>
      <td>{status}</td>
      <td className="flex justify-center gap-10">
        <div className="tooltip" data-tip="Complete Task">
          <button className="">
            <FaCheck className="text-green-600" size="25px" />
          </button>
        </div>
        <div className="tooltip" data-tip="Edit Task">
          <button className="">
            <FaEdit className="text-primary" size="25px" />
          </button>
        </div>
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
