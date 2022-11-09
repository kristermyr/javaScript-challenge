// Assignment Code
var generateBtn = document.querySelector("#generate");                 // #Generate is the ID from the HTML
      
function generatePassword() {

               
  var passwordLength = window.prompt("How many characters do you want in your password?")   // User sets value for passwordLength

      if (isNaN(passwordLength)) {
      window.alert("That's not a number!")        // Alerts if user input is not a number. If what user inputs is not a number it alerts and  returns to the start of the page  
      return "Try again!";
      }

      if (passwordLength < 8 || passwordLength > 128) {                // sets that password has to be between 8 and 128 characters. If outside, send the alert to the user
      window.alert("Password length must be more than 8 characterts and not more than 128 characters")
      return "Try again!";
      }

  var userNeedsNumbers = window.confirm("Do you want numbers in your password?")              
  var userNeedsUpperCase = window.confirm("Do you want upper case letters in your password?")      
  var userNeedsLowerCase = window.confirm("Do you want lower case letters in your password?")                  //creates windows for user to respond with boolean value
  var userNeedsSpecialCharacter = window.confirm("Do you want special characters in your password?")

  var userSelect = [];

  var userSelectNumber = ["0","1","2","3","4","5","6","7","8","9"]; 
  var userSelectUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];  // array of the different options for the user
  var userSelectLowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 
  var userSelectSpecialCharacter = ["!","#","$","%","&","'","(","/",")", ",","*","+",",","-",".","/",":",";","<","=",">","?","@","[","_","`","{","|","}","~","]"];
  
      if (userNeedsNumbers) {                                ///if statements to determine which array to pull characters from based on user input. Pushes the array into the empty array         
      userSelect = [...userSelect, ...userSelectNumber]                  
      }

      if (userNeedsUpperCase) {  
      userSelect = [...userSelect, ...userSelectUpperCase]       // ... is the spread operator.expands the array into individual elements. Combines the arrays into one array.
      }
      
      if (userNeedsLowerCase) { 
      userSelect = [...userSelect, ...userSelectLowerCase]      
      }

      if (userNeedsSpecialCharacter) {                     
      userSelect = [...userSelect, ...userSelectSpecialCharacter]       
      }

  var password = [];
    
      for (var i = 0; i < passwordLength; i++) { 
      var randomIndex = Math.floor(Math.random() * userSelect.length) // randomizes the array
      password.push(userSelect[randomIndex]);                    // pushes the randomized array into the password array
      if (userSelect.length === 0) {
      return ("Select at least one character type. Try again!" )  // if user does not select any character types it returns to the start of the page with an alert
      }
      }

  return password.join(''); // makes a new string by concatenating the elements of the array
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);