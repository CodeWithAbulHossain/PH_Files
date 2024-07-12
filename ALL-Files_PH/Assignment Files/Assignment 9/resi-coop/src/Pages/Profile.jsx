import { Helmet } from "react-helmet-async";
import UseAuth from "../hooks/UseAuth";

const Profile = () => {
  const { user } = UseAuth();
  console.log(user);
  return (
    <div>
      <Helmet>
        {" "}
        <title>ResiCoop | Profile</title>{" "}
      </Helmet>
      <div className="max-w-md mx-auto rounded-3xl p-8 sm:flex sm:space-x-6 bg-gray-900 text-gray-100">
        <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
          <img
            src={user.photoURL}
            alt=""
            className="object-cover object-center w-full h-full rounded bg-gray-500"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">{user.displayName}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
