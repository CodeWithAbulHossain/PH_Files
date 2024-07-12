import Banner from "../components/Banner";
import Books from "../components/Books";

const Home = () => {
  return (
    <div className="mx-w-7xl mx-auto">
      <div className="mb-32">
        <Banner></Banner>
      </div>
      <div className="text-center text-4xl font-bold mb-6">
        <h2>Books</h2>
      </div>
      <div className="mb-32">
        <Books></Books>
      </div>
    </div>
  );
};

export default Home;
