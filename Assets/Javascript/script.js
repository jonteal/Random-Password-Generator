// Variable Assignments
var generateBtn = document.querySelector("#generate");
var storedPassword = [];
var numberLength = 0;
var finalPassword = "";

// Write password to the password input
function writePassword() {
  var numberRange = prompt('Please enter a number between 8 - 128.')

  if((numberRange < 8) || (numberRange > 128)) {
    alert('Please pick a number between 8 - 128!')
  }
  numberLength = numberRange;
}

// Declaring Variables for all Confirm Statements
  var uppercase = confirm('Do you want to use uppercase letters?');
  var lowercase = confirm('Do you want to use lowercase letters?');
  var number = confirm('Do you want to include numbers?');
  var character = confirm('Do you want to use special characters?');

  