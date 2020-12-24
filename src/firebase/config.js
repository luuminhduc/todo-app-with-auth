import firebase from 'firebase';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyAaHPlFuH5-zn0fzGd1-tHwJL7iRW7nAfU",
    authDomain: "todo-app-with-auth-e3b3a.firebaseapp.com",
    projectId: "todo-app-with-auth-e3b3a",
    storageBucket: "todo-app-with-auth-e3b3a.appspot.com",
    messagingSenderId: "675008014363",
    appId: "1:675008014363:web:b9d60d7175dcce55cd70be"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;