// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//define array for lowercase characters
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
//define array for uppercase characters
var upperCase = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
//define array for Symbols characters
var symbols = "!@#$%^&*.,?=_-+{}[]/<>";
//define array for numbers characters
var numbers = "1234567890";
var outputArray = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var userLength = prompt("Enter a number between 8 and 128");
  if (userLength < 8) {
    alert("Number must be greater than 8");
    return;
  }
  if (userLength > 128) {
    alert("Number must be less than 128");
    return;
  }
  if (isNaN(userLength)) {
    alert("Must be a number");
    return;
  } else {
    var lower = confirm("Would you like lowecase letters?");
    var upper = confirm("Would you like uppercase letters?");
    var symbolsSelect = confirm("Would you like symbols?");
    var numbersSelect = confirm("Would you like numbers?");
    var passwordText = document.querySelector("#password");
    var password = generatePassword();
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
      console.log(outputArray);
      //random selector
      function getMultipleRandom(outputArray, num) {
        const shuffled = [...outputArray].sort(() => 0.5 - Math.random());

        return shuffled.slice(0, num);
      }
      // generate random string and fix array to not have commas
      passwordOutput = getMultipleRandom(outputArray, userLength);
      passwordOutput = passwordOutput.join("");
      console.log(passwordOutput);
      passwordText.value = passwordOutput;
      // reset for next run
      return;
    }
  }
}