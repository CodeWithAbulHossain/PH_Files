import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "NotFound", path: "*" },
  ];

  return (
    <nav className="p-4">
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? (
          <AiOutlineClose className="text-2xl ml-4"></AiOutlineClose>
        ) : (
          <RiMenu2Line className="text-2xl ml-4"></RiMenu2Line>
        )}
      </div>
      <ul
        className={`md:flex duration-1000 absolute md:static ${
          open ? "top-10" : "-top-36"
        } bg-yellow-700 text-center rounded-lg text-white mt-2 px-2`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
