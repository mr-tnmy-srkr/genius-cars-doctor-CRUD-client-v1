import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const NavItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to={`/about`}>About</Link>
      </li>
      <li>
        <Link>Services</Link>
      </li>
      {/* <Link>Blog</Link> */}
      {/* <Link>Contact</Link> */}
      {user?.email ? 
      (<>
        <li>
          <Link to={'/bookings'}>
           My Bookings
          </Link>
        </li>
        <li>
          <Link>
            <button onClick={handleLogOut}>Logout</button>
          </Link>
        </li>
        </>
      ) : (
        <li>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className=" shadow-xl">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52 space-y-3 p-4 text-lg w-36"
            >
              {NavItems}
            </ul>
          </div>
          <Link to="/" className="normal-case text-xl px-0">
            <img className="h-12 mx-auto" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center ">
          <ul
            tabIndex={0}
            className="pb-4 hidden md:flex items-center  gap-5 mt-3 z-[1] p-2  bg-base-100 rounded-box "
          >
            {NavItems}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
          <button className="btn btn-outline btn-warning capitalize ml-4">
            Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
