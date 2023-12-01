// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//define array for lowercase characters
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
//define array for uppercase characters
var upperCase = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
//define array for Symbols characters
var symbols = "!@#$%^&*.,?=_-+{}[]/<>";
//define array for numbers characters
var numbers = "1234567890";

// Write password to the #password input
function writePassword() {
  var outputArray = "";
  var passwordOutput = "";
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
  }
  if (confirm("Would you like lowecase letters?")) {
    String.prototype.concat((outputArray = outputArray + lowerCase));
  }
  if (confirm("Would you like uppercase letters?")) {
    String.prototype.concat((outputArray = outputArray + upperCase));
  }
  if (confirm("Would you like symbols?")) {
    String.prototype.concat((outputArray = outputArray + symbols));
  }
  if (confirm("Would you like numbers?")) {
    String.prototype.concat((outputArray = outputArray + numbers));
  } else {
    alert("Please choose some characters for your password.");
    return;
  }
  console.log(outputArray);
  //random selector
  for (var i = 0; i < userLength; i++) {
    String.prototype.concat(
      (passwordOutput +=
        outputArray[Math.floor(Math.random() * outputArray.length)])
    );
  }
  console.log(passwordOutput);
  var passwordText = document.querySelector("#password");
  passwordText.value = passwordOutput;
  // reset for next run
  return;
}
