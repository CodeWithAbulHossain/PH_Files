import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 text-center bg-zinc-100 ml-6 rounded-lg mt-12">
      <div>
        <h2 className="text-2xl">Reading Time: {readingTime}</h2>
      </div>
      <h2 className="text-3xl bg-slate-100 rounded-3xl">
        Bookmarks: {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.prototype = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmarks;
