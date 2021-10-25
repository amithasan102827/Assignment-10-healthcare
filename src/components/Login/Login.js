import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import initializeAuthentication from '../../Firebase/firebase.initialize';
import useAuth from '../Hooks/useAuth';
import useFirebase from '../Hooks/useFirebase';
import './Login.css';


const Login = () => {
  initializeAuthentication()
  const {singInUsingGoogle,singInUsingGithub,setIsLoading,setUser} =useAuth(); 
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const location=useLocation();
  const history =useHistory();
  const redirect_url= location.state?.from || '/home'
  const handleGoogleLogin=()=>{
      singInUsingGoogle()
      .then((result) => {
        const user = result.user;
        history.push(redirect_url);
        setUser(user);
        console.log(user);
      })
      .finally(()=>setIsLoading(false));
  }
  const handleEmail=(e)=>{
      setEmail(e.target.value);
  }
  const handlePassword=(e)=>{
      setPassword(e.target.value);
  }
  const handleLogin=(e)=>{
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setUser(user)
        history.push(redirect_url);
        console.log("successfully login")
        console.log(user)
        .finally(()=>setIsLoading(false));
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
    return (
        <div>
            <div className="login-container">
            <h1> Please Login</h1>
            <form className="login-form" >

                <input onBlur={handleEmail} placeholder="Email" type="email" />
                <br />
                <input onBlur={handlePassword} placeholder="password" type="password" />
                <br />
                <input onClick={handleLogin} className='login-btn' type="submit" />
                <p className="register-text">create new accout. <Link to="/register" className="btn-link2"> Regisnter</Link></p>
                <button onClick={handleGoogleLogin}  type="button" className="btn btn-primary btn-sm mx-2 mt-2"><i class="fab fa-google"></i> Google</button>
                {/* <button onClick={singInUsingGithub} type="button" class="btn btn-secondary btn-sm mx-2 mt-4"><i class="fab fa-github"></i>Github</button> */}
            </form>
        </div>
        </div>
    );
};

export default Login;