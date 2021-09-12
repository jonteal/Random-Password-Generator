// Variable Assignments
var generateBtn = document.querySelector("#generate");
var storedPassword = [];
var numberLength = 0;
var finalPassword = "";

// Write password to the password input
function writePassword() {
  
  var numberRange = prompt("Please enter a number between 8 - 128.");

  if((numberRange < 8) || (numberRange > 128)) {
    alert("Please pick a number between 8 - 128!")
  }
  if(!numberRange){
    return;
  }
  else{
    numberLength = numberRange;
}

// Declaring Variables for all Confirm Statements
  var uppercase = confirm('Do you want to use uppercase letters?');
  var lowercase = confirm('Do you want to use lowercase letters?');
  var number = confirm('Do you want to include numbers?');
  var character = confirm('Do you want to use special characters?');

// Random Character Generate Functions

// Random uppercase letter generator
if (uppercase) {
  for(let i = 65; i <= 90; i++) {
    storedPassword.push(i);
  }
}

// Random lowercase letter generator
if (lowercase) {
  for(let i = 97; i <= 122; i++) {
    storedPassword.push(i);
  }
}

// Random number generator
if (number) {
  for(let i = 30; i <= 39; i++) {
    storedPassword.push(i);
  }
}

// Random character generator
if (character) {
  for(let i = 33; i <=126; i++) {
    if(i <= 48 && i >= 57) {
      continue;
    }
    if(i >= 65 && i >= 122){
      continue;
    }
    else {
      storedPassword.push(i);
    }
  }
}

// Actual Password Generator
for(i = 0; i < numberLength; i++) {
  var randomChar = Math.floor(Math.random() * storedPassword.length);
  finalPassword += String.fromCharCode(storedPassword[randomChar]);
}

// Stores password in finalPassword variable
alert(finalPassword);
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

// Add Event Listener to Generate Button
generateBtn.addEventListener("click", writePassword);
}
