import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-row gap-8 justify-center text-2xl font-bold mb-7">
      <Link to="/"> Home</Link>
      <Link to="/login"> Login</Link>
    </div>
  );
};

export default Header;
