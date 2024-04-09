import './App.css';
import { getDatabase, ref, set } from "firebase/database";
import { app } from './firebase';

import { createUserWithEmailAndPassword, getAuth, signOut } from "firebase/auth";
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

import { useFirebase } from './Context/firebase';
import { useState } from 'react';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


// const db = getDatabase(app);
// const auth = getAuth(app);

// function App() {
//   //For authentication
//   const signupUser = ()=>{
//     createUserWithEmailAndPassword(
//       auth,
//       "vravi084@gmail.com",
//       "Vravi@084"
//       ).then((value) => {
//         console.log(value);
//       }).catch((error) => {
//        console.log(error);
//       });
//     ;
//   };
  
//   // storing data into database
//   const putData = ()=>{
//     set(ref(db, "users/ravi"),{
//       id: 1,
//       name: "ravi Verma",
//       age: 24,

//     });
//   }

//   return (
//     <div className="app">
//         <h1>Firebase Tutorial</h1>
//         <button onClick={putData}>Put Data</button>
//         <br />
//         <br />

//          <SignUp/>
//          <SignIn/>
//     </div>
//   );
// }

// export default App;


//After using usecontext
// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();

// function App() {
//   const firebase = useFirebase();
//   const [email,setEmail] = useState("");
//   const [password,setPassword] = useState("");
  

//   const signupWithGoogle = ()=>{
//     signInWithPopup(auth,googleProvider);
//   }

//   return (
//     <div className="app">
//         <h1>Firebase with Context</h1>
//         <input type="email" value = {email} onChange={e => setEmail(e.target.value)} placeholder='Enter your email'/>
//         <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter Password' />

//         <button onClick={()=> {firebase.signupUserWithEmailAndPassword(email,password);
//         firebase.putData('users/' + "ravi", {email,password})}}> SignUp </button>



//         <button onClick={signupWithGoogle}>Sign up with Google</button>
//     </div>
//   );
// }

// export default App;





// Getting user Signed in and log out

import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import FireStore from './FireStore';


const auth = getAuth(app);

const App = () => {

  const [user,setUser] = useState(null);

  useEffect(()=>{
    onAuthStateChanged(auth,user =>{
      if(user){
        // yes you are logged in
        setUser(user);
        console.log('Hello',user);
      }
      else{
        //user is logged out
        setUser(null);
        console.log('you are logged out');
      }
    })
  },[user]);
  

  if(user === null){
    return (
      <div className='app'>
      <SignIn/>
      <SignUp/>

      {/* firestore database in firebase  */}
      <FireStore/>
     </div>
    )
  }
  return (
   <div className="app">
    <h1>Hello {user.email}</h1>
    <button onClick={() => signOut(auth)}>Log out</button>
   </div>
  )
}

export default App;