
  


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  // prompts user for password length between 8 and 128 characters. 
  var getPasswordLength = function() {
    var passwordLength = parseInt(prompt("How long do you want your password to be? Minimum 8 characters, Maximum 128 characters "));
    //validates that the input is between 8 and 128 and is a number. 
    while (isNaN(passwordLength) || passwordLength > 128 || passwordLength < 8) {
      passwordLength = parseInt(prompt("Please enter a valid number within the length suggested. Minimum 8 characters, Maximum 128 characters "));
    }
    return passwordLength;
  };
  // password information object. Promts user for what they want in their password. 
  var passwordInfo = {
    length: getPasswordLength(),
    incNum: window.confirm("Do you want to include numbers? 0-9"),
    incSpecial: window.confirm("Do you want to include special characters? ! # $ % ^ & * + - , . "),
    incUpper: window.confirm("Do you want to include uppercase letters? ABC"),
    incLower: window.confirm("Do you want to include lowercase letters? abc")

    
  };
//sets charset to a blank string
  var charset = "";
// uses passwordinfo to add desired password characters to charset string. 
if (passwordInfo.incNum ===true) {
  charset = charset + "0123456789"
} 

if (passwordInfo.incSpecial ===true) {
  charset = charset + "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
}

if (passwordInfo.incUpper ===true) {
  charset = charset + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}

if (passwordInfo.incLower ===true) {
  charset = charset + "abcdefghijklmnopqrstuvwxyz";
}
// for loop to randomly select characters from charset and create a random password. 
function generatePassword() {
  var password = "";
  for (var i =0, n=charset.length; i <passwordInfo.length; ++i) {
    password += charset.charAt(Math.floor(Math.random()*n+1))
  }

  return password;
}
// **************STILL NEED INPUT VALIDATION ************

var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
