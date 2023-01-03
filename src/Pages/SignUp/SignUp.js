import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSignUp = (data) => {
    console.log(data);
    console.log(errors);
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-4xl text-center">Please SignUp</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">First Name</span>{" "}
            </label>
            <input
              type="text"
              {...register("fName", {
                required: "First Name is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.fName && (
              <p className="text-error">{errors.fName?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Last Name</span>{" "}
            </label>
            <input
              type="text"
              {...register("lName", {
                required: "Last Name is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.lName && (
              <p className="text-error">{errors.lName?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>{" "}
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-error">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password at least six characters long",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[0-9])/,
                  message:
                    "Password must have uppercase, lowercase  and a number",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-error">{errors.password.message}</p>
            )}
          </div>
          <input
            className="btn  mt-5 w-full text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            type="submit"
            value="SignUp"
          />
        </form>
        <p>
          Already have an account?
          <Link className="text-sky-400" to="/signup">
            Please Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline btn-accent w-full">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
