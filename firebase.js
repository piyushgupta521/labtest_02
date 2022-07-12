
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, child, get } from "firebase/database";

 // Initialize Firebase
 const firebaseConfig = {
  apiKey: "AIzaSyDTf-LOt_18jtkSB1zCVAnL2eriYiigHfo",
  authDomain: "info6132-advinmobiledev-3bc8e.firebaseapp.com",
    databaseURL: "https://info6132-advinmobiledev-3bc8e-default-rtdb.firebaseio.com",
    storageBucket: "info6132-advinmobiledev-3bc8e.appspot.com",
  messagingSenderId: "846338308397",
  appId: "1:846338308397:web:4469c2d7f16c06e0da3ba4",
    measurementId: "G-CS2R8P19RZ"
    
  };

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth(app);
  export {app, database, auth};