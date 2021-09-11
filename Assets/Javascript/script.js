// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(upper, lower, number, character, length) {
  var password = generatePassword();




  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", ());
  




// Random Character Generator Object
const randomCharFunction = {
  upper: pickRandomUpper,
  lower: pickRandomLower,
  number: pickRandomNumber,
  character: pickRandomCharacter
};


// Random Character Generate Functions 

// Random uppercase letter generator
function pickRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Random lowercase letter generator
function pickRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Random number generator
function pickRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// Random special character generator
function pickRandomCharacter() {
  const character = '<>{})(*&^%$#@!';
  return character[Math.floor(Math.random() * character.length)];
}

console.log(pickRandomCharacter());
