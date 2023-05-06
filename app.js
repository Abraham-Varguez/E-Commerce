//NAV BAR VISIBLE

let visbility = false;

document.querySelector(".logo").addEventListener("click", function () {
  if (!visbility) {
    document.querySelector(".sidebar-none").classList.add("sidebar"); //adds sidebar class, which expands navbar
    document.querySelector(".sidebar-none").classList.remove("sidebar-none"); //removes sidebar-none class which removes navbar

    visbility = true;
  } else {
    document.querySelector(".sidebar").classList.add("sidebar-none");
    document.querySelector(".sidebar").classList.remove("sidebar");

    visbility = false;
  }
});

//MEET OUR TEAM SLIDER

//Variable that selects all classes labled 'slide' and puts them into an array
let sliderImages = document.querySelectorAll(".slide");

let arrowLeft = document.querySelector("#arrow-left");
let arrowRight = document.querySelector("#arrow-right");
let current = 0;

//This functions display:none on the css which makes the images disappear
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

//High-order Function that initializes the 1st Slider by calling the sliderImages array
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

//Slide to the Left- Function that Moves the slide to the left
function slideLeft() {
  reset();
  //it needs the "current -1 " because the array begins at 0
  sliderImages[current - 1].style.display = "block";
  current--;
}

//Slide to the right- Function that moves slide to the right
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

//Left Arrow Click- Calls the Slide Left function as well as sets a conditional as well
arrowLeft.addEventListener("click", function () {
  //First conditional is to check if slider is on the first slide
  if (current === 0) {
    //set current to 5 if conditional is true
    current = sliderImages.length;
  }

  slideLeft();
});

// //Right Arrow Click
arrowRight.addEventListener("click", function () {
  //Conditional that checks if slider is on last slide to go back to the beggining
  if (current === sliderImages.length - 1) {
    current = -1;
  }

  slideRight();
});

startSlide();
