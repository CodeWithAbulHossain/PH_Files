import { FaLaptopHouse } from "react-icons/fa";
import man from "../assets/man.jpg";
import { Helmet } from "react-helmet-async";
import Footer from "./Footer";
const AboutUs = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <Helmet>
          {" "}
          <title>ResiCoop | About US</title>{" "}
        </Helmet>
        <div className="md:w-2/3">
          <div>
            <div className="flex flex-row gap-4 justify-start items-center">
              <div>
                <FaLaptopHouse className="text-6xl text-cyan-600"></FaLaptopHouse>
              </div>
              <div>
                <h2 className="text-5xl font-bold">About Estate</h2>
                <p className="font-medium">Who We Are & What We Do</p>
              </div>
            </div>
            <p className="mt-6 font-medium">
              Welcome to Residential Website, your ultimate destination for
              finding the perfect home. With our dedicated team and advanced
              tools, we're here to make your home search simple and stress-free.
              Explore our listings and let us help you find your dream home
              today.
            </p>
            <button className="btn mt-10 bg-red-500 text-white">
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-1/3">
          <img className="w-96 h-96 rounded-xl" src={man} alt="" />
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AboutUs;
