// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
  
  var userNeedsNumbers = window.confirm("Do you want numbers in your password?")              
  var userNeedsUpperCase = window.confirm("Do you want upper case letters in your password?")      
  var userNeedsLowerCase = window.confirm("Do you want lower case letters in your password?")                  //creates windows for user to respond with boolean value
  var userNeedsSpecialCharacter = window.confirm("Do you want special characters in your password?")

  var userSelectNumber = ["0","1","2","3","4","5","6","7","8","9"]; 
  var userSelectUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];  // array of the different options for the user
  var userSelectLowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var userSelectSpecialCharacter = ["!","#","$","%","&","'","(","/",")", ",","*","+",",","-",".","/",":",";","<","=",">","?","@","[","_","`","{","|","}","~","]"];

  if (userNeedNumber === true) {
  }
  if (UserNeedsUpperCase === true) {  
  }
  if (userNeedsLowerCase === true) {
  }
  if (userNeedsSpecialCharacter === true) {                     //if statements to determine which array to pull characters from based on user input
  }

console.log(userNeedsNumbers);



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
