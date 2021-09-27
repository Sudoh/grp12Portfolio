$(document).ready(function () {
  // Apearing tha paragraph
  $("#app-a").fadeToggle(5000);

  // // Select page
  let portfolioSida = document.querySelector(".portfolio-sida-a");

  //   // Get Array of images;
  //   let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "05.jpg", "06.jpg"];

  //   setInterval(function () {
  //     // Get random Number
  //     let randomNumber = Math.floor(Math.random() * imgsArray.length);

  //     // Change Background Image Ur1
  //     portfolioSida.style.backgroundImage =
  //       'url("../bilder/index-images' + imgsArray[randomNumber] + '")';
  //   }, 10000);

  $("#btn-a").click(function () {
    $(".links-a").slideToggle(1000);
  });
});
