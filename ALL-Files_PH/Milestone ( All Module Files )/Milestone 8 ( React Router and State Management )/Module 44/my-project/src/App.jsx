import "./App.css";
import DaisyNavBar from "./components/Header/DaisyNavBar";
import NavBar from "./components/NavBar/NavBar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <NavBar></NavBar>

      <div className="mt-32">
        <PriceOptions></PriceOptions>
      </div>
      {/* <div className="mt-44">
        <DaisyNavBar></DaisyNavBar>
      </div> */}
      <h1 className="text-3xl text-center mt-44 font-bold">Vite + React</h1>
    </>
  );
}

export default App;
