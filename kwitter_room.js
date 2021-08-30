

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDrxUsizYIcenijq1VrB3AUheAWTXxilbI",
    authDomain: "kwitter-417e6.firebaseapp.com",
    databaseURL: "https://kwitter-417e6-default-rtdb.firebaseio.com",
    projectId: "kwitter-417e6",
    storageBucket: "kwitter-417e6.appspot.com",
    messagingSenderId: "52417224798",
    appId: "1:52417224798:web:f686a2a52f1f1052a7d4cf",
    measurementId: "G-Y2GT3JWZ4P"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;

           firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
          console.log("room_name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
          document.getElementById("output").innerHTML += row;S
    //End code
    });});}
getData();
function redirectToroomname(name){
    console.log(name);
    localStorage.setItem("Roomname",name);
    window.location = "kwitter_page.html";
}
function logout() {
    localStorage.removeItem("Username");
    localStorage.removeItem("Roomname");
    window.location = "index.html";
}