// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//define array for lowercase characters
var lowerCase = "abcdefghijklmnopqrstuvwxyz"; //.split("");
//define array for uppercase characters
var upperCase = "ABCDEFGHIJKLMONPQRSTUVWXYZ"; //.split("");
//define array for Symbols characters
var symbols = "!@#$%^&*.,?"; //.split("");
//define array for numbers characters
var numbers = "1234567890"; //.split("");
var outputArray = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var userLength = prompt("Enter a number between 8 and 128");
  if (userLength < 8) {
    alert("Number must be greater than 8");
  }
  if (userLength > 128) {
    alert("Number must be less than 128");
  }
  if (isNaN(userLength)) {
    alert("Must be a number");
  } else {
    var lower = confirm("Would you like lowecase letters?");
    var upper = confirm("Would you like uppercase letters?");
    var symbolsSelect = confirm("Would you like symbols?");
    var numbersSelect = confirm("Would you like numbers?");
    var passwordText = document.querySelector("#password");
    var password = generatePassword();
    // passwordText.value = outputArray;
    function generatePassword() {
      if (lower === true) {
        String.prototype.concat((outputArray = outputArray + lowerCase));
      }
      if (upper === true) {
        String.prototype.concat((outputArray = outputArray + upperCase));
      }
      if (symbolsSelect === true) {
        String.prototype.concat((outputArray = outputArray + symbols));
      }
      if (numbersSelect === true) {
        String.prototype.concat((outputArray = outputArray + numbers));
      }
      outputArray = outputArray.split("");
      console.log(outputArray);
      var random = Math.floor(Math.random() * userLength);
      console.log(random, outputArray[random]);
      // return outputArray[randomItem];
    }
    console.log(outputArray);
  }
}
