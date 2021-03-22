 import firebase from "firebase";

 var firebaseConfig = {
  apiKey: "AIzaSyCInXIREUSUTlRxhSsfOj0WQWkY2LJz4Ng",
  authDomain: "userdata-aa9cd.firebaseapp.com",
  projectId: "userdata-aa9cd",
  storageBucket: "userdata-aa9cd.appspot.com",
  messagingSenderId: "349544839651",
  appId: "1:349544839651:web:fbc9710f281ea96d9ec8d6",
  measurementId: "G-W7EFWCZP81"
};

 let fireDb = firebase.initializeApp(firebaseConfig);
 export default fireDb.database().ref();