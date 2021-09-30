/* $(document).ready(function () { */
// Apearing tha paragraph
$("#p-toggle").fadeIn(10000);

// // Select page
let portfolioSida = document.querySelector(".portfolio-sida-a");
const startButton = document.getElementsByClassName('animationAction')[0];
const stopButton = document.getElementsByClassName('animationPause')[0];

//Switch Random Background Option
const randomBackground = document.querySelectorAll(
  ".random-background button"
);


let intervall
// Get Array of images;
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "05.jpg", "06.jpg"];

// function To Randomize Images
function randomizeImgs() {

  intervall = setInterval(function () {
    // Get random Number
    let randomNumber = Math.floor(Math.random() * imgsArray.length);

    // Change Background Image Ur1
    portfolioSida.style.backgroundImage =
      'url("bilder/index-images/' + imgsArray[randomNumber] + '")';
  }, 1000);

}

alreadyOn = true;

if(alreadyOn = true){
  startButton.disabled = true;  
}
else {
  startButton.enabled = false; 
}


randomizeImgs()

startButton.addEventListener('click', () => {
  randomizeImgs();
})

stopButton.addEventListener('click', () => {
  myStopFunction();
})

function myStopFunction() {
  clearTimeout(intervall);
  alreadyOn = false;
}

/* }); */
