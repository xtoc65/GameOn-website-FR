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
const form = document.getElementById("form-id");
const $inscriptionOk = document.getElementById("valide-id");
const close = document.querySelector(".close"); //on va cherche la class close queryselector
const bground = document.querySelector(".bground");//on va cherche la class bground queryselector
const $formulaire = document.getElementById("form-id");
const button = document.querySelector(".valider");
const hasError = document.getElementsByClassName('has-error');//la classe corespond a tout les message d'erreur

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";  
  form.reset();
  $inscriptionOk.style.display = "none";
  for (i = 0; i < hasError.length; i++) {
    hasError[i].style.display = 'none';
  }
}

//Pour fermer le formulaire avec le bouton fermer 
button.addEventListener('click', () => {
  bground.style.display = "none";//avec display nonr on ferme le formulaire
  $formulaire.style.display = "block";//avec display block on remet le formulaire 
  close.style.display = "block";
}) 

//pour fermre la page insciption ok
close.addEventListener("click", () => { //on met un evenement au click sur close pour pouvoir fermer le formulaire
  bground.style.display = "none"; //avec display none on ferme le formulaire   
  $inscriptionOk.style.display = "none";
  $formulaire.style.display = "block";//avec display none on remet le formulaire 
});

// pour validé le formulaire 
const validationFormulaire = () =>{
  //on va récupéré les élément dans le html du formulaire 
  let prenom = document.getElementById("first");
  let nom = document.getElementById("last");
  let email = document.getElementById("email");
  let anniv = document.getElementById("birthdate");
  let nmbTournoi = document.getElementById("quantity");
  let nyCheckbox = document.getElementById("location1");
  let sfCheckbox = document.getElementById("location2");
  let seattleCheckbox = document.getElementById("location3");
  let chicagoCheckbox = document.getElementById("location4");
  let bostonCheckbox = document.getElementById("location5");
  let portlandCheckbox = document.getElementById("location6");
  let condition = document.getElementById("checkbox1");
  const valide = document.querySelector(".btn-submit");
  const $messagePrenom = document.getElementById("message-prenom");
  const $messageNom = document.getElementById("message-nom");
  const $messageEmail = document.getElementById("message-email");
  const $messageAnniv = document.getElementById("message-anniv");
  const $messageAnniv18 = document.getElementById("message-anniv18");
  const $messagenmbTournoi = document.getElementById("message-nmbtournoi");
  const $messageVille = document.getElementById("message-ville");
  const $messageCondition = document.getElementById("message-condition");
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
    //on regarde si l'utilisateur a 18 ans
    const annivOk = () =>{
      const aujd =new Date();
      const annee = aujd.getFullYear();
      return annee;
    }
    const annivValue = new Date(anniv.value);
    if (annivValue.getFullYear() >= annivOk() - 18) {
      $messageAnniv18.style.display = "block";
      $messageAnniv.style.display = "none";
      isFormValid = false;
    }
    //on regarde si le champs est remplie
    if (!anniv.value){
      $messageAnniv.style.display = "block";
      $messageAnniv18.style.display = "none";
      isFormValid = false;
    }
    if (nmbTournoi.value==""){
      $messagenmbTournoi.style.display = "block";
      isFormValid = false;
    }
    const villeIsCheck = (nyCheckbox.checked || sfCheckbox.checked || seattleCheckbox.checked || bostonCheckbox.checked || chicagoCheckbox.checked || portlandCheckbox.checked);
    if (!villeIsCheck){
      $messageVille.style.display = "block";
      isFormValid = false;
    }
    if(!condition.checked){
      $messageCondition.style.display = "block";
      isFormValid = false;
    }
    if(isFormValid){
        // Parcourez la liste des éléments et masquez-les
        for (i = 0; i < hasError.length; i++) {
            hasError[i].style.display = 'none';
        }
        $inscriptionOk.style.display = "block";
        $formulaire.style.display = "none";
        close.style.display = "none";
    }

  });
}

validationFormulaire();