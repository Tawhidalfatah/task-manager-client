import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar";
import Footer from "../Shared/Footer";

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <NavBar></NavBar>
      <div className="mb-5">
        <Outlet />
      </div>
      <div className="absolute bottom-0 w-full h-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
