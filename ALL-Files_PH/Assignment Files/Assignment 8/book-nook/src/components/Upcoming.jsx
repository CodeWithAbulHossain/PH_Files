const Upcoming = ({ books }) => {
  const { bookName, author, image, category, publisher } = books;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <img className="w-40 h-40" src={image} alt="" />
          <h2 className="card-title">{bookName}</h2>
          <p>{author}</p>
          <div className="card-actions">
            <p>{category}</p>
            <p>{publisher}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
