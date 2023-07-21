var firebaseConfig = {
    apiKey: "AIzaSyCaD18xDVTkDDaGuteqN-fWqzdUrayWLv4",
    authDomain: "quick-store1.firebaseapp.com",
    databaseURL: "https://quick-store1-default-rtdb.firebaseio.com",
    projectId: "quick-store1",
    storageBucket: "quick-store1.appspot.com",
    messagingSenderId: "944657360865",
    appId: "1:944657360865:web:54d85be2b6de45b7db14a0",
    measurementId: "G-TEN4CFCMQN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const rootRef = firebase.database().ref('products/');

  