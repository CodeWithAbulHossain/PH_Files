import { Link } from "react-router-dom";

const ViewStudentHouse = ({ studentHouse }) => {
  const {
    id,
    estate_title,
    image,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
  } = studentHouse;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-64" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {estate_title}
            <div className="badge badge-secondary gap-2 ">
              <p>{status}</p>
              <p className="text-black">${price}</p>
            </div>
          </h2>
          <p className="text-xl text-green-400">{segment_name}</p>
          <p>{description}</p>
          <div className="card-actions">
            <p className="font-bold">{location}</p>
            <p className="text-red-400 font-medium">{area}</p>
            <p>
              {facilities.map((fac) => (
                <span className="font-medium">Facilities : {fac}</span>
              ))}
            </p>
          </div>
        </div>
        <Link to={`/studentHouse/${id}`}>
          {" "}
          <button className="btn bg-sky-300 text-white hover:bg-orange-300 hover:text-black">
            View Property
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ViewStudentHouse;
