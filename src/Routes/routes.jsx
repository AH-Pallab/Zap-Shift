import Home from "../Pages/Home/Home";
import RootLayout from "../Layouts/RootLayout";
import SignIn from "../Layouts/Authentication/SignIn";
import AuthLayout from "../Layouts/Authentication/AuthLayout";
import Register from "../Layouts/Authentication/Register";
import Coverage from "../Pages/Coverage/Coverage";
import PrivateRoute from "./PrivateRoutes";
import { createBrowserRouter } from "react-router";
import SendPercel from "../Pages/SendPercel/SendPercel";
import Dashboard from "../Layouts/Dashboard";
import Myparcels from "../Pages/Dashboard/Myparcels";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "coverage",
        element: <Coverage></Coverage>,
      },
      {
        path: "send-percel",
        element: (
          <PrivateRoute>
            <SendPercel></SendPercel>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
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
        path: "my-parcels",
        element: <Myparcels></Myparcels>,
      },
    ],
  },
]);

