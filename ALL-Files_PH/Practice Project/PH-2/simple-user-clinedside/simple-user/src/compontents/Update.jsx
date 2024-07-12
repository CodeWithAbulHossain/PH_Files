import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadeduser = useLoaderData();

  const handleUpdet = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;

    console.log(name, email);
    const updatedUser = { name, email };
    fetch(`http://localhost:5000/users/${loadeduser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <h3>Update information of {loadeduser.name}</h3>
      <form onSubmit={handleUpdet}>
        <input type="text" name="name" defaultValue={loadeduser?.name} /> <br />
        <input
          type="email"
          name="email"
          defaultValue={loadeduser?.email}
        />{" "}
        <br />
        <input type="submit" value="update" />
      </form>
    </div>
  );
};

export default Update;
