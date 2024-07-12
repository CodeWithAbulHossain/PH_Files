import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h2>All Caterogy</h2>
      {categories.map((Caterogy) => (
        <Link
          className="block mb-4 no-underline"
          key={Caterogy.id}
          to={`/Caterogy/${Caterogy.id}`}
        >
          {Caterogy.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSideNav;
