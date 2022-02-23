//global variables
let specialCharacterArray = ["!","@","#","$","%","^","&","*","?"]
let lowLettersArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let UpLettersArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"]
let numbersArray = ["0","1","2","3","4","5","6","7","8","9"]
let givenPassword = "";
//empty array
let userPicks = []


function userData () {
//password leangth
  let passwordLength = parseInt(prompt("How many characters do you want in your password? Password must be a minimum of 8 characters."))
  if (passwordLength < 8) {
    alert("Password must reach 8 characters and no more than 128")
    return null
  }
  if (passwordLength > 128) {
    alert("Password must reach 8 characters and no more than 128")
    return null
  }
  
  //checks if user wants special characters
  let specialCharacters = confirm("Do you want special characters?")
  if (specialCharacters === true) {
    userPicks.push.apply(userPicks, specialCharacterArray);
    random = specialCharacterArray[Math.floor(Math.random()*specialCharacterArray.length)];
    givenPassword += random;
  }
  console.log(userPicks)
  console.log(givenPassword)

  //checks if user wants lower case letter
  let lowLetters = confirm("Do you want lowercase letters?")
  if (lowLetters === true) {
    userPicks.push.apply(userPicks, lowLettersArray);
    random = lowLettersArray[Math.floor(Math.random()*lowLettersArray.length)];
    givenPassword += random;
  }
  console.log(userPicks)
  console.log(givenPassword)

//checks if user wants uppser case letters
  let upperLetters = confirm("Do you want upperercase letters?")
  if (upperLetters === true) {
    userPicks.push.apply(userPicks, UpLettersArray);
    random = UpLettersArray[Math.floor(Math.random()*UpLettersArray.length)];
    givenPassword += random;
  }
  console.log(userPicks)
  console.log(givenPassword)

//checks if user wants numbers
  let numbers = confirm("Do you want numbers?")
  if (numbers === true) {
    userPicks.push.apply(userPicks, numbersArray);
    random = numbersArray[Math.floor(Math.random()*numbersArray.length)];
    givenPassword += random;
  }
  console.log(userPicks)
  console.log(givenPassword)

//for loop for length of password
  for (let i = 0; i < passwordLength; i++) {
    random = userPicks[Math.floor(Math.random()*userPicks.length)];
    givenPassword += random;
  }
  console.log(givenPassword)
  
}


function generatePassword() {
  userData()
  return givenPassword;
  console.log("working")
}


// generate button
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;  
}

document.getElementById("password").specialCharacterArray = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

