
const firebaseConfig = {
      apiKey: "AIzaSyDrJsESdMb-rng2Qe1Uq0KRu7fpAXWNjWg",
      authDomain: "kwitter-507c2.firebaseapp.com",
      projectId: "kwitter-507c2",
      storageBucket: "kwitter-507c2.appspot.com",
      messagingSenderId: "846876743189",
      appId: "1:846876743189:web:85e0e216a1d4974fd9e01c"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
