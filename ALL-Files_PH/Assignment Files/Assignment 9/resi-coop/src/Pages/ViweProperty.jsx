import { useLoaderData, useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { Helmet } from "react-helmet-async";

const ViweProperty = () => {
  const propety = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const propet = propety.find((pro) => pro.id === idInt);
  // console.log(propet);
  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        {" "}
        <title>ResiCoop | View Propety</title>{" "}
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={propet.image}
          className=" w-[40%] md:h-[400px]  rounded-lg shadow-2xl"
        />
        <div>
          <div className="text-3xl mb-4 text-center">
            <p>{propet.segment_name}</p>
          </div>
          <h1 className="text-3xl font-bold flex items-center">
            <CiLocationOn></CiLocationOn> <h2>{propet.location}</h2>
          </h1>
          <p className="py-6">{propet.description}</p>
          <div className="flex flex-row gap-10">
            <div className="w-40 bg-red-600 text-center text-2xl rounded-xl py-2 px-4">
              <h3> Price ${propet.price}</h3>
            </div>
            <div className=" bg-yellow-100 text-center text-2xl rounded-xl py-2 px-4">
              <h3>
                {" "}
                House for :{" "}
                <span className="text-red-800">{propet.status}</span>
              </h3>
            </div>
          </div>
          <div className="flex flex-row  mt-8">
            <div className="text-center text-2xl rounded-xl py-2 px-4">
              <h3 className=" rounded-lg flex flex-row items-center font-bold">
                {" "}
                {propet.area}
              </h3>
            </div>
            <div className="text-center text-2xl rounded-xl py-2 px-4">
              <h3>
                <p>
                  {propet.facilities.map((fac) => (
                    <span className="font-medium">Facilities : {fac}</span>
                  ))}
                </p>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViweProperty;
