import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-3xl font-semibold text-blue-500"> ChatApp</span>
        </h1>
        <form action="">
          <div className="">
            <label className="label p-2">
              <span className="label-text text-base">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
            />
            <label className="label p-2">
              <span className="label-text text-base">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
            <a
              href="#"
              className="text-sm hover:underline hover:text-blue-400 mt-2 inline-block "
            >
              {"Don't"} have an account?
            </a>
            <input
              type="submit"
              className="w-full btn  bg-blue-500 mt-5 font-semibold font-serif"
              value="Login"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
