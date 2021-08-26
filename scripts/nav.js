const dropdownButton = document.querySelector("img#dropdown-button");
const navLinks = document.querySelector(".nav-links");
const navLinksAnimation = "nav-links-animationClass";
let dropdownState = false;
let rotationState = 0;

dropdownButton.addEventListener('click', () => {
  navLinks.classList.add([navLinksAnimation]);
  rotationState += 180;
  dropdownState = !dropdownState;
  dropdownButton.style.transform = `rotate(${rotationState}deg)`;
  navLinks.style.animationPlayState = "running";
  dropdownState ? navLinks.style.display = "flex" : navLinks.style.display = "none";
});

navLinks.addEventListener('animationend', () => {
  navLinks.classList.remove([navLinksAnimation]);
  navLinks.style.animationPlayState = "paused";
});