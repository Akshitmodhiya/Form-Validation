let nameError = document.getElementById('name-error');
let telError = document.getElementById('tel-error');
let emailError = document.getElementById('email-error');
let msgError = document.getElementById('msg-error');
let btnError = document.getElementById('btn-error');

function validateName() {
  let name = document.getElementById('contact-name').value;

  if (name.length == 0) {
    nameError.innerHTML = 'Name is required';
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = 'Write Full Name';
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validatePhone() {
  let phone = document.getElementById('contact-phone').value;

  if (phone.length == 0) {
    telError.innerHTML = 'Phone no. required';
    return false;
  }
  if (phone.length !== 10) {
    telError.innerHTML = 'Phone no. should be 10 digits';
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    telError.innerHTML = 'Only Digits';
    return false;
  }
  telError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateEmail() {
  let email = document.getElementById('contact-email').value;

  if (email.length == 0) {
    emailError.innerHTML = 'Email address required';
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = 'Email Invalid';
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateMessage() {
  let msg = document.getElementById('contact-msg').value;
  let required = 30;
  let left = required - msg.length;

  if (left > 0) {
    msgError.innerHTML = left + ' more characters required';
    return false;
  } 
  msgError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateForm() {
  if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
    btnError.style.display = 'block';
    btnError.innerHTML = 'Please fix error to submit';
    setTimeout(function(){btnError.style.display = 'none';}, 3000);
    return false;
  }
}