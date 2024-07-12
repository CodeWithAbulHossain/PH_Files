import PropTypes from "prop-types";
import { CiBookmarkCheck } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark, handleAddToReadTime }) => {
  const {
    id,
    Cover,
    Title,
    Author,
    Author_image,
    Posted_time,
    Reading_time,
    Hashtags,
  } = blog;
  return (
    <div className="mb-24">
      <img
        className="w-full"
        src={Cover}
        alt={`Cover picture of the the title ${Title}`}
      />
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-4">
          <img className="w-12 h-12 rounded-3xl" src={Author_image} alt="" />
          <div className="">
            <h3 className="terxt-2xl"> {Author}</h3>
            <p>{Posted_time}</p>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <span>{Reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="bg-white border-none ml-4 text-red-900 text-2xl"
          >
            <CiBookmarkCheck></CiBookmarkCheck>
          </button>
        </div>
      </div>
      <h2 className="text-4xl"> {Title}</h2>
      <p>
        {Hashtags.map((hash, idx) => (
          <span key={idx}>
            <a className="no-underline text-purple-900" href="">
              {hash}
            </a>{" "}
          </span>
        ))}
      </p>

      <button
        onClick={() => handleAddToReadTime(id, Reading_time)}
        className="bg-white border-none text-purple-900 underline font-bold"
      >
        Mark As Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleAddToReadTime: PropTypes.func,
};

export default Blog;
