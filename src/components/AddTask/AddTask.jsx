import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    data.email = user.email;
    if (!user) {
      return navigate("/login");
    }
    fetch("http://localhost:5000/addtask", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    reset();
  };
  console.log(errors);

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
            value="Add"
          />
        </div>
      </form>
    </div>
  );
};

export default AddTask;
