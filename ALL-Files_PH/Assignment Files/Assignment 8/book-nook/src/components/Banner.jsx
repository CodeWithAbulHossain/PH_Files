import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="hero  bg-base-200 rounded-xl mt-8 pt-16 pb-16">
        <div className="hero-content flex-col lg:flex-row-reverse md:gap-[200px]">
          <img
            src="../../public/book.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-6xl font-bold mb-4">Books to freshen up</h1>
            <h1 className="text-6xl font-bold"> your bookshelf</h1>
            <Link to="/listedbooks">
              <button className="btn btn-primary hover:bg-slate-300 hover:text-black mt-6 md:mt-16">
                View The List
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
