import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../Components/Hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();

  return (
    <div className="flex container mx-auto justify-between gap-4 h-screen">
      <div className=" w-1/5 bg-primary text-white py-10 px-10">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/dashboard/cart">Cart ({cart.length})</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">history</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/users">Users</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/additems">Add Items</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageitems">Manage Items</NavLink>
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
