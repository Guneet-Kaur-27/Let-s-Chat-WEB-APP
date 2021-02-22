// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCIMGJ3PsitRaVx07-Ch2s2QxiysvTuaDo",
    authDomain: "kwitter-97ce1.firebaseapp.com",
    databaseURL: "https://kwitter-97ce1-default-rtdb.firebaseio.com",
    projectId: "kwitter-97ce1",
    storageBucket: "kwitter-97ce1.appspot.com",
    messagingSenderId: "253797144062",
    appId: "1:253797144062:web:078709a31029ab9c755caf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
