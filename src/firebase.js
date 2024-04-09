import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDSlTPOBJikoHVJ2R_5un49irU0D_lzC3c",
    authDomain: "fir-tutorial-11b13.firebaseapp.com",
    projectId: "fir-tutorial-11b13",
    storageBucket: "fir-tutorial-11b13.appspot.com",
    messagingSenderId: "86324923087",
    appId: "1:86324923087:web:7f4d3d56670a71f638c5ba",
    databaseURL: "https://fir-tutorial-11b13-default-rtdb.firebaseio.com",
  };

  export const app = initializeApp(firebaseConfig);