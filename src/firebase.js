import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCzVvRTUIwNU5Y_VeUZUir2KrniQuQ6r3Q",
    authDomain: "tinder-clone-f6a44.firebaseapp.com",
    databaseURL: "https://tinder-clone-f6a44.firebaseio.com",
    projectId: "tinder-clone-f6a44",
    storageBucket: "tinder-clone-f6a44.appspot.com",
    messagingSenderId: "1017136837623",
    appId: "1:1017136837623:web:fc314dce84e159e735b4f2",
    measurementId: "G-G18JY50KHT"
  };
  

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;