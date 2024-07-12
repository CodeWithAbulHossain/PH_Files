import Banner from "../../components/Banner/Banner";
import NavBar from "../shared/NavBar/NavBar";

const Home = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <NavBar></NavBar>
      </div>
      <div className="max-w-7xl mx-auto">
        <Banner></Banner>
      </div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl mt-4 ml-6 font-bold text-green-800">
          Craft Items Section
        </h2>
      </div>
    </div>
  );
};

export default Home;
