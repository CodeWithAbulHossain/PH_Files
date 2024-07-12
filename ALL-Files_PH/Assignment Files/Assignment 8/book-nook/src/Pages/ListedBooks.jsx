import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";

const ListedBooks = () => {
  const books = useLoaderData();

  const [tabIndex, settabIndex] = useState(0);

  return (
    <div>
      <div className="text-3xl font-bold text-center bg-slate-200 p-6 rounded-xl">
        <h2>Book</h2>
      </div>
      <div className="flex justify-end mr-12 mt-4">
        <details className="dropdown">
          <summary className="m-1 btn">Sort By</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleFilterBook("Rating")}>
              <a>Rating</a>
            </li>
            <li onClick={() => handleFilterBook("Number of pages")}>
              <a>Number of pages</a>
            </li>
            <li onClick={() => handleFilterBook("totalPages")}>
              <a>Publisher year</a>
            </li>
          </ul>
        </details>
      </div>
      <div>
        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap text-gray-100 mt-8 ml-2">
          <Link
            to=""
            onClick={() => settabIndex(0)}
            rel="noopener noreferrer"
            href="#"
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 0 ? "border border-b-0" : "border-b"
            } rounded-t-lg border-gray-400 text-gray-50`}
          >
            <span className="text-black font-bold">Read Books</span>
          </Link>
          <Link
            onClick={() => settabIndex(1)}
            to="wishlistbooks"
            rel="noopener noreferrer"
            href="#"
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 1 ? "border border-b-0" : "border-b"
            } rounded-t-lg border-gray-400 text-gray-50`}
          >
            <span className="text-black font-bold">Wishlist Books</span>
          </Link>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;
