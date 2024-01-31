function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelector(".close"); //on va cherche la class close queryselector
const bground = document.querySelector(".bground");//on va cherche la class bground queryselector

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//pour fermre le formulaire
close.addEventListener("click", () => { //on met un evenement au click sur close pour pouvoir fermer le formulaire
  bground.style.display = "none"; //avec display none on ferme le formulaire 
});