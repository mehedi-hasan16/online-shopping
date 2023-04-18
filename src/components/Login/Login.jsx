import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const {userLogin} = useContext(AuthContext);
  const navigate= useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    userLogin(email, password)
    .then(result=>{
      const loggedUser = result.user
      console.log(loggedUser);
      form.reset();
      navigate(from, {replace:true})
    })
    .catch(error=>{
      console.log(error.message);
    })

  }
    return (
        <div className="w-[500px] border flex flex-col justify-center items-center mx-auto rounded-lg mt-5">
      <h2 className="text-4xl font-semibold my-5">Login</h2>
      <form onSubmit={handleLogin}>
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
          <button className="w-96 h-12 border rounded bg-yellow-100">Login</button>
        </div>
        <div className="mb-4 text-center">
          <p>
            New to China shop? <span className="text-blue-500"><Link to='/signup'>Create an account</Link></span>
          </p>
        </div>
      </form>
    </div>
    );
};

export default Login;