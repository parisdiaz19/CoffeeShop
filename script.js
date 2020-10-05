//Form Blur Event Listeners
document.getElementById('first-name').addEventListener('blur', validateName);
document.getElementById('last-name').addEventListener('blur', validateLastName);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);
document.getElementById('btn').addEventListener('click', signUp);



function signUp(e){
    const button = document.getElementById('btn');
    e.preventDefault();
}

function validateName() {
    const firstName = document.getElementById('first-name');
    const re = /^[a-zA-z]{2,15}$/;

    if(!re.test(firstName.value)){
        firstName.classList.add('invalid');
    } else {
        firstName.classList.remove('validate');
    }
}

function validateLastName() {
    const lastName = document.getElementById('last-name');
    const re = /^[a-zA-z]{2,15}$/;

    if(!re.test(lastName.value)){
        lastName.classList.add('invalid');
    } else {
        lastName.classList.remove('validate');
    }

}

function validateEmail() {
    const email = document.getElementById('email');
    const re = /^([a-zA-z0-9_\-\.]+)@([a-zA-z0-9_\-\.]+)\.([a-zA-z]{2,5})$/;
  
    if(!re.test(email.value)){
        email.classList.add('invalid');
    } else {
        email.classList.remove('validate');
    }
}

function validatePhone() {
    const phone = document.getElementById('phone');
    const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

    if(!re.test(phone.value)){
        phone.classList.add('invalid');
    } else {
        phone.classList.remove('validate');
    }    
}