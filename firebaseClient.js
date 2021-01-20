import  firebase from 'firebase/app'
var firebaseConfig = {
    apiKey: "AIzaSyCWZH_Ir8VnK8tpjMg5YRT9KNvO0yjZ5zA",
    authDomain: "bluebic-6ff3b.firebaseapp.com",
    projectId: "bluebic-6ff3b",
    storageBucket: "bluebic-6ff3b.appspot.com",
    messagingSenderId: "244705209691",
    appId: "1:244705209691:web:0521e343dcfab577bd7e7e",
    measurementId: "G-K0MGND9X6K"
  };
  const firebaseClient = () =>{
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig)
      }
  }
  export default firebaseClient;
    