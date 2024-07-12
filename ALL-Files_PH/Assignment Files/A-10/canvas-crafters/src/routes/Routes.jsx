import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AllArtCraftItem from "../pages/All Art & craft Items/AllArtCraftItem";
import AddCraftItem from "../pages/Add Craft Item/AddCraftItem";
import MyArtCraftList from "../pages/My Art&Craft List/MyArtCraftList";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Error from "../pages/NotFound/Error";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allartcraftitems",
        element: <AllArtCraftItem></AllArtCraftItem>,
      },
      {
        path: "/addcraftitem",
        element: <AddCraftItem></AddCraftItem>,
      },
      {
        path: "/myartcraftlist",
        element: <MyArtCraftList></MyArtCraftList>,
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
]);

export default routes;
