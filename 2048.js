/* Path: Scripts.js */
/* Form validation */

function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var message = document.forms["myForm"]["message"].value;
    var error = document.getElementById("error");

    if (name == "") {
        error.innerHTML = "Please enter your name";
        return false;
    } else if (email == "") {
        error.innerHTML = "Please enter your email address";
        return false;
    } 
    } else {
        error.innerHTML = "";
        return true;
    }
