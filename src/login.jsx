import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './home.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        email,
        password,
      });

      if (response.status === 200) {
        toast.success('User logged in successfully!');
        localStorage.setItem('token', response.data.token);
        console.log('Token set:', response.data.token);
         window.location.href = '/home2';
      } else {
        toast.error(`Error: ${response.data.error}`);
      }
      
    } 
    
    catch (error) {
      console.error('Error during login:', error);
      toast.error('An error occurred while logging in.');
    }
  };

  return (
    <>
      <div className="container-fluid w-full h-full body">
        <input type="radio" name="optionScreen" id="SignIn" hidden checked />
        <section>
          <div id="logo1">
            <img
              src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png"
              alt="Spotify-Logo"
              width="50"
            />
            <h1>Spotify</h1>
          </div>

          <nav className="log">
            <label htmlFor=" SignIn" className="text-white">
              Sign In
            </label>
          </nav>
          <form onSubmit={handleLogin} id="SignInFormData">
            <input
              type="text"
              id="email"
              placeholder="EmailId"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>
              <input type="checkbox" id="staySingedIn" defaultChecked />
              <label htmlFor="staySingedIn" className='text-white'>Stay Signed In</label>
            </span>
            <button type="submit" title="SignIn" className='but1'>Sign In</button>

       
          </form>
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
