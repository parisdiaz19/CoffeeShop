//Form Blur Event Listeners
 document.getElementById('first-name').addEventListener('blur', validateName, signUp);
 document.getElementById('last-name').addEventListener('blur', validateLastName, signUp);
 document.getElementById('email').addEventListener('blur', validateEmail, signUp);
document.getElementById('phone').addEventListener('blur', validatePhone, signUp);
 document.getElementById('btn').addEventListener('click', signUp);
 document.getElementById('contact').addEventListener('click', contactUs );



 const firstName = document.getElementById('first-name');
 const lastName = document.getElementById('last-name');
 const email = document.getElementById('email');
 const phone = document.getElementById('phone');
 const contact = document.getElementById('contact');

function contactUs(e) {
    e.preventDefault 
    localStorage.setItem('contact', contact.value);
    alert('Thank you for your comment');
}





function signUp(e){
    e.preventDefault();
    const name1 = firstName.value;
    const name2 = lastName.value;
    const email1 = email.value;
    const phone1 = phone.value;
    const button = document.getElementById('btn'); 
     localStorage.setItem('first-name', firstName.value);
     localStorage.setItem('last-name', lastName.value);
     localStorage.setItem('email', email.value);
     localStorage.setItem('number', phone.value);

     if(name1 === "" &&
        name2 === "" &&
        email1 === "" &&
        phone1 === "") {
            alert('Please fill in the sign-up form!');
        } else {
            alert('You have now signed up!');
        }    
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




