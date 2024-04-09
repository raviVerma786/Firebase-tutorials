import React, { useState } from 'react';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

import {app} from "../firebase";

const auth = getAuth(app);

const SignIn = () => {
   const [email, setemail] = useState("");
   const [password, setpassword] = useState("");

   const signInUser = ()=>{
    signInWithEmailAndPassword(auth,email,password)
    .then(value => console.log("Sign In Success"))
    .catch(error => console.log("User Not Found"));
   }

  return (
    <div className='sign-in'>
    <h1>Sign In page</h1>
      <input type="email" placeholder='Enter Your Email Here' onChange={e => setemail(e.target.value)} value = {email}/>
      <input type="password" placeholder='Enter Your Password' onChange={e => setpassword(e.target.value)} value = {password}/>
      <button onClick={signInUser}> Sign In</button>
    </div>
  )
}

export default SignIn
