import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const User = () => {
  const loadedusers = useLoaderData();

  const [users, setuser] = useState(loadedusers);

  const handleUserDel = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("deleted successfully");
          const remaining = users.filter((user) => user._id !== _id);
          setuser(remaining);
        }
      });
  };
  return (
    <div>
      <h2>{loadedusers.length} </h2>
      <div>
        {loadedusers.map((user) => (
          <p key={user._id}>
            {user.name} : {user.email} : {user._id}{" "}
            <Link to={`/update/${user._id}`}>
              {" "}
              <button>Update</button>{" "}
            </Link>
            <button onClick={() => handleUserDel(user._id)}>X</button>{" "}
          </p>
        ))}
      </div>
    </div>
  );
};

export default User;
