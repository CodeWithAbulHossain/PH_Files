import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooksRead } from "../Utility";
import { HiUserGroup } from "react-icons/hi";
import { TbPageBreak } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";

const ReadBooks = () => {
  const books = useLoaderData();

  const [bookread, setReadBook] = useState([]);
  useEffect(() => {
    const storedBookIds = getStoredBooksRead();
    if (books.length > 0) {
      const readBook = books.filter((book) =>
        storedBookIds.includes(book.bookId)
      );
      setReadBook(readBook);
      // console.log(books, storedBookIds, readBook);
    }
  }, []);
  return (
    <div className="flex flex-col justify-between items-center   gap-8 mt-5">
      {bookread.map((book) => (
        <div className="hero rounded-2xl border-solid border-2 border-gray-400">
          <div className="hero-content flex-col lg:flex-row gap-8">
            <img
              src={book.image}
              className="w-2/12 rounded-2xl bg-slate-100 p-12"
            />
            <div className="w-10/12">
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

export default ReadBooks;
