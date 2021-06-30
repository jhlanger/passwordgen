


var getPasswordLength = function () {
  var passwordLength = parseInt(prompt("How long do you want your password to be? Minimum 8 characters, Maximum 128 characters "));
  //validates that the input is between 8 and 128 and is a number. 
  while (isNaN(passwordLength) || passwordLength > 128 || passwordLength < 8) {
    passwordLength = parseInt(prompt("Please enter a valid number within the length suggested. Minimum 8 characters, Maximum 128 characters "));
  }
  return passwordLength;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {

  // prompts user for password length between 8 and 128 characters. 
  // password information object. Promts user for what they want in their password. 
  var passwordInfo = {
    length: getPasswordLength(),
    incNum: window.confirm("Do you want to include numbers? 0-9"),
    incSpecial: window.confirm("Do you want to include special characters? ! # $ % ^ & * + - , . "),
    incUpper: window.confirm("Do you want to include uppercase letters? ABC"),
    incLower: window.confirm("Do you want to include lowercase letters? abc")


  };
  //sets charset and password to a blank string. Sets character strings to input into charset
  var charset = "";
  var password = "";
  var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charLower = "abcdefghijklmnopqrstuvwxyz";
  var charSpecial = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var charNumbers = "0123456789";
  // uses passwordinfo to add desired password characters to charset string. 
  if (passwordInfo.incNum === true) {
    charset = charset + charNumbers
  }

  if (passwordInfo.incSpecial === true) {
    charset = charset + charSpecial;
  }

  if (passwordInfo.incUpper === true) {
    charset = charset + charUpper;
  }

  if (passwordInfo.incLower === true) {
    charset = charset + charLower;
  }
//Set false variables for input validation
  var upperPass = false;
  var lowerPass = false;
  var specialPass = false;
  var numberPass = false;
  //Run while these variables are false
  while (!upperPass && !lowerPass && !specialPass && !numberPass) {
    // if password includes Capital return true if false set password to blank and re run loop. 
    if (password.match(/([A-Z])/g)) {
      upperPass = true;
    } else {
      password = "";
      for (var i = 0, n = charset.length; i < passwordInfo.length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n + 1))
      }
    }
    // if password includes lowercase return true if false set password to blank and re run loop. 
    if (password.match(/([a-z])/g)) {
      lowerPass = true;
    } else {
      password = "";
      for (var i = 0, n = charset.length; i < passwordInfo.length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n + 1))
      }
    }
    // if password includes Numbers return true if false set password to blank and re run loop. 
    if (password.match(/\d/g)) {
      numberPass = true;
    } else {
      password = "";
      for (var i = 0, n = charset.length; i < passwordInfo.length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n + 1))
      }
    }
    // if password includes special characters return true if false set password to blank and re run loop. 
    if (password.match(/[!#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/g)) {
      specialPass = true;
    } else {
      password = "";
      for (var i = 0, n = charset.length; i < passwordInfo.length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n + 1))
      }
    }
  };

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
