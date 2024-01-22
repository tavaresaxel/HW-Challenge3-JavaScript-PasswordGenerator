// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var numeric = "0123456789"
var specialCharacter = "`~!@#$%^&*()-_=+[]{}|;:<,>.?/"

function generatePassword(){
  var savedPassword = "";
  var passwordSize = prompt("Enter password lenth you desire between 8 and 128 characters.")

  if(passwordSize >= 8 && passwordSize <= 128){
    var confirmLowercase = confirm("Do you want lowercase characters included in the password")
    var confirmUppercase = confirm("Do you want uppercase characters included in the password")
    var confirmNumeric = confirm("Do you want numeric characters included in the password")
    var confirmSpecialCharacter = confirm("Do you want special characters included in the password")
    
    for(var i = 0; i < passwordSize; i++){
      if(confirmLowercase && savedPassword.length < passwordSize){
        var randomIndex = Math.floor(Math.random() * lowercase.length);
        savedPassword = savedPassword + lowercase[randomIndex]
      }

      if(confirmUppercase && savedPassword.length < passwordSize){
        var randomIndex = Math.floor(Math.random() * uppercase.length);
        savedPassword = savedPassword + uppercase[randomIndex]
      }

      if(confirmNumeric && savedPassword.length < passwordSize){
        var randomIndex = Math.floor(Math.random() * numeric.length);
        savedPassword = savedPassword + numeric[randomIndex]
      }

      if(confirmSpecialCharacter && savedPassword.length < passwordSize){
        var randomIndex = Math.floor(Math.random() * lowercase.length);
        savedPassword = savedPassword + specialCharacter[randomIndex]
      }
    }
    
  }
  else{
    alert("Incorrect password size, please choose between 8 and 129 chracters");
  }

  return savedPassword

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
