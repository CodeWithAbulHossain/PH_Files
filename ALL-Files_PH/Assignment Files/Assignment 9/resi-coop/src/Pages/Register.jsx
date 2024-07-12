import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import UseAuth from "../hooks/UseAuth";
import Social from "../components/Social";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, updateUserprofile } = UseAuth();

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
    const { email, password, image, fullName } = data;
    createUser(email, password).then(() => {
      updateUserprofile(fullName, image).then(() => {
        navigate(from);
      });
    });
  };

  return (
    <div>
      <Helmet>
        {" "}
        <title>ResiCoop | Register</title>{" "}
      </Helmet>
      <div className="w-96 mx-auto"></div>
      <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-6"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block text-gray-400">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-slate-200 text-black focus:border-violet-400"
              {...register("fullName", { required: true })}
            />
            {errors.fullName && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-400">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-slate-200 text-black focus:border-violet-400"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="photoURL" className="block text-gray-400">
              Photo URL
            </label>
            <input
              type="text"
              name="photoURL"
              id="photoURL"
              placeholder="photoURL"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-slate-200 text-black focus:border-violet-400"
              {...register("photoURL")}
            />
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
            Register
          </button>
        </form>
        <div></div>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          <p className="px-3 text-sm text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <Social></Social>
        </div>
        <p className="text-xs text-center sm:px-6 text-gray-400">
          Have an account?
          <Link className="ml-1 text-blue-700" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
