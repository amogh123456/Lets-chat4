
var firebaseConfig = {
  apiKey: "AIzaSyCDcog7_EKID_seImCVrz4QW4ETYdwPvTY",
  authDomain: "lets-chat-db1da.firebaseapp.com",
  databaseURL: "https://lets-chat-db1da-default-rtdb.firebaseio.com",
  projectId: "lets-chat-db1da",
  storageBucket: "lets-chat-db1da.appspot.com",
  messagingSenderId: "755785647064",
  appId: "1:755785647064:web:d13ecf76e949618710e8ad",
  measurementId: "G-DCP6G2BGCE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function getData()
{
   firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("Room name -" + Room_names);
  row = "<div class = 'room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
  document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}