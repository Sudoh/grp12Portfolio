$(document).ready(function () {
  // Apearing tha paragraph
  $("#p-toggle").fadeIn(10000);

  // // Select page
  let portfolioSida = document.querySelector(".portfolio-sida-a");

  //Random Background Option
  let backgroundOption = true;

  //Variable to Control The Interval
  let backgroundInterval;

  //Swiitch Random Background Option
  const randomBackground = document.querySelectorAll(
    ".random-background button"
  );

  //Loop On All Buttons
  randomBackground.forEach(buttn => {
    //Click On All Buttons
    buttn.addEventListener("click", e => {
      if (e.target.dataset.background === "yes") {
        backgroundOption = true;

        randomizeImgs();
        
      } else {
        backgroundOption = false;

        clearInterval(backgroundInterval);
      }
    });
  });

  // Get Array of images;
  let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "05.jpg", "06.jpg"];

  // function To Randomize Images
  function randomizeImgs() {
    if (backgroundOption === true) {
      setInterval(function () {
        // Get random Number
        let randomNumber = Math.floor(Math.random() * imgsArray.length);

        // Change Background Image Ur1
        portfolioSida.style.backgroundImage =
          'url("bilder/index-images/' + imgsArray[randomNumber] + '")';
      }, 2500);
    }
  }
  randomizeImgs();
});
