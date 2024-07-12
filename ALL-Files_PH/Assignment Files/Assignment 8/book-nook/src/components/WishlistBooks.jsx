import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooksWishlist } from "../Utility";
import { HiUserGroup } from "react-icons/hi";
import { TbPageBreak } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";

const WishlistBooks = () => {
  const books = useLoaderData();

  const [wishBook, setWishbook] = useState([]);
  // const [filterBook, setFilterBook] = useState([]);

  // const handleFilterBook = (filter) => {
  //   if (filter === "all") {
  //     setFilterBook(wishBook);
  //   } else if (filter === "Rating") {
  //     const bookrating = wishBook.filter((book) => book.rating === "rating");
  //     setFilterBook(bookrating);
  //   } else if (filter === "Number of pages") {
  //     const pageBook = wishBook.filter(
  //       (book) => book.totalPages === "totalPages"
  //     );
  //     setFilterBook(pageBook);
  //   } else if (filter === "Publisher year") {
  //     const yearBook = wishBook.filter(
  //       (book) => book.yearOfPublishing === "yearOfPublishing"
  //     );
  //     setFilterBook(yearBook);
  //   }
  // };

  useEffect(() => {
    const storedBookIds = getStoredBooksWishlist();
    if (books.length > 0) {
      const wishBook = books.filter((book) =>
        storedBookIds.includes(book.bookId)
      );
      setWishbook(wishBook);
      // console.log(books, storedBookIds, readBook);
    }
  }, []);
  return (
    <div className="flex flex-col gap-12 mt-5">
      {wishBook.map((book) => (
        <div className="hero gap-12 rounded-2xl border-solid border-2 border-indigo-600">
          <div className="hero-content flex-col lg:flex-row justify-start items-center gap-12">
            <div className="w-[20%]">
              <img src={book.image} className=" rounded-2xl bg-slate-100 p-8" />
            </div>
            <div className="w-[80%]">
              <h1 className="text-2xl font-bold">{book.bookName}</h1>
              <p className="font-medium">By : {book.author}</p>
              <div className="flex flex-row justify-start gap-11 md:gap-40 items-center mt-2">
                <p className="font-medium">Tag : #{book.tags}</p>
                <p className="flex flex-row justify-between items-center gap-2">
                  {" "}
                  <CiLocationOn></CiLocationOn> Year of Publishing :{" "}
                  {book.yearOfPublishing}
                </p>
              </div>
              <div className="flex flex-row justify-start items-center gap-16">
                <p className="py-6 flex flex-row gap-2 justify-start items-center">
                  {" "}
                  <HiUserGroup></HiUserGroup> Publisher : {book.publisher}
                </p>
                <p className="flex flex-row gap-2 justify-start items-center">
                  {" "}
                  <TbPageBreak></TbPageBreak> Page : {book.totalPages}
                </p>
              </div>
              <hr />
              <div className="flex flex-row justify-start gap-6 items-center mt-4">
                <h2 className="px-6 py-3 bg-lime-200 text-lime-500 rounded-3xl">
                  Category : {book.category}
                </h2>
                <h2 className="px-6 py-3 bg-orange-100 text-orange-400 rounded-3xl">
                  Rating : {book.rating}
                </h2>{" "}
                <button class="btn bg-lime-500 rounded-3xl text-white">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishlistBooks;
