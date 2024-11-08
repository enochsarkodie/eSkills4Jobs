const submitBtn= document.getElementById("submitBtn");
const userName= document.getElementById("userName");
const emailInput= document.getElementById("email");
const passwordInput = document.getElementById("password");

const emailText = emailInput.value;

function isValidEmail(emailText){
    return emailText.includes('@');
}
function validateForm(){
   const nameText = userName.value;
   const passwordText = passwordInput.value;

   if(nameText.length < 5){
    alert("username cannot be less 5 characters");
   }
   else if (!isValidEmail(emailText)){
    alert("invalid email");
   }
   else if(passwordText < 8){
    alert("password must be at least 8 characters");
   }
   else{
    alert("Registration Successfull");
   }
}

submitBtn.addEventListener('click', validateForm);