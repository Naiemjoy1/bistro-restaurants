import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <>
      <NavLink to="/">
        <li>
          <a>Home</a>
        </li>
      </NavLink>
      <NavLink to="/menu">
        <li>
          <a>Our Menu</a>
        </li>
      </NavLink>
      <NavLink to="/shop/salad">
        <li>
          <a>Our Shop</a>
        </li>
      </NavLink>
      <NavLink to="/dashboard">
        <li>
          <a>Dashboard</a>
        </li>
      </NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-sm btn-ghost">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          <a href="/login" className="btn btn-sm">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
