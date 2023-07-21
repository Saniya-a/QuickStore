function login(){
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value
  

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    window.location.replace("seller/seller.html")
    var details = firebase.auth().currentUser;
    console.log("Signed In Successfully")
    console.log(details)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("Incorrect Email or Password")
  }); 

}