import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const MainLayouts = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Nav Bar  */}
      <div>
        {" "}
        <NavBar></NavBar>{" "}
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default MainLayouts;
