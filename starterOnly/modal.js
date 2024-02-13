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
const form = document.getElementById("form-id");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";  
  form.reset();
}

//pour fermre le formulaire
close.addEventListener("click", () => { //on met un evenement au click sur close pour pouvoir fermer le formulaire
  bground.style.display = "none"; //avec display none on ferme le formulaire   
});

// pour validé le formulaire 
const validationFormulaire = () =>{
  //on va récupéré les élément dans le html du formulaire 
  let prenom = document.getElementById("first");
  let nom = document.getElementById("last");
  let email = document.getElementById("email");
  let anniv = document.getElementById("birthdate");
  let nmbTournoi = document.getElementById("quantity");
  let nyCheckbox = document.querySelector(".checkbox-input");
  let sfCheckbox = document.querySelector(".checkbox-input");
  let seattleCheckbox = document.querySelector(".checkbox-input");
  let chicagoCheckbox = document.querySelector(".checkbox-input");
  let bostonCheckbox = document.querySelector(".checkbox-input");
  let portlandCheckbox = document.querySelector(".checkbox-input");
  let condition = document.querySelector(".checkbox2-label");
  const valide = document.querySelector(".btn-submit");
  const $inscriptionOk = document.getElementById("valide-id");
  const $messagePrenom = document.getElementById("message-prenom");
  const $messageNom = document.getElementById("message-nom");
  const $messageEmail = document.getElementById("message-email");
  const $messageAnniv = document.getElementById("message-anniv");
  const $messagenmbTournoi = document.getElementById("message-nmbtournoi");
  const $messageVille = document.getElementById("message-ville");
  const $messageCondition = document.getElementById("message-condition")
 
  valide.addEventListener("click", (event) => {
    event.preventDefault(); //on enleve le comportement par defaut
    let isFormValid = true;
    if (prenom.value.length < 2) { //Si prenom est plus petit que 2 alors
      $messagePrenom.style.display = "block";// on met le message d'erreur
      isFormValid = false;//si c'est pas valide 
    }
    if (nom.value.length < 2){
      $messageNom.style.display = "block";
      isFormValid = false;
    }
    if (!email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i)){
      $messageEmail.style.display = "block";
      isFormValid = false;
    }
    if (!anniv.value){
      $messageAnniv.style.display = "block";
      isFormValid = false;
    }
    if (nmbTournoi.value==""){
      $messagenmbTournoi.style.display = "block";
      isFormValid = false;
    }
    if (!nyCheckbox.checked || !sfCheckbox.checked || !seattleCheckbox.checked || !bostonCheckbox.checked || !chicagoCheckbox.checked || !portlandCheckbox.checked){
      $messageVille.style.display = "block";
      isFormValid = false;
    }
    if(!condition.checked){
      $messageCondition.style.display = "block";
      isFormValid = false;
    }
    if(isFormValid){
      //cache tout les span avec la classe hasError
      // Sélectionnez tous les éléments avec la classe spécifiée
        const hasError = document.getElementsByClassName('has-error');

        // Parcourez la liste des éléments et masquez-les
        for (i = 0; i < hasError.length; i++) {
            hasError[i].style.display = 'none';
        }
        $inscriptionOk.style.display = "block";
    }

  });
}

validationFormulaire();