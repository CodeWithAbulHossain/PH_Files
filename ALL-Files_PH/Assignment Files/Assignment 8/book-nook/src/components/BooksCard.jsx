import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";
const BooksCard = ({ book }) => {
  const { image, tags, rating, category, author, bookName, bookId } = book;
  return (
    <div>
      <Link to={`/${bookId}`}>
        {" "}
        <div className="mt-6 border-2 rounded-2xl">
          <div className="card  bg-base-100 shadow-xl">
            <figure className="p-6">
              <img src={image} alt="" className="rounded-xl w-96 h-80" />
            </figure>
            <div className="card-body">
              <div className="flex flex-row justify-start  gap-2">
                {tags.map((tag) => (
                  <p className=" p-0 rounded-lg">#{tag}</p>
                ))}
              </div>
              <h2 className="card-title"> {bookName}</h2>
              <p>By : {author}</p>
              <hr />
              <div className="card-actions">
                <p>{category}</p>
                <p className="flex flex-row justify-end gap-2 items-center">
                  <span>{rating}</span> <FcRating></FcRating>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BooksCard;
