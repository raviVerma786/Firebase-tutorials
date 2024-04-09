import React, { useState } from 'react';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { app } from "../firebase";


const auth = getAuth(app);


const SignUp = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const createUser = ()=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(value => alert("Success"));
    }

  return (
    <div className='signup-page'>
    <h1>Sign Up Page</h1>
      <label htmlFor="email">Email</label>
      <input type="email" name='email' required placeholder='Enter your email' onChange={e => setEmail(e.target.value)} value={email}/>

      <label htmlFor="password" >Password</label>
      <input type="password" required name='password' onChange={e => setPassword(e.target.value)} value={password}/>

      <button onClick={createUser}>Sign Up</button>
    </div>
  )
}

export default SignUp
