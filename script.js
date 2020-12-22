var emailElement= document.getElementById('e');
var passElement= document.getElementById('p');
var loginElement= document.getElementById('l');
var createElement= document.getElementById('c');

loginElement.addEventListener('click',validateEmail);


function validateEmail(){
    var email_input=emailElement.value;
    var regx=  /^[.\w]+@([\w-]+\.)+[\w]+$/; 
    if(regx.test(email_input)){
        alert('valid');
    }
    else{
        alert('invalid');
    }
}
