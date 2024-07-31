import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../Components/Hooks/useCart";
import useAdmin from "../../Components/Hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  console.log(isAdmin);

  return (
    <div className="flex container mx-auto justify-between gap-4">
      <div className=" w-1/5 bg-primary text-white py-10 px-10">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/dashboard/cart">Cart ({cart.length})</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/users">Users</NavLink>
          </li>
        </ul>
      </div>
      <div className=" w-4/5 py-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
