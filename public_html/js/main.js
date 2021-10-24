
// SCRIPT FÖR NAVIGATION
/*Js for toggle-nav */
const toggleButton = document.getElementsByClassName('nav__toggle')[0]
const navbarLinks = document.getElementsByClassName('nav__list')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('show')
});

// SCRIPT FÖR FULLSCREEN 

function toggleFullscreen(){
  if (getFullscreemElement()) {
    document.exitFullscreen();
  }else {
    document.documentElement.requestFullscreen.catch(e);
  }
};
document.addEventListener("dblclick", () => {
  document.documentElement.requestFullscreen().catch((e) =>{

  });
});