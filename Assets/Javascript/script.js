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

