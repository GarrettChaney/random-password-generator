// Assignment code here


// Click Generate Password - fire starting function.
// Set/Reset all variables on start.
// Prompt #1: length:
// var passwordLength = X
// Prompt #2: lowercase
// var lowercase = (true or false)
// Prompt #3: uppercase
// var uppercase = (true or false)
// Prompt #4: numerals
// var numerals = (true or false)
// Prompt #5: special characters
// var numerals = (true or false)
// function generatePassword(passwordLength, lowercase, uppercase, numerals, special)


function generatePassword() {
  let passwordLength = parseInt(prompt("How long should your password be? (8-128)", 8));
  if (isNaN(passwordLength)) {
    return "Invalid Password Length. Please submit a number between 8-128."
  } else if (passwordLength > 128) {
    return "Invalid Password Length"
  } else if (passwordLength < 8) {
    return "Invalid Password Length"
  }

  let lowercase = prompt("Should your password contain lowercase letters? (true or false)", true);

  if (lowercase === null) {
    return "Invalid Lowercase Selection"
  } else if (lowercase.toLowerCase() === "true") {
    lowercase = "abcdefghijklmnopqrstuvwxyz"
  } else if (lowercase.toLowerCase() === "false") {
    lowercase = ""
  } else {
    return "Invalid Lowercase Selection"
  }

  let uppercase = prompt("Should your password contain uppercase letters? (true or false)", true);

  if (uppercase === null) {
    return "Invalid Uppercase Selection"
  } else if (uppercase.toLowerCase() === "true") {
    uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  } else if (uppercase.toLowerCase() === "false") {
    uppercase = ""
  } else {
    return "Invalid Uppercase Selection"
  }

  let numerals = prompt("Should your password contain numerals? (true or false)", true);

  if (numerals === null) {
    return "Invalid Numeral Selection"
  } else if (numerals.toLowerCase() === "true") {
    numerals = "1234567890"
  } else if (numerals.toLowerCase() === "false") {
    numerals = ""
  } else {
    return "Invalid Numeral Selection"
  }

  let special = prompt("Should your password contain special characters? (true or false)", true);

  if (special === null) {
    return "Invalid Special Character Selection"
  } else if (special.toLowerCase() === "true") {
    special = "!@#$%^&*()"
  } else if (special.toLowerCase() === "false") {
    special = ""
  } else {
    return "Invalid Special Character Selection"
  }

// passwordLength, lowercase, uppercase, numeral, special
  let characters = uppercase + lowercase + numerals + special
  let password = ""
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * characters.length)
    password += characters.substring(randomNumber,randomNumber+1)
  }
  return password


}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
