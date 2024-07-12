import { useLoaderData, useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";

const ViewStudentHouseDetails = () => {
  const studentHouse = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const hpropet = studentHouse.find((pro) => pro.id === idInt);
  console.log(hpropet);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={hpropet.image}
          className=" w-[40%] md:h-[400px]  rounded-lg shadow-2xl"
        />
        <div>
          <div className="text-3xl mb-4 text-center">
            <p>{hpropet.segment_name}</p>
          </div>
          <h1 className="text-3xl font-bold flex items-center">
            <CiLocationOn></CiLocationOn> <h2>{hpropet.location}</h2>
          </h1>
          <p className="py-6">{hpropet.description}</p>
          <div className="flex flex-row gap-10">
            <div className="w-40 bg-red-600 text-center text-2xl rounded-xl py-2 px-4">
              <h3> Price ${hpropet.price}</h3>
            </div>
            <div className=" bg-yellow-100 text-center text-2xl rounded-xl py-2 px-4">
              <h3>
                {" "}
                House for :{" "}
                <span className="text-red-800">{hpropet.status}</span>
              </h3>
            </div>
          </div>
          <div className="flex flex-row  mt-8">
            <div className="text-center text-2xl rounded-xl py-2 px-4">
              <h3 className=" rounded-lg flex flex-row items-center font-bold">
                {" "}
                {hpropet.area}
              </h3>
            </div>
            <div className="text-center text-2xl rounded-xl py-2 px-4">
              <h3>
                <p>
                  {hpropet.facilities.map((fac) => (
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

export default ViewStudentHouseDetails;
