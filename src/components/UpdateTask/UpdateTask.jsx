import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const UpdateTask = () => {
  const paramsId = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    // reset,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .put(
        `https://task-manager-production-145d.up.railway.app/updatetask/${paramsId.id}`,
        data
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Task Updated");
          navigate("/alltasks");
        }
      })
      .catch((err) => console.log(err));
    console.log(data);
  };
  return (
    <div className="mt-48 flex flex-col items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center">
          <input
            type="text"
            className="input input-bordered input-primary w-full"
            placeholder="Task Name"
            {...register("task", { required: true })}
          />
        </div>
        <div className="flex justify-center my-5">
          <textarea
            placeholder="Task Description"
            className="textarea textarea-primary"
            {...register("description", { required: true })}
          />
        </div>
        <div className="flex w-full justify-center items-center gap-2 my-2">
          <label className="label">
            <span className="label-text text-xl font-semibold">Status:</span>
          </label>
          <select
            className="select select-bordered select-primary w-full"
            {...register("status", { required: true })}
          >
            <option value="completed">Completed</option>
            <option value="ongoing">Ongoing</option>
            <option value="pending">Pending</option>
          </select>
        </div>

        <div className="flex justify-center items-center gap-2 my-2 ">
          <label className="label">
            <span className="label-text text-xl font-semibold">Priority :</span>
          </label>
          <div className="">
            <label className="label cursor-pointer">
              <span className="label-text mr-2">Low</span>
              <input
                className="radio radio-primary"
                {...register("priority")}
                type="radio"
                value="low"
              />
            </label>
          </div>
          <div className="">
            <label className="label cursor-pointer">
              <span className="label-text mr-2">Medium</span>
              <input
                className="radio radio-warning"
                {...register("priority")}
                type="radio"
                value="medium"
              />
            </label>
          </div>
          <div className="">
            <label className="label cursor-pointer">
              <span className="label-text mr-2">High</span>
              <input
                className="radio radio-error"
                {...register("priority")}
                type="radio"
                value="high"
              />
            </label>
          </div>
        </div>

        <div className="flex justify-center my-5">
          <input
            className="btn btn-primary text-xl"
            type="submit"
            value="Update"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateTask;
