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

var dPasswordLength = 10  

function generatePassword() {
  let passwordLength = parseInt(prompt("How long should your password be? (1-128)", dPasswordLength));

  if (isNaN(passwordLength)) {
    return "Invalid Password Length"
  } else if (passwordLength > 128) {
    return "Invalid Password Length"
  }

  let lowercase = prompt("Should your password contain lower case letters? (true or false)", true).toLowerCase();

  if (lowercase === "true") {
    lowercase = "abcdefghijklmnopqrstuvwxyz"
  } else if (lowercase === "false") {
    lowercase = "" 
  } else {
    return "Invalid Lowercase Selection"
  }

  let uppercase = prompt("Should your password contain upper case letters? (true or false)", true).toLowerCase();

  if (uppercase === "true") {
    uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  } else if (uppercase === "false") {
    uppercase = "" 
  } else {
    return "Invalid Uppercase Selection"
  }

  let numerals = prompt("Should your password contain numerals? (true or false)", true).toLowerCase();

  if (numerals === "true") {
    numerals = "1234567890"
  } else if (numerals === "false") {
    numerals = "" 
  } else {
    return "Invalid Numeral Selection"
  }

  let special = prompt("Should your password contain special characters? (true or false)", true).toLowerCase();

  if (special === "true") {
    special = "!@#$%^&*()_+"
  } else if (special === "false") {
    special = "" 
  } else {
    return "Invalid Special Character Selection"
  }

// passwordLength, lowercase, uppercase, numeral, special
  let characters = uppercase + lowercase + numerals + special
  let password = ""
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * characters.length)
    console.log(randomNumber)
    password += characters.substring(randomNumber,randomNumber+1)
    console.log(password)
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
