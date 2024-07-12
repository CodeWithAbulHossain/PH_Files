import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AboutUs from "../Pages/AboutUs";
import Gallery from "../Pages/Gallery";
import Contacts from "../Pages/Contacts";
import ViweProperty from "../Pages/ViweProperty";
import StudentAcc from "../Pages/StudentAcc";
import ViewStudentHouseDetails from "../Pages/ViewStudentHouseDetails";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Profile from "../Pages/Profile";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/propetycarddata.json"),
      },
      {
        path: "/propety/:id",
        element: (
          <PrivateRoute>
            <ViweProperty></ViweProperty>
          </PrivateRoute>
        ),
        loader: () => fetch("/propetycarddata.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
        loader: () => fetch("/propetycarddata.json"),
      },
      {
        path: "/contscts",
        element: <Contacts></Contacts>,
      },
      {
        path: "/studentaccommodation",
        element: <StudentAcc></StudentAcc>,
        loader: () => fetch("/studenthousedata.json"),
      },
      {
        path: "/studentHouse/:id",
        element: (
          <PrivateRoute>
            <ViewStudentHouseDetails></ViewStudentHouseDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/studenthousedata.json"),
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);

export default routes;
