import { NavLink } from "react-router-dom";

const NavLinks = (
  <>
    <li>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-primary active:bg-primary" : "active:bg-primary"
        }
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/alltasks"
        className={({ isActive }) =>
          isActive ? "text-primary active:bg-primary" : "active:bg-primary"
        }
      >
        Tasks
      </NavLink>
    </li>
  </>
);

const NavBar = () => {
  return (
    <div className="navbar bg-base-300 rounded-xl mt-5 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm text-xl font-semibold dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavLinks}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-2xl">Task Manager</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-xl font-semibold px-1">
          {NavLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary text-xl">Login</a>
      </div>
    </div>
  );
};

export default NavBar;
