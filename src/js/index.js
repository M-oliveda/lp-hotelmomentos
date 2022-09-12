// Show and move sidebar
document.getElementById("burgerMenu").addEventListener("click", (e) => {
  document.getElementById("sidebar").style.width = "100vw";
});

document.getElementById("exitSidebar").addEventListener("click", (e) => {
  document.getElementById("sidebar").style.width = "0";
});

// Control the behaviour of the contactForm
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  location.replace("./confirmation.html");
});

document.querySelectorAll("input, textarea").forEach((element) => {
  element.addEventListener("invalid", (e) => {
    switch (e.target.name) {
      case "fullname":
        e.target.setCustomValidity(
          "Debe ingresar un nombre válido. Recuerde que el campo debe estar compuesto por su nombre y apellido, separados por un espacio en blanco."
        );
        e.target.classList.add(`text-input_invalid`);
        break;
      case "email":
        e.target.setCustomValidity(
          "Debe ingresar un email válido. Para su orientación, este es un correo electrónico válido: ejemplo@ejemplo.com"
        );
        e.target.classList.add(`text-input_invalid`);
        break;
      case "message":
        e.target.setCustomValidity(
          "Por favor, ingrese un mensaje con toda la información que considere importante."
        );
        e.target.classList.add(`text-input_invalid`);
        break;
    }
  });

  element.addEventListener("focusout", (e) => {
    e.target.setCustomValidity("");
    let result = e.target.checkValidity();

    if (result) {
      e.target.classList.remove("text-input_invalid");
      e.target.classList.add("text-input_valid");
    }
  });
});

document.querySelectorAll("input[type=checkbox]").forEach((element) => {
  element.addEventListener("invalid", (e) => {
    if (!e.target.checked) {
      e.target.setCustomValidity("Debe aceptar las condiciones de servicio");
      e.target.classList.add("input-text_invalid");
    } else {
      e.target.setCustomValidity("");
      e.target.classList.remove("input-text_invalid");
      e.target.classList.add("input-text_valid");
    }
  });
});
