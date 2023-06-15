import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);

        navigate("/addtask");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="hero min-h-screen">
      <div className="card-body">
        <h2 className="text-4xl">Sign in to see the tasks</h2>
        <div className="form-control mt-6">
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-primary hover:bg-primary  text-white  gap-5 "
          >
            Sign in With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
