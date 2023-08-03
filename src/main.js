// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });


// Initialize Firebase

const firebaseConfig = {
    apiKey: "AIzaSyDplJQ7g5tBpuDRFYXwUaQsNKJ7YnDbdE8",
    authDomain: "form-83972.firebaseapp.com",
    projectId: "form-83972",
    storageBucket: "form-83972.appspot.com",
    messagingSenderId: "710129846236",
    appId: "1:710129846236:web:420c49cea399fe5b553119"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
// console.log('storage', storage)


const form = document.querySelector("form");
console.log('form', form)

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { login, password }
  } = event.currentTarget;

  if (login.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
    }


const auth = getAuth();
    createUserWithEmailAndPassword(auth, login.value, password.value)
  .then((userCredential) => {
    // Signed in 
      const user = userCredential.user;
      console.log('user', user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

    // console.log(`Login: ${login.value}, Password: ${password.value}`);
    
  event.currentTarget.reset();
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});