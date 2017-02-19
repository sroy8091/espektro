function formValidation() {
    var name = document.getElementById('Name').value;
    var pnumber = document.getElementById('phoneNumber').value;

    var email = document.getElementById('e-mail').value;

    var text = "";

  if (Name(name)) {
  }
  if (Name(name)) {
  }
  if (PhoneNumber(pnumber)) {
  }
  if (Email(email)) {
  }
  return false;
}

/*first name input validation*/
function Name(name) {
  var message = document.getElementsByClassName("error-message");
  var letters = /^[A-Za-z]+$/;
  if ( name =="" || name.match(letters)) {
    text="";
    message[0].innerHTML = text;
    return true;
  }

  else {
    text="Name should contain only letters";
    message[0].innerHTML = text;
    return false;
  }
}
/* college name input validation*/
function Name(name) {
  var message = document.getElementsByClassName("error-message");
  var letters = /^[A-Za-z]+$/;
  if ( name =="" || name.match(letters)) {
    text="";
    message[1].innerHTML = text;
    return true;
  }

  else {
    text="Name should contain only letters";
    message[1].innerHTML = text;
    return false;
  }
}


/*email address input validation*/
function Email(email) {
  var message = document.getElementsByClassName("error-message");
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var atpos = email.indexOf("@");
  var dotpos = email.lastIndexOf(".");

  if ( email =="" || email.match(mailformat) || atpos > 1 && ( dotpos - atpos > 2 )) {
    text="";
    message[2].innerHTML = text;
    return true;
  }

  else {
    text="Wrong email format";
    message[2].innerHTML = text;
    return false;
  }
}



/*phone number validation*/
function  PhoneNumber(pnumber) {
  var message = document.getElementsByClassName("error-message");
  var numbers = /^[789]\d{9}$/;
  if ( pnumber =="" || pnumber.match(numbers)) {
    text="";
    message[3].innerHTML = text;
    return true;
  }

  else {
    text="Phone number must be of 10 digits";
    message[3].innerHTML = text;
    return false;
  }
}

/*Url validation*/
function Url(url){
  var message = document.getElementsByClassName("error-message");
var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}$/;
if (!re.test(url)) {
  alert("url error")
}

// else {
//   text="Wrong Url format";
//   message[3].innerHTML = text;
//   return false;
// }
}
