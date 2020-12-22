var emailElement= document.getElementById('e');
var passElement= document.getElementById('p');
var loginElement= document.getElementById('l');
var createElement= document.getElementById('c');

loginElement.addEventListener('click',validateEmail);


function validateEmail(){
    var email_input=emailElement.value;
    var pass_input=passElement.value;
    var regx=  /^[.\w]+@([\w-]+\.)+[\w]+$/; 
    // var reg = /^[\w]{6,}$/;
    if(regx.test(email_input) && pass_input.match(/[a-z]/g) && pass_input.match( 
        /[A-Z]/g) && pass_input.match( 
        /[0-9]/g) && pass_input.match( 
        /[^a-zA-Z\d]/g) && pass_input.length >= 6){
        alert('valid');
    }
    else{
        alert('invalid');
    }
  
    

}
