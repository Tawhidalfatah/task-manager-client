import { Link } from "react-router-dom";
import bannerImg from "../../assets/checklist.png";

const Banner = () => {
  return (
    <div className="hero min-h-screen  rounded-xl mt-10 pb-10">
      <div className="hero-content flex-col lg:flex-row">
        <img className="w-1/2" src={bannerImg} />
        <div>
          <h1 className="text-5xl font-bold">Pocket Task Manager!</h1>
          <p className="py-6">
            Get started to add your tasks and as well as edit them.
          </p>
          <Link to="/addtask">
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
