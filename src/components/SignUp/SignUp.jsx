import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";


const SignUp = () => {
  const [error, setError]= useState('');
  const {createUser} = useContext(AuthContext);

  const handleSubmit = event=>{
    event.preventDefault();
    setError('')
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    if(password !== confirmPassword){
      setError('Password did not match');
      return
    }
    else if (password.length < 6){
      setError('Password should be 6 cheracter or long')
      return
    }

     console.log(email, password, confirmPassword);
     createUser(email, password)
     .then(result=>{
      const loggedUser = result.user;
      console.log(loggedUser);
     })
     .catch(error=>{
      console.error(error.message)
     })

  }

  return (
    <div className="w-[500px] border flex flex-col justify-center items-center mx-auto rounded-lg mt-5">
      <h2 className="text-4xl font-semibold my-5">Sign up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block">Email</label>
          <input
            className="w-96 h-12 border rounded px-2"
            type="email"
            name="email"
            id="email"
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
            id="password"
            placeholder="at least 6 cheracters"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirm-password" className="block">Confirm Password</label>
          <input
            className="w-96 h-12 border rounded px-2"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Type password again"
            required
          />
        </div>
        <div className="mb-4">
          <button className="w-96 h-12 border rounded bg-yellow-100">Sign Up</button>
        </div>
        <div className="mb-4 text-center">
          <p>
            Already have an account? <span className="text-blue-500"><Link to='/login'>Log in</Link></span>
          </p>
          <p className="text-red-400">{error}</p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
