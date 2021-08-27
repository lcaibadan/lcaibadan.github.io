const firstSection = document.querySelector("#first-section-carousel");
const secondSection = document.querySelector("#second-section-carousel");
const thirdSection = document.querySelector("#third-section-carousel");
const fourthSection = document.querySelector("#fourth-section-carousel");
const fifthSection = document.querySelector("#fifth-section-carousel");

let isOpen = false;

const orderButtons = document.getElementsByClassName("agboola-category-description-contact");
const dialogWindows = document.getElementsByClassName("agboola-category-dialog");
// const isOpenArray = new Array(orderButtons.length).fill(false, 0, orderButtons.length);
// dialogWindow.style.animation = "300ms ease-in 1 normal fadeUp;";

const dialogWindowSubContainers = document.getElementsByClassName("agboola-category-dialog-subcontainer");
// dialogWindowSubContainer.style.animation = "300ms ease-in 1 normal slideUp";

const closeDialogButtons = document.getElementsByClassName("agboola-category-dialog-close");

const sections = [firstSection, secondSection, thirdSection, fourthSection, fifthSection];
let counter = 0;

setInterval(() => {
  let length = sections.length;
  sections[counter++ % length].style.opacity = "0";
  if (counter / 5 >= 1 && counter % 5 == 0) {
    for (let i = 0; i < length; i++) {
      sections[i].style.opacity = "1";
    }
  }
}, 9000);

//change animation direction based on if the dialog window is open
function changeAnimation(element, animationName) {
  // element.style.animation = `300ms ease-out 1 reverse ${animationName}`;
  element.style.animation = isOpen ? `300ms ease-out 1 reverse ${animationName}`
    : `300ms ease-in 1 normal ${animationName}`;
}

//cleear the animation when it's ended or canceled
function onAnimationFinished(event, element) {
  element.style.animation = "";
}

//listen for clicks on all orderButtons
for (let i = 0; i < orderButtons.length; i++) {
  let orderButton = orderButtons.item(i);
  orderButton.addEventListener('click', () => {
    //display the dialog window
    dialogWindows.item(i).style.display = "flex";

    //pad for the scrollbar when overflow is set to hidden
    if (window.matchMedia('(min-width: 1366px)').matches) document.body.style.paddingRight = '16px';
    document.body.style.overflow = "hidden";
    changeAnimation(dialogWindows.item(i), 'fadeUp');
    changeAnimation(dialogWindowSubContainers.item(i), 'slideUp');
    isOpen = !isOpen;
  });

  let closeDialogButton = closeDialogButtons.item(i);
  //close dialog window and animate as appropriate
  closeDialogButton.addEventListener('click', () => {
    changeAnimation(dialogWindow, 'fadeUp');
    changeAnimation(dialogWindowSubContainer, 'slideUp');
    setTimeout(() => {
      document.body.style.overflow = "auto";
      if (window.matchMedia('(min-width: 1366px)')) document.body.style.paddingRight = "initial";
      dialogWindows.item(i).style.display = "none";
      isOpen = !isOpen;
    }, 300);
  });

  let dialogWindow = dialogWindows.item(i);
  dialogWindow.addEventListener('animationend', (event) => {
    onAnimationFinished(event, dialogWindow);
  });

  dialogWindow.addEventListener('animationcancel', (event) => {
    onAnimationFinished(event, dialogWindow);
  });

  let dialogWindowSubContainer = dialogWindowSubContainers.item(i);
  dialogWindowSubContainer.addEventListener('animationend', () => {
    dialogWindowSubContainer.style.animation = "";
  });

  dialogWindowSubContainer.addEventListener('animationcancel', (event) => {
    onAnimationFinished(event, dialogWindowSubContainer);
  });
}