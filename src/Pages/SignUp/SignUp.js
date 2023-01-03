import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="h-[800px] flex justify-center items-center">
        <div className="w-96 p-7">
          <h2 className="text-4xl text-center">Please SignUp</h2>
          <form>
            <div className="form-control w-full max-w-xs">
              <label className="label"> <span className="label-text">Name</span> </label>
              <input type="text" className="input input-bordered w-full max-w-xs"/>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label"> <span className="label-text">Email</span> </label>
              <input type="email" className="input input-bordered w-full max-w-xs"/>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label"> <span className="label-text">Password</span> </label>
              <input type="password" className="input input-bordered w-full max-w-xs"/>
            </div>
            <input className="btn w-full text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="submit" value='SignUp'/>
          </form>
          <p>Already have an account?<Link className="text-sky-400" to='/signup'>Please Login</Link></p>
          <div className="divider">OR</div>
          <button className="btn btn-outline btn-accent w-full">CONTINUE WITH GOOGLE</button>
        </div>
      </div>
    );
};

export default SignUp;