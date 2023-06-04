import { useForm } from "react-hook-form";

const AddTask = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    reset();
    console.log(data);
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
            {...register("Task Name", { required: true })}
          />
        </div>
        <div className="flex justify-center my-5">
          <textarea
            placeholder="Task Description"
            className="textarea textarea-primary"
            {...register("Task Description", { required: true })}
          />
        </div>
        <div className="flex w-full justify-center items-center gap-2 my-2">
          <label className="label">
            <span className="label-text text-xl font-semibold">Status:</span>
          </label>
          <select
            className="select select-bordered select-primary w-full"
            {...register("Status", { required: true })}
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
                {...register("Priority")}
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
                {...register("Priority")}
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
                {...register("Priority")}
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
