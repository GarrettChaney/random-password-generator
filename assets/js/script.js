function generatePassword() {
  let passwordLength = parseInt(prompt("How long should your password be? (8-128)", 8));
  if (isNaN(passwordLength)) {
    return "Invalid Password Length. Please submit a number between 8-128."
  } else if (passwordLength > 128) {
    return "Invalid Password Length. Please submit a number between 8-128."
  } else if (passwordLength < 8) {
    return "Invalid Password Length. Please submit a number between 8-128."
  }

  let lowercase = prompt("Should your password contain lowercase letters? (yes or no)", "yes");

  if (lowercase === null) {
    return "Invalid Lowercase Selection"
  } else if (lowercase.toLowerCase() === "yes") {
    lowercase = "abcdefghijklmnopqrstuvwxyz"
  } else if (lowercase.toLowerCase() === "no") {
    lowercase = ""
  } else {
    return "Invalid Lowercase Selection. Please try again."
  }

  let uppercase = prompt("Should your password contain uppercase letters? (yes or no)", "yes");

  if (uppercase === null) {
    return "Invalid Uppercase Selection"
  } else if (uppercase.toLowerCase() === "yes") {
    uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  } else if (uppercase.toLowerCase() === "no") {
    uppercase = ""
  } else {
    return "Invalid Uppercase Selection. Please try again."
  }

  let numerals = prompt("Should your password contain numerals? (yes or no)", "yes");

  if (numerals === null) {
    return "Invalid Numeral Selection"
  } else if (numerals.toLowerCase() === "yes") {
    numerals = "1234567890"
  } else if (numerals.toLowerCase() === "no") {
    numerals = ""
  } else {
    return "Invalid Numeral Selection. Please try again."
  }

  let special = prompt("Should your password contain special characters? (yes or no)", "yes");

  if (special === null) {
    return "Invalid Special Character Selection"
  } else if (special.toLowerCase() === "yes") {
    special = "!@#$%^&*()"
  } else if (special.toLowerCase() === "no") {
    special = ""
  } else {
    return "Invalid Special Character Selection. Please try again."
  }

// passwordLength, lowercase, uppercase, numeral, special
  let characters = uppercase + lowercase + numerals + special
  if  (characters.length === 0) {
    return "Please select 'Yes' to at least one of the catagories in order to generate a password."
  };
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
