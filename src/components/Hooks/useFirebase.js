import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut,createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import initializeAuthentication from '../../Firebase/firebase.initialize';







const useFirebase = () => {
  initializeAuthentication()
  const [user, setUser] = useState({})
  const [isLoading,setIsLoading]=useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  

  const singInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider)
     
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      else{
        setUser({});
      }
      setIsLoading(false);

    });
  }, [])

  const logOut = () => {
   setIsLoading(true)
    signOut(auth)
    .then(() => {
      setUser({});
      
    })
    .finally(()=>setIsLoading(false));
  }

  // const passwordAuthentication=(email,password)=>{
  //   const auth = getAuth()
  //   createUserWithEmailAndPassword(auth, email, password)
  //  .then((result) => {
  //   // Signed in 
  //   const user = result.user;
  //   setUser(user);
  //   console.log(user);
    
  
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // ..
  // });
  // return createUserWithEmailAndPassword;
  // }

  


  return {
    singInUsingGoogle,
    user,
    logOut,
    setUser,
    isLoading,
    setIsLoading,
   

  }
};

export default useFirebase;