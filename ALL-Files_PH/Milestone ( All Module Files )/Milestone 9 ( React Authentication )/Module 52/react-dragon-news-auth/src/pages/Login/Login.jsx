import { Link } from "react-router-dom";
import NavBar from "../shared/NavBar/NavBar";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const username = form.get("username");
    const Password = form.get("Password");
    console.log(username, Password);
  };
  return (
    <div>
      <NavBar></NavBar>
      <div className="w-2/5 mx-auto bg-gray-900">
        <h2 className="text-white text-center pt-8">Login your account</h2>
        <div className=" flex items-center justify-center text-center  text-gray-100">
          <form
            onSubmit={handleLogin}
            noValidate=""
            action=""
            className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg text-gray-100"
          >
            <label
              htmlFor="username"
              className="self-start text-xs font-semibold"
            >
              Username or Email
            </label>
            <input
              id="username"
              type="text"
              name="username"
              required
              placeholder="Enter your username or email"
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
              required
              placeholder="Enter your password"
              className="flex items-center h-12 px-4 mt-2 rounded text-gray-900 focus:outline-none focus:ring-2 focus:border-violet-400 focus:ring-violet-400"
            />
            <button
              type="submit"
              className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded bg-violet-400 text-gray-900"
            >
              Login
            </button>
            <div className="flex justify-center mt-6 space-x-2 text-xs">
              <a rel="noopener noreferrer" href="#" className="text-gray-400">
                Dont’t Have An Account ?
              </a>
              <span className="text-gray-400">/</span>
              <Link className="text-white" to="/register">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
