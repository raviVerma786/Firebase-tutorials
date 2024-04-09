import React from 'react';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import {app} from "./firebase";


const firestore = getFirestore(app);

const FireStore = () => {
  
    const writeData = async ()=>{
        const result = await addDoc(collection(firestore,"cities"),{
            name: "Maharajganj",
            pinCode : 273303,
            lat: 123,
            long: 456,
        });

        console.log("Result : ",result);
    }

  return (
    <div className='firestore'>
        <h1>FireStore</h1>
        <button onClick={writeData}> Put Data </button>
    </div>
  )
}

export default FireStore;





// https://www.youtube.com/watch?v=-4g7henIRU8&list=PLinedj3B30sCw8Qjrct1DRglx4hWQx83C&index=9