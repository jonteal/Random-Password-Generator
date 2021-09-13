// Assigning Variables

var storedPassword;
var useUppercase;
var useLowercase;
var useNumbers;
var useSymbols;


randomUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
randomLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
randomNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
randomSymbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "`", "|", "/", "}", "{", "[", "]", "<", ">", "?", "-", "+"];

var selectedCriteria;

var generate = document.querySelector("#generate");

generate.addEventListener("click", function () {
    finalPassword = generatePassword();
    document.getElementById("password").placeholder = finalPassword;
}

);

var passwordLength = []
var finalPassword = passwordLength.join("");