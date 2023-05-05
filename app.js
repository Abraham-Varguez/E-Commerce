'use strict'

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
