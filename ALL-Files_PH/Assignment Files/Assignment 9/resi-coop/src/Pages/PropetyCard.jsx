import "animate.css";
import { GiHouse } from "react-icons/gi";
import { Link } from "react-router-dom";
const PropetyCard = ({ propety }) => {
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
  } = propety;
  return (
    <div>
      <div className="card md:w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl w-full h-64 relative"
          />
        </figure>
        <div className="w-20 bg-red-400 text-center text-black rounded-2xl p-2  absolute top-52 left-2 animate__animated animate__backInDown">
          ${price}
        </div>
        <div className="mt-4 ml-3 flex flex-col md:flex-row justify-between mr-4">
          <p className="font-bold text-red-600">{status}</p>
          <p className="font-bold text-sky-500 text-xl">{segment_name}</p>
        </div>

        <div className="card-body items-center text-center">
          <h2 className="card-title text-teal-800 text-2xl">{estate_title}</h2>
          <div>
            <h3 className="text-black font-medium text-2xl">{location}</h3>
          </div>
          <p>{description}</p>
        </div>
        <hr />
        <div className="flex flex-row items-center">
          <div className="flex items-center ml-4 mt-4 mb-4 gap-1 w-1/2">
            <GiHouse></GiHouse> <p>{area}</p>
          </div>
          <div className="card-actions ">
            <p>
              {facilities.map((fac) => (
                <span className="font-medium">Facilities : {fac}</span>
              ))}
            </p>
          </div>
        </div>

        <div className="flex justify-end mr-2 ">
          <Link to={`/propety/${id}`}>
            {" "}
            <button className="btn bg-sky-300 text-white hover:bg-orange-300 hover:text-black">
              View Property
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropetyCard;
