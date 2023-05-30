const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCMdCzDm9JKfszdOfFUCmUYN6ycjBQ6gEo",
    authDomain: "authen01-3e245.firebaseapp.com",
    projectId: "authen01-3e245",
    storageBucket: "authen01-3e245.appspot.com",
    messagingSenderId: "502751065402",
    appId: "1:502751065402:web:836596e721aa614d048c03"

});

   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();
   
   
   const signUp=()=>{
     const email=document.getElementById("email").value;
     const password=document.getElementById("password").value;
     console.log(email,password);
     firebase.auth().createUserWithEmailAndPassword(email, password)
     .then((result) => {
       // Signed in 
       
       document.write("You are Sign Up");
       // ...
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        // ..
      });
    }
    
    
    // const db = firebaseApp.firestore();
    // const auth = firebaseApp.auth();
const signIn=()=>{
  const email=document.getElementById("email").value;
  const password=document.getElementById("password").value;
  console.log(email,password);
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in
document.write("You are Log In ");
console.log(result);
console.log(`signout success`)

    // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
  });
}


