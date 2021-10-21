/*Js for contact-form */
const form = document.getElementById('contact-form')
const nameInput = document.getElementById('inpName')
const emailInput = document.getElementById('inpEmail')
const phoneInput = document.getElementById('inpPhone')
const messageInput = document.getElementById('inpText')

nameInput.isValid = () => isValidName(nameInput.value);
emailInput.isValid = () => isValidEmail(emailInput.value);
phoneInput.isValid = () => isValidPhone(phoneInput.value);
messageInput.isValid = () => isValidText(messageInput.value);


let isFormValid = false;

const isValidName = (name) =>{
  if (name.length > 3){
    return true;
  }
}

const isValidEmail = (email) => {
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return pattern.test(String(phone).toLowerCase());
};

const isValidText = (text) =>{
  if (text.length > 3){
    return true;
  }
}

const validateInputs = () => {
  

  isFormValid = true;
  inputFields.forEach((input) => {
    input.classList.remove("invalid");
    input.nextElementSibling.classList.add("hide");

    if (!input.isValid()) {
      input.classList.add("invalid");
      isFormValid = false;
      input.nextElementSibling.classList.remove("hide");
    }
  });
};

const inputFields = [nameInput, emailInput, phoneInput, messageInput];

inputFields.forEach((input) => input.addEventListener("input", validateInputs));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
  if (isFormValid) {
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    formData.push({
      inpName: document.getElementById('inpName').value,
      inpEmail: document.getElementById('inpEmail').value,
      inpPhone: document.getElementById('inpPhone').value,
      inpText: document.getElementById('inpText').value
    });
       
    localStorage.setItem('formData', JSON.stringify(formData));
    e.preventDefault();
    alert('Info in local storage');    
  }
});


/*Js for contact-form to displaydata */

displayData();

function displayData() {

  if (localStorage.getItem("formData") != null){

    let values = JSON.parse(localStorage.getItem("formData"));
  
    nameInput.value = values[values.length-1].inpName;
    emailInput.value = values[values.length-1].inpEmail;
    phoneInput.value = values[values.length-1].inpPhone;
    messageInput.value = values[values.length-1].inpText;
  }
  
}







