// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNr7MOQcvkD-eDmH9_zct0RWkO1hBPEL4",
  authDomain: "lcaibadan.firebaseapp.com",
  projectId: "lcaibadan",
  storageBucket: "lcaibadan.appspot.com",
  messagingSenderId: "73751447538",
  appId: "1:73751447538:web:503adb45e45a859b9e4d6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("auth function", app.auth());

function login(){
  //firebase login
  
}

const accessButton = document.querySelector("button.lcaibadan-auth-submit");

accessButton.addEventListener("click", (ev) => {
});


