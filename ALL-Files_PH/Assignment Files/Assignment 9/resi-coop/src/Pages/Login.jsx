import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import UseAuth from "../hooks/UseAuth";
import Social from "../components/Social";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { signInUser } = UseAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // navigation system
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const onSubmit = (data) => {
    const { username, password } = data;

    signInUser(username, password).then((result) => {
      if (result.user) {
        navigate(from);
      }
    });
  };
  return (
    <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
      <Helmet>
        {" "}
        <title>ResiCoop | Login</title>{" "}
      </Helmet>
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate=""
        action=""
        className="space-y-6"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block text-gray-400">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            className="w-full px-4 py-3 rounded-md border-gray-700 bg-slate-200 text-black focus:border-violet-400"
            {...register("username", { required: true })}
          />
          {errors.username && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block text-gray-400">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md border-gray-700 bg-slate-200 text-black focus:border-violet-400"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-red-600">This field is required</span>
          )}
          <div className="flex justify-end text-xs text-gray-400">
            <a rel="noopener noreferrer" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
        <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">
          Sign in
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        <p className="px-3 text-sm text-gray-400">Login with social accounts</p>
        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <Social></Social>
      </div>
      <p className="text-xs text-center sm:px-6 text-gray-400">
        Don't have an account?
        <Link className="ml-1 text-blue-700" to="/register">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
