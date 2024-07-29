import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../Components/Hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();

  return (
    <div className="flex container mx-auto justify-between gap-4">
      <div className=" w-1/5 bg-primary text-white py-10 px-10">
        <NavLink to="/dashboard/cart">Cart ({cart.length})</NavLink>
      </div>
      <div className=" w-4/5 py-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
