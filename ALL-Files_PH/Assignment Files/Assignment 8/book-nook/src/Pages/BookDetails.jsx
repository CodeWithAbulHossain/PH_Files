import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveBooks, saveWish } from "../Utility";

const BookDetails = () => {
  const book = useLoaderData();
  const { bookId } = useParams();
  const bok = book.find((book) => book.bookId === bookId);

  const { tags } = bok;

  const handleReadBooks = () => {
    saveBooks(bookId);
    toast("Already added successfully");
  };

  const handleReadWish = () => {
    saveWish(bookId);
    toast("Already added successfully");
  };

  return (
    <div className="mt-16 mb-32">
      <div className="card card-side bg-base-100  flex flex-col md:flex-row justify-between gap-6">
        <div className="w-1/2 rounded-xl">
          <figure>
            <img src={bok.image} alt="Movie" />
          </figure>
        </div>
        <div className="card-body w-1/2">
          <h2 className="card-title text-3xl font-bold">{bok.bookName}</h2>
          <p className="font-bold">By : {bok.author}</p>
          <div className="mb-12">
            <hr />
            <p className="mt-4 mb-4">{bok.category}</p>
            <hr />
          </div>
          <div className="flex flex-col justify-center gap-4 mb-12">
            <p>
              {" "}
              <span className="font-bold">Review : </span> {bok.review}
            </p>
            <p className="flex flex-row justify-start items-center">
              {" "}
              <span className="font-bold"> Tag : </span>
              {tags.map((tags) => (
                <p> # {tags}</p>
              ))}
            </p>
          </div>
          <hr />
          <div className="flex flex-row justify-start gap-6 items-center mt-8">
            <div>
              <p>Number of Pages: </p>
              <p>Publisher : </p>
              <p>Year of Publishing: </p>
              <p>Rating : </p>
            </div>
            <div className="font-bold">
              <p>{bok.totalPages}</p>
              <p>{bok.publisher}</p>
              <p>{bok.yearOfPublishing}</p>
              <p>{bok.rating}</p>
            </div>
          </div>
          <div className="flex flex-row justify-start items-center gap-10 mt-6">
            <button
              onClick={() => handleReadBooks(book)}
              className="btn btn-ghost border-solid border-2 border-indigo-600 px-6 font-bold"
            >
              Read
            </button>
            <button
              onClick={() => handleReadWish(book)}
              className="btn btn-accent text-white"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
