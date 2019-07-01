  //Dream and Code
  // Traitement des informations saisies dans le formulaire

  let userNameFormat = /[a-z]/,
      userEmailFormat = /.+@.+\..+/,
      invalidUserName = document.getElementById("invalidusername"),
      invalidUserEmail = document.getElementById("invalidmail"),
      userName = document.getElementById("username"),
      userEmail = document.getElementById("useremail"),
      form = document.getElementById("formulaire"),
      validateMessage = document.getElementById("validatemessage"),
      submitButton = document.getElementById("button");

  // Evenement Blur : vérification du mail de l'utilisateur avant l'envoi du formulaire

  userEmail.addEventListener("blur", function(){
    userEmail.value === true;
    if (userEmailFormat.test(userEmail.value) === false) {
        invalidUserEmail.innerHTML = "Saisissez une adresse email correct";
        form.preventDefault;
      }
    })

  // Evenement Blur : vérification du nom d'utilisateur avant l'envoi du formulaire

    userName.addEventListener("blur", function(){
      if ((userNameFormat.test(userName.value) === false) || (/[A-Z]/.test((userName.value)[0]) === false)){
        invalidUserName.innerHTML = "La première lettre doit être en majuscule";
        form.preventDefault;
      }
    })

    // Evenement click: Vérification des informations après l'envoi du formulaire

    submitButton.addEventListener("click", function(){
      if (username.value === "" || useremail.value ===""){
        validateMessage.innerHTML = "Veuillez renseigner tous les champs";
        form.preventDefault;
      }
  });

  // Vérification des informations de la newsletter

  let newsletterButton = document.getElementById("subscribe"),
      newsletterInput = document.getElementById("newsletterinput"),
      infoNewsletter = document.getElementById("infonewsletter"),
      newsletterForm = document.getElementById("newsform");
      newsletterButton.addEventListener("click", function(e){
    if (userEmailFormat.test(newsletterInput.value) === false){
      infoNewsletter.innerHTML = "Saisissez une adresse email correct";
      newsletterForm.preventDefault;
    }
    else{
      newsletterForm.style.display="none";
      infoNewsletter.style.color="green";
      infoNewsletter.innerHTML = "votre souscription est réussi";
    }
  })
