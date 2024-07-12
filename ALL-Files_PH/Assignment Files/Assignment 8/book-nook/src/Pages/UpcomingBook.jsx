import { useLoaderData } from "react-router-dom";
import Upcoming from "../components/Upcoming";

const UpcomingBook = () => {
  const book = useLoaderData();
  return (
    <div className="grid grid-cols-1 md: grid-cols-3 justify-between items-center gap-4">
      {book.map((book) => (
        <Upcoming key={book.bookId} books={book}></Upcoming>
      ))}
    </div>
  );
};

export default UpcomingBook;
