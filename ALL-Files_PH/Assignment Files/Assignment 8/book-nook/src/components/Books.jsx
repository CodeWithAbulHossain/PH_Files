import { useLoaderData } from "react-router-dom";
import BooksCard from "./BooksCard";
const Books = () => {
  const books = useLoaderData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {books.map((book) => (
        <BooksCard key={books.bookId} book={book}></BooksCard>
      ))}
    </div>
  );
};

export default Books;
