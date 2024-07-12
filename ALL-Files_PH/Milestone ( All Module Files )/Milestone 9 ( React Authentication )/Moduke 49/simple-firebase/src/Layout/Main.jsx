import { Outlet } from "react-router-dom";
import Header from "../componnents/Header/Header";

const Main = () => {
  return (
    <div className="max-w-5xl mx-auto text-center mt-28">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
