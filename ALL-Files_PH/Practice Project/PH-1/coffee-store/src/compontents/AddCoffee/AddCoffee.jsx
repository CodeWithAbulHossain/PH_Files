const AddCoffee = () => {
  const handleAdd = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const password = form.password.value;

    const user = { name, password };
    console.log(user);

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="bg-slate-400">
      <h2 className="text-2xl">add coffee</h2>
      <form onSubmit={handleAdd}>
        <input type="text" name="name" id="name" /> <br />
        <input type="password" name="password" id="password" /> <br />
        <input type="submit" value="add" />
      </form>
    </div>
  );
};

export default AddCoffee;
