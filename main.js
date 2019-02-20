


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDeTi4dR_HxqeGmrAtw3awSyMJsUVOEd0U",
    authDomain: "r2i-innovation.firebaseapp.com",
    databaseURL: "https://r2i-innovation.firebaseio.com",
    projectId: "r2i-innovation",
    storageBucket: "r2i-innovation.appspot.com",
    messagingSenderId: "123121351273"
  };
  firebase.initializeApp(config);

var messagesRef = firebase.database().ref('messages');
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  // Get values
  var firstname = getInputVal('fname');
  var lastname = getInputVal('lname');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(firstname, lastname, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}
// Function to get get form values
function getInputVal(id){
return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(firstname, lastname, email, phone, message){
var newMessageRef = messagesRef.push();
newMessageRef.set({
  name: firstname,
  lastname: lastname,
  email:email,
  phone:phone,
  message:message
});
}
