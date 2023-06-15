import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate("/addtask");
      })
      .catch((err) => console.log(err));
  };

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
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Login to see your pending tasks!!.</p>
        </div>
        <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
            <div className="form-control mt-6">
              <button
                onClick={handleGoogleSignIn}
                className="btn bg-[#4285F4] hover:bg-[#0f64f2]  text-white  gap-5 "
              >
                Sign in With Google
              </button>
            </div>
          </form>
          <p className="text-center">
            <small>
              New Here? <Link to="/signup">Create an account</Link>{" "}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
