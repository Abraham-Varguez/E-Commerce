//NAV BAR VISIBLE----------------------------------------------------------------------------  Difficulty: 4

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

//PRODUCTS PAGE---------------------------------------------------------------------------- Difficulty: 8

// Code with an ajax request to fetch the data from the json file

//Creating a new xmlhttp-request object
//"http" vairable holds all the properties of the object
let http = new XMLHttpRequest();

//to prepare the request you need to use a open method on "https"
http.open("get", "item.json", true);

//first argument sets the http method
//second argument calls the file where the data is
//third arguement is a keyword that sets the request to be asynchronous

//sends the request to the json file
http.send();

//Now we need to catch the response
//using the onload eventlistener method
http.onload = function () {
  //Need to set the readystate and status properties
  //using the this to check the objects as inside the conditional
  if (this.readyState == 4 && this.status == 200) {
    //if we get a successful response, then we parse the json data to convert it into the json syntax
    //and put it into a JS array
    let products = JSON.parse(this.responseText);

    //create a empty variable to add the incoming data

    let output = " ";

    //create  a for of loop  that loops through the products object
    //need to add a html template to output variable so it can be pasted on the html

    for (let item of products) {
      output += `
         
      <div class="product">
        <img class="product__img" src="${item.image}" alt="${item.imageDescription}">
        <p class="product__title">${item.title}</p>
        <p class="product__description">${item.description}</p>
        <p class="product__price"> <span>${item.price}</span> </p>
      </div>
      `;
    }
    // and finally we will need to add the final call to post all the data into the HTML

    document.querySelector(".products").innerHTML = output;
  }
};

//MEET OUR TEAM SLIDER---------------------------------------------------------------------------- Difficulty: 6

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

//JAVASCRIPT= WHAT GOES AROUND COMES AROUND 😵‍💫
