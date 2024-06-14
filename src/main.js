const email = document.getElementById('input-email');
const form = document.getElementById('form');
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]{2,}$/i;
const invalid = document.getElementById('invalid');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    emailValidation()
})

function validError(){
    email.style.border = '2px red solid'
    invalid.classList.remove = 'hidden'
}
function noError(){
    email.style.border = 'none'
    invalid.classList.add = 'hidden'
}

function emailValidation(){
    if(!emailRegex.test(email.value)){
        validError()
    }else{
        noError()
    }
}