import React from "react";

const SignUp = () => {
  return (
    <div className="w-[500px] border flex flex-col justify-center items-center mx-auto rounded-lg mt-5">
      <h2 className="text-4xl font-semibold my-5">Sign up</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block">Email</label>
          <input
            className="w-96 h-12 border rounded px-2"
            type="email"
            name="email"
            id=""
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block">Password</label>
          <input
            className="w-96 h-12 border rounded px-2"
            type="password"
            name="password"
            id=""
            placeholder="at least 6 cheracters"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirm-password" className="block">Confirm Password</label>
          <input
            className="w-96 h-12 border rounded px-2"
            type="password"
            name="confirm-password"
            id=""
            placeholder="Type password again"
            required
          />
        </div>
        <div className="mb-4">
          <button className="w-96 h-12 border rounded bg-yellow-100">Sign Up</button>
        </div>
        <div className="mb-4 text-center">
          <p>
            Already have an account? <span>Log in</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
