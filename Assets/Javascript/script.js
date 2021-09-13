// Assigning Variables

var userInput;
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
});


function generatePassword() {

    userInput = parseInt(prompt("Choose a number between 8 - 128!"));

    if (!userInput) {
        alert("In order to proceed, you must enter a number.");
    } else if (userInput < 8 || userInput > 128) {
        userInput = parseInt(prompt("The number you enter must be between 8 - 128."));

    } else {
        useUppercase = confirm("Do you wish to include uppercase letters?");
        useLowercase = confirm("Do you wish to include lowercase letters?");
        useNumbers = confirm("Do you wish to include numbers?");
        useSymbols = confirm("Do you wish to include special characters or symbols?");
    }
};

if (!useUppercase && !useLowercase && !useNumbers && !useSymbols) {
    selectedCriteria = alert("You must choose at least one!");
}





var passwordLength = []
var finalPassword = passwordLength.join("");