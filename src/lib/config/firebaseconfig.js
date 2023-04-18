import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = initializeApp({
    apiKey: "AIzaSyD8_N9eOlWmhT4UCsQi8wWYF5YL4xemIkU",
    authDomain: "petagram-b6b9a.firebaseapp.com",
    projectId: "petagram-b6b9a",
    storageBucket: "petagram-b6b9a.appspot.com",
    messagingSenderId: "628725489575",
    appId: "1:628725489575:web:107915c2aca03118352082",
    measurementId: "G-VL5GN2LXKX"
  });

const auth = getAuth(firebaseConfig);
onAuthStateChanged(auth, user => {
    if (user !== null){
        console.log("logged in!")
    } else {
        console.log("no user");
    }
})