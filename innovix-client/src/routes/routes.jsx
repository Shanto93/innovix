//rafce
import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import About from "../pages/About/About";
import ContactUs from "../pages/ContactUs/ContactUs";
import Login from "./../pages/Login/Login";
import Register from "./../pages/Register/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./Private/PrivateRoute";
import Overview from "../pages/Dashboard/Overview";
import MyProducts from "../pages/Dashboard/seller/MyProducts";
import AddProduct from "../pages/Dashboard/seller/AddProduct";
import SellerRoutes from "./Private/SellerRoutes";
import BuyerRoute from "./Private/BuyerRoute";
import MyWishList from "../pages/Dashboard/buyer/MyWishList";
import ManageUsers from "../pages/Dashboard/admin/ManageUsers";
import AdminRoutes from "./Private/AdminRoutes";
import Pending from "../pages/Dashboard/pending/Pending";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: (
          <PrivateRoute>
            <Products></Products>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard/overview",
        element: <Overview></Overview>,
      },

      //admin routes
      {
        path: "/dashboard/manageUsers",
        element: (
          <AdminRoutes>
            <ManageUsers></ManageUsers>
          </AdminRoutes>
        ),
      },
      //Pending Routes
      {
        path: "/dashboard/pending",
        element: <Pending></Pending>,
      },

      //Buyer Routes
      {
        path: "/dashboard/wishlist",
        element: (
          <BuyerRoute>
            <MyWishList></MyWishList>{" "}
          </BuyerRoute>
        ),
      },

      //Seller Routes
      {
        path: "/dashboard/my-products",
        element: (
          <SellerRoutes>
            <MyProducts></MyProducts>
          </SellerRoutes>
        ),
      },
      {
        path: "/dashboard/add-product",
        element: (
          <SellerRoutes>
            <AddProduct></AddProduct>
          </SellerRoutes>
        ),
      },

      //Buyer Routes
    ],
  },
]);
