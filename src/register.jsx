import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./home.css"

const User = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  const user = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);


      const response = await axios.post('http://localhost:3000/api/register', formData);

      if (response.status === 200) {
        toast.success('User registered successfully!', { position: 'top-center' });

        setTimeout(() => {
          setName('');
          setEmail('');
          setPassword('');
         
        }, 1000);
      } else {
        const data = response.data;
        toast.error(`Error: ${data.error}`, { position: 'top-center' });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred while registering the user.', { position: 'top-center' });
    }
  };

  return (
    <>
      <div className='container-fluid w-full h-full body'>
        <input type="radio" name="optionScreen" id="SignUp" hidden checked />
        <section>
          <div id="logo1">
            <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png" alt="Spotify-Logo" width="50" />
            <h1>Spotify</h1>
          </div>

          <nav className='log'>
            <label htmlFor="SignUp" className='text-white'>Sign Up</label>
          </nav>

          <form onSubmit={user} id="SignUpFormData">
            <input type="text" id="name" placeholder="Name Complete" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" id="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" id="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            
           

            <span>
              <input type="checkbox" id="staySingedUp" defaultChecked />
              <label htmlFor="staySingedUp" className='text-white'>Stay Signed In</label>
            </span>
            <button type="submit" title="Sign Up" className='but1'>Sign Up</button>
          </form>
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default User;



 {/* <label htmlFor="SignIn">Sign In</label> */}
  {/* <form onSubmit={user} id="SignInFormData">
          <input type="text" id="username" placeholder="Username" />
          <input type="password" id="password" placeholder="Password" />
          <span>
            <input type="checkbox" id="staySingedIn" defaultChecked />
            <label htmlFor="staySingedIn">Stay Signed In</label>
          </span>
          <button type="submit" title="Sign In">Sign In</button>

          <a id="forgotPassword">Forgot Your Password?</a>
        </form> */}