import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "../Components/Private/PrivateRoute";
import Cart from "../Pages/Dashboard/Cart/Cart";
import Users from "../Pages/Dashboard/Users/Users";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import History from "../Pages/Dashboard/Payment/History";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/shop/:category",
        element: <OurShop></OurShop>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
        children: [
          {
            path: "cart",
            element: <Cart></Cart>,
          },
          {
            path: "payment",
            element: <Payment></Payment>,
          },
          {
            path: "history",
            element: <History></History>,
          },
          {
            path: "users",
            element: <Users></Users>,
          },
          {
            path: "additems",
            element: <AddItems></AddItems>,
          },
          {
            path: "manageitems",
            element: <ManageItems></ManageItems>,
          },
          {
            path: "update/:id",
            element: <UpdateItem></UpdateItem>,
            loader: ({ params }) =>
              fetch(`http://localhost:3000/menu/${params.id}`),
          },
        ],
      },
    ],
  },
]);
