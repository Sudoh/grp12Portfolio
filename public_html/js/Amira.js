$(document).ready(function () {
  // Apearing tha paragraph
  $("#p-toggle").fadeIn(10000);

  // Fångar element från sidan och deklarerar som variabel
  let portfolioSida = document.querySelector(".portfolio-sida-a");
  const startButton = document.getElementsByClassName('animationAction')[0];
  const stopButton = document.getElementsByClassName('animationPause')[0];

  //Switch Random Background Option
  const randomBackground = document.querySelectorAll(
    ".random-background button"
  );

  // Deklarerar variabler
  let intervall;
  // Get Array of images;
  let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "05.jpg", "06.jpg"];


  // Startar animationen när sidan laddas
  startButton.disabled = true;
  randomizeImgs();


  // function To Randomize Images
  function randomizeImgs() {

    intervall = setInterval(function () {
      // Get random Number
      let randomNumber = Math.floor(Math.random() * imgsArray.length);

      // Change Background Image Ur1
      portfolioSida.style.backgroundImage =
        'url("bilder/index-images/' + imgsArray[randomNumber] + '")';
    }, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;

  }


  // fångar knapparna och kör funktion beroende av knapp
  startButton.addEventListener('click', () => {
    randomizeImgs();
  })

  stopButton.addEventListener('click', () => {
    myStopFunction();
  })


  // Funktion som disablar start/stopp knappar
  function myStopFunction() {
    clearTimeout(intervall);
    startButton.disabled = false;
    stopButton.disabled = true;
  }

});
