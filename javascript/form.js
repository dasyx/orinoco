function valCart (){

    let valCart = document.getElementById("val_cart");

    // Création d'un bouton de validation de panier
    let valButtonCont = document.createElement("div");
    let valButton = document.createElement("button");

    // Ajout de l'attribut et filiation du bouton valider panier
    valButtonCont.setAttribute("class", "val_button_cont");
    valButton.setAttribute("id", "val_button");
    valButton.setAttribute("onclick", "displayForm()");

    // Agencement des éléments et filiation du formulaire dans la page panier.html
    valCart.appendChild(valButtonCont);
    valButtonCont.appendChild(valButton);

    valButton.textContent = "Valider le panier";

    // Création d'une fonction qui rend invisible le bouton valider une fois cliqué
    // Qui créera dans le même temps l'affichage du header formulaire
    let headerForm = document.getElementById("header_form");

    valButton.addEventListener("click", function () {
      valButton.style.visibility = "hidden";
      headerForm.style.visibility = "visible";
    });

    valButton.onclick = function displayForm(){

    // Création d'un formulaire qui sera rempli par l'utilisateur
    let displayForm = document.getElementById("display_form");
    let selFormDisplay = document.createElement("section");
    let selForm = document.createElement("form");
    let selFormFirstNameLabel = document.createElement("label");
        selFormFirstNameLabel.htmlFor = "first_name";
    let selFormFirstNameInput = document.createElement("input");
    let selFormLastNameLabel = document.createElement("label");
        selFormLastNameLabel.htmlFor = "last_name";
    let selFormLastNameInput = document.createElement("input");
    let selFormMailLabel = document.createElement("label");
        selFormMailLabel.htmlFor = "mail";
    let selFormMail = document.createElement("input");
    let selFormAdressLabel = document.createElement("label");
        selFormAdressLabel.htmlFor = "phone";
    let selFormAdress = document.createElement("input");
    let selFormCityLabel = document.createElement("label");
        selFormCityLabel.htmlFor = "city";
    let selFormCity = document.createElement("input");

    let selFormDisplayValid = document.createElement("section");
    let selFormValid = document.createElement("input");

    // Ajout des attributs pour la section formulaire
    selFormDisplay.setAttribute("class", "flex_form");

    selForm.setAttribute("id", "check_form");

    selFormFirstNameInput.setAttribute("id", "name");
    selFormFirstNameInput.setAttribute("type", "text");
    selFormFirstNameInput.setAttribute("name", "username");
    selFormFirstNameInput.setAttribute("required", true);

    selFormLastNameInput.setAttribute("id", "name");
    selFormLastNameInput.setAttribute("type", "text");
    selFormLastNameInput.setAttribute("name", "username");
    selFormLastNameInput.setAttribute("required", true);

    selFormMail.setAttribute("id", "mail");
    selFormMail.setAttribute("type", "email");
    selFormMail.setAttribute("name", "usermail");
    selFormMail.setAttribute("required", true);

    selFormAdress.setAttribute("id", "adress");
    selFormAdress.setAttribute("type", "text");
    selFormAdress.setAttribute("name", "adress");
    selFormAdress.setAttribute("required", true);

    selFormCity.setAttribute("id", "city");
    selFormCity.setAttribute("type", "text");
    selFormCity.setAttribute("name", "city");
    selFormCity.setAttribute("required", true);

    selFormDisplayValid.setAttribute("class", "flex_valid_form");
    selFormValid.setAttribute("id", "submit-btn");
    selFormValid.setAttribute("type", "submit");

    // Le formulaire et ses dépendances
    displayForm.appendChild(selFormDisplay);
    selFormDisplay.appendChild(selForm);
    selForm.appendChild(selFormFirstNameLabel);
    selForm.appendChild(selFormFirstNameInput);
    selForm.appendChild(selFormLastNameLabel);
    selForm.appendChild(selFormLastNameInput);
    selForm.appendChild(selFormAdressLabel);
    selForm.appendChild(selFormAdress);
    selForm.appendChild(selFormCityLabel);
    selForm.appendChild(selFormCity);
    selForm.appendChild(selFormMailLabel);
    selForm.appendChild(selFormMail);
    displayForm.appendChild(selFormDisplayValid);
    selFormDisplayValid.appendChild(selFormValid);

    // Intégration du texte
    selFormFirstNameLabel.textContent = "Votre prénom :";
    selFormLastNameLabel.textContent = "Votre nom :";
    selFormAdressLabel.textContent = "Votre adresse postale :";
    selFormCityLabel.textContent = "Votre ville de résidence :";
    selFormMailLabel.textContent = "Votre adresse email :";
  }
}
// Récupération des données du tableau
let displayForm = JSON.parse(window.localStorage.getItem("productsList"));
  
// Condition qui affichera ou non le bouton de validation de panier
if(displayForm.length == 0){

  document.getElementById("display_form").style.display = "none";

} else {

  valCart();

}