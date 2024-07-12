import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 pl-0 pr-0 pt-6 pb-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold border-solid border-2 border-indigo-600"
                  : "font-bold"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/listedbooks"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold border-solid border-2 border-indigo-600"
                  : "font-bold"
              }
            >
              Listed Books
            </NavLink>
            <NavLink
              to="/pagestoread"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold border-solid border-2 border-indigo-600"
                  : "font-bold"
              }
            >
              Pages to Read
            </NavLink>
            <NavLink
              to="/upcomingbook"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold border-solid border-2 border-indigo-600"
                  : "font-bold"
              }
            >
              Upcoming Book
            </NavLink>
            <NavLink
              to="/bestdeal"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold border-solid border-2 border-indigo-600"
                  : "font-bold"
              }
            >
              Best Deal
            </NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost md:text-3xl md:font-bold text-amber-950 gap-0 p-0">
          B<span className="text-red-700">o</span>ok{" "}
          <span className="text-red-600">N</span> ook
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6 text-xl">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-bold border-solid border-2 border-indigo-600 p-1 rounded-xl"
                : "font-bold"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/listedbooks"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-bold border-solid border-2 border-indigo-600 p-1 rounded-xl"
                : "font-bold"
            }
          >
            Listed Books
          </NavLink>
          <NavLink
            to="/pagestoread"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-bold border-solid border-2 border-indigo-600 p-1 rounded-xl"
                : "font-bold"
            }
          >
            Pages to Read
          </NavLink>
          <NavLink
            to="/upcomingbook"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-bold border-solid border-2 border-indigo-600 p-1 rounded-xl"
                : "font-bold"
            }
          >
            Upcoming Book
          </NavLink>
          <NavLink
            to="/bestdeal"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-bold border-solid border-2 border-indigo-600 p-1 rounded-xl"
                : "font-bold"
            }
          >
            Best Deal
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-1 md:gap-3 flex flex-col md:flex-row">
        <a className="btn btn-primary hover:bg-slate-100 hover:text-black">
          Sign In
        </a>
        <a className="btn btn-accent hover:bg-slate-100">Sign Up</a>
      </div>
    </div>
  );
};

export default NavBar;
