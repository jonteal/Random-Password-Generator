// Globally Declared Variables
var userPicks;
var useUppercase;
var useLowercase;
var useNumbers;
var useSymbols;

// Arrays of Possible Characters
randomUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
randomLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
randomNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
randomSymbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "`", "|", "/", "}", "{", "[", "]", "<", ">", "?", "-", "+"];

// Use for Validating Selected Criteria Below
var selectedCriteria = [];

// Select the "Generate" Button in HTML
var generate = document.querySelector("#generate");

// Click Event to Begin Prompts
generate.addEventListener("click", function () {
    finalPassword = generatePassword();
    document.getElementById("password").placeholder = finalPassword;
});


// Generate Password Function
function generatePassword() {

// Choose a Number between 8 - 128
    userPicks = parseInt(prompt("Choose a number between 8 - 128!"));

// If Statement for When No Selection is Made
    if (!userPicks) {
        alert("In order to proceed, you must enter a number.");

// If Statement for if Selection is outside of Specified Range
    } else if (userPicks < 8 || userPicks > 128) {
        userPicks = parseInt(prompt("The number you enter must be between 8 - 128."));

// Else Confirm Promps to Select for Uppercase, Lowercase, Numbers, or Symbols
    } else {
        useUppercase = confirm("Do you wish to include uppercase letters?");
        useLowercase = confirm("Do you wish to include lowercase letters?");
        useNumbers = confirm("Do you wish to include numbers?");
        useSymbols = confirm("Do you wish to include special characters or symbols?");
    }

    if (useUppercase) {
        selectedCriteria = selectedCriteria.concat(randomUppercase);
    }

    if (useLowercase) {
        selectedCriteria = selectedCriteria.concat(randomLowercase);
    }

    if (useNumbers) {
        selectedCriteria = selectedCriteria.concat(randomNumbers);
    }

    if (useSymbols) {
        selectedCriteria = selectedCriteria.concat(randomSymbols);
    }


    // If Statement for No Criteria Selected
    if (!useUppercase && !useLowercase && !useNumbers && !useSymbols) {
        selectedCriteria = alert("You must choose at least one!");
    };

    // Empty array for password to pass into
    var passwordArray = [];

    // Actual Randomizer for Password
    for (var i = 0; i < userPicks; i++) {
        var randomPassword = selectedCriteria[Math.floor(Math.random() * selectedCriteria.length)];
        passwordArray.push(randomPassword);
    }

    // Variable to Hold Password Once Random Outputs have been Joined
    var finalPassword = passwordArray.join("");
    UserInput(finalPassword);
    console.log(finalPassword);

    // Input Final Password into Text Area on Page
    function UserInput(finalPassword) {
        document.getElementById("password").textContent = finalPassword;
    }
};