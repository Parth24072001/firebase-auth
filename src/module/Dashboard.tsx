import { useAuth } from "../Auth";

const Dashboard = () => {
  const { logOut } = useAuth();
  const { currentUser } = useAuth();
  return (
    <div className=" m-auto  w-1/2 flex justify-center flex-col text-center mt-12 ">
      <img
        className=" w-[30px] h-[30px] rounded-full m-auto"
        src={`${currentUser?.providerData[0].photoURL}`}
        alt="Your Company"
      />
      <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>
      <p className="mt-2 text-sm leading-6 text-gray-500">
        Not a member?{" "}
        <a
          href="#"
          className="font-semibold text-indigo-600 hover:text-indigo-500"
        >
          Start a 14 day free trial
        </a>
      </p>
      <button className="mt-6 m-auto" onClick={logOut}>
        Log out
      </button>
    </div>
  );
};

export default Dashboard;
