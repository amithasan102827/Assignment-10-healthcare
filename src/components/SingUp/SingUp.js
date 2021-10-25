import { createUserWithEmailAndPassword, getAuth, } from '@firebase/auth';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import initializeAuthentication from '../../Firebase/firebase.initialize';

import useAuth from '../Hooks/useAuth';
import './SignUp.css';



const SingUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const { setIsLoading } = useAuth();
    initializeAuthentication();
    const { setUser } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleRegistration = (e) => {
        const auth = getAuth();
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
                // ...
                console.log(user)
                    .finally(() => setIsLoading(false));
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
            e.target.vlaue="";
    }
    return (
        <div>
            <div className="register-container">
                <h2 className="text">Please Registration</h2>
                <form className='register-form'>

                    <input onBlur={handleEmailChange} placeholder="Email" type="text" 
                   
                    />
                
                    <br />


                    <input onBlur={handlePasswordChange} placeholder="password" type="password" />

                    <br />
                    <input className="btn-color" onClick={handleRegistration} type="submit" />

                    <p>Already have an account? <Link className="btn-link" to="/login"> login</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default SingUp;