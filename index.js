const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#EMAIL")
const errorText = document.querySelector(".errorText")
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

nameInput.oninput = function(){
    if(nameInput.value !=""){
        nameInput.classList.add("good");
    }
    else{
        nameInput.classList.remove("good");
    }
}
emailInput.oninput = function(){
    if(emailInput.value.match(validRegex)){
        emailInput.classList.add("good");
        emailInput.classList.remove("error");
        errorText.classList.add("hidden");
    }
    else{
        errorText.classList.remove("hidden");
        emailInput.classList.remove("good");
        emailInput.classList.add("error");    
    }
}