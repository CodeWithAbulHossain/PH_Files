import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import PropetyCard from "./PropetyCard";
import { Helmet } from "react-helmet-async";
import Footer from "./Footer";

const Home = () => {
  const propety = useLoaderData();
  console.log(propety);
  return (
    <div className="max-w-7xl mx-auto">
      <Helmet>
        {" "}
        <title>ResiCoop | Home</title>{" "}
      </Helmet>
      <Banner></Banner>
      <section className="mt-24 bg-cyan-100">
        <div>
          <h2 className="text-xl font-medium ml-5 pt-10">RECENT PROPERTIES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 md:p-4">
            {propety.map((apropety) => (
              <PropetyCard key={apropety.id} propety={apropety}></PropetyCard>
            ))}
          </div>
        </div>
      </section>
      <div className="mt-6">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
