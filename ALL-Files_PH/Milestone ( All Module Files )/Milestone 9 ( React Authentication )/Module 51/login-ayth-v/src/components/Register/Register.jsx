import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.username.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="flex items-center w-full md:w-[550px] mx-auto rounded-lg justify-center text-center bg-gray-900 text-gray-100">
      <form
        onSubmit={handleRegister}
        noValidate=""
        action=""
        className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg text-gray-100"
      >
        <label htmlFor="name" className="self-start text-xs font-semibold">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your name"
          className="flex items-center h-12 px-4 mt-2 rounded text-gray-900 focus:outline-none focus:ring-2 focus:border-violet-400 focus:ring-violet-400"
        />
        <label
          htmlFor="username"
          className="self-start text-xs font-semibold mt-2"
        >
          Username or Email
        </label>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="Your username or Email"
          required
          className="flex items-center h-12 px-4 mt-2 rounded text-gray-900 focus:outline-none focus:ring-2 focus:border-violet-400 focus:ring-violet-400"
        />
        <label
          htmlFor="password"
          className="self-start mt-3 text-xs font-semibold"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Your password"
          required
          className="flex items-center h-12 px-4 mt-2 rounded text-gray-900 focus:outline-none focus:ring-2 focus:border-violet-400 focus:ring-violet-400"
        />
        <button
          type="submit"
          className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded bg-violet-400 text-gray-900"
        >
          Sign Up
        </button>
        <div className="flex justify-center mt-6 space-x-2 text-xs">
          <Link to="/login">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-gray-400 font-bold"
            >
              Login In
            </a>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
