// Assigning Variables
var userInput;
var useUppercase;
var useLowercase;
var useNumbers;
var useSymbols;

// Listing out Full Arrays of Possible Characters for 
// Uppercase, Lowercase, Numbers, and  Symbols
randomUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
randomLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
randomNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
randomSymbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "`", "|", "/", "}", "{", "[", "]", "<", ">", "?", "-", "+"];

// Declaring Variable to Use Validating Selected Criteria Below
var selectedCriteria;

// Variable to Select the "Generate" Button in HTML
var generate = document.querySelector("#generate");

// Click Event to Begin Prompts
generate.addEventListener("click", function () {
    finalPassword = generatePassword();
    document.getElementById("password").placeholder = finalPassword;
});


// Generate Password Function
function generatePassword() {

// Choose a Number between 8 - 128
    userInput = parseInt(prompt("Choose a number between 8 - 128!"));

// If Statement for if No Selection is Made
    if (!userInput) {
        alert("In order to proceed, you must enter a number.");

// If Statement for if Selection is outside of Specified Range
    } else if (userInput < 8 || userInput > 128) {
        userInput = parseInt(prompt("The number you enter must be between 8 - 128."));

// Else Confirm Promps to Select for Uppercase, Lowercase, Numbers, or Symbols
    } else {
        useUppercase = confirm("Do you wish to include uppercase letters?");
        useLowercase = confirm("Do you wish to include lowercase letters?");
        useNumbers = confirm("Do you wish to include numbers?");
        useSymbols = confirm("Do you wish to include special characters or symbols?");
    }
};

// If Statement for No Criteria Selected
if (!useUppercase && !useLowercase && !useNumbers && !useSymbols) {
    selectedCriteria = alert("You must choose at least one!");
}

// If Statement for 1 Criteria Selected
else if (useUppercase) {
    selectedCriteria = randomUppercase;
}

else if (useLowercase) {
    selectedCriteria = randomLowercase;
}

else if (useNumbers) {
    selectedCriteria = randomNumbers;
}

else if (useSymbols) {
    selectedCriteria = randomSymbols;
}

// If Statement for 2 Criteria Selected
else if (useUppercase && useLowercase) {
    selectedCriteria = randomUppercase.concat(randomLowercase);

} else if (useUppercase && useNumbers) {
    selectedCriteria = randomUppercase.concat(randomNumbers);

} else if (useUppercase && useSymbols) {
    selectedCriteria = randomUppercase.concat(randomSymbols);
}

else if (useLowercase && useNumbers) {
    selectedCriteria = randomLowercase.concat(randomNumbers);

} else if (useLowercase && useSymbols) {
    selectedCriteria = randomLowercase.concat(randomSymbols);

} else if (useNumbers && useSymbols) {
    selectedCriteria = randomNumbers.concat(randomSymbols);
}

// If Statement for 3 Criteria Selected
else if (useUppercase && useLowercase && useNumbers) {
    selectedCriteria = randomUppercase.concat(randomLowercase, randomNumbers);
}

else if (useUppercase && useLowercase && useSymbols) {
    selectedCriteria = randomUppercase.concat(randomLowercase, randomSymbols);
}

else if (useUppercase && useNumbers && useSymbols) {
    selectedCriteria = randomUppercase.concat(randomNumbers, randomSymbols);
}

else if (useLowercase && useNumbers && useSymbols) {
    selectedCriteria = randomLowercase.concat(randomNumbers, randomSymbols);
}

// If Statement for All 4 Criteria Selected
else if (useUppercase && useLowercase && useNumbers && useSymbols) {
    selectedCriteria = randomUppercase.concat(randomLowercase, randomNumbers, randomSymbols);
}

// Empty array for password to pass into
var passwordLength = []

// Actual Randomizer for Password
for (var i = 0; i < userInput; i++) {
    var randomPassword = selectedCriteria[Math.floor(Math.random() * selectedCriteria.length)];
    passwordLength.push(randomPassword);
}

// Variable to Hold Password Once Random Outputs have been Joined
var finalPassword = passwordLength.join("");
Input(finalPassword);
return finalPassword;

// Input Final Password into Text Area on Page
function Input(finalPassword) {
    document.getElementById("password").textContent = finalPassword;
}