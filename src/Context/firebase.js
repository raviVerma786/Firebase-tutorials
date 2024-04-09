import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyDSlTPOBJikoHVJ2R_5un49irU0D_lzC3c",
    authDomain: "fir-tutorial-11b13.firebaseapp.com",
    projectId: "fir-tutorial-11b13",
    storageBucket: "fir-tutorial-11b13.appspot.com",
    messagingSenderId: "86324923087",
    appId: "1:86324923087:web:7f4d3d56670a71f638c5ba",
    databaseURL: "https://fir-tutorial-11b13-default-rtdb.firebaseio.com",
  };


const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth =getAuth(firebaseApp);
const database = getDatabase(firebaseApp);


const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);


export const FirebaseProvider = (props) =>{

    const signupUserWithEmailAndPassword = (email,password) => {
        return createUserWithEmailAndPassword(firebaseAuth,email,password);
    }
     
    const putData = (key,data)=>{
        set(ref(database,key),data);
    }
    
    return (
        <FirebaseContext.Provider value={{signupUserWithEmailAndPassword, putData }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}