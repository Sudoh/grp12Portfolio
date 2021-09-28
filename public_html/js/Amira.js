$(document).ready(function () {

  // Apearing tha paragraph
  $("#app").fadeToggle(5000);

  // // Select page
  let portfolioSida = document.querySelector(".portfolio-sida-a");

  // Get Array of images;
  let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "05.jpg", "06.jpg"];

  setInterval(function () {
    // Get random Number
    let randomNumber = Math.floor(Math.random() * imgsArray.length);

    // Change Background Image Ur1
    portfolioSida.style.backgroundImage = 
      'url("bilder/index-images/' + imgsArray[randomNumber] + '")';
  }, 2500);
});


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


let isValidationOn = false;
//validate only on submit
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
  
  if (!isValidationOn) return;
  //if not on return

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
  isValidationOn = true;
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
  }
});

/*Js for toggle-nav */
const toggleButton = document.getElementsByClassName('nav__toggle')[0]
const navbarLinks = document.getElementsByClassName('nav__list')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('show')
})
