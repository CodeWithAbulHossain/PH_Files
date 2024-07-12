import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListedBooks from "./Pages/ListedBooks.jsx";
import PagesToRead from "./Pages/PagesToRead.jsx";
import MainLayouts from "./LayOuts/MainLayouts.jsx";
import Home from "./Pages/Home.jsx";
import BookDetails from "./Pages/BookDetails.jsx";
import ReadBooks from "./components/ReadBooks.jsx";
import WishlistBooks from "./components/WishlistBooks.jsx";
import { Toaster } from "react-hot-toast";
import UpcomingBook from "./Pages/UpcomingBook.jsx";
import BestDeal from "./Pages/BestDeal.jsx";
import Error from "./Pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("books.json"),
      },
      {
        path: "/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("books.json"),
      },
      {
        path: "/listedbooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("books.json"),
        children: [
          {
            path: "",
            element: <ReadBooks></ReadBooks>,
            loader: () => fetch("/books.json"),
          },
          {
            path: "wishlistbooks",
            element: <WishlistBooks></WishlistBooks>,
            loader: () => fetch("/books.json"),
          },
        ],
      },
      {
        path: "/pagestoread",
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch("books.json"),
      },
      {
        path: "/upcomingbook",
        element: <UpcomingBook></UpcomingBook>,
        loader: () => fetch("upcomingbook.json"),
      },
      {
        path: "/bestdeal",
        element: <BestDeal></BestDeal>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
  </React.StrictMode>
);
