// Show and move sidebar
document.getElementById("burgerMenu").addEventListener("click", (e) => {
  document.getElementById("sidebar").style.width = "100vw";
});

document.getElementById("exitSidebar").addEventListener("click", (e) => {
  document.getElementById("sidebar").style.width = "0";
});

// Control the behaviour of the contactForm
document.querySelectorAll("input, textarea").forEach((element) => {
  element.addEventListener("invalid", (e) => {
    if (e.target.value === "")
      e.target.setCustomValidity("Debe ingresar un valor correcto.");
    else e.target.setCustomValidity("");
  });

  element.addEventListener("input", (e) => {
    e.target.setCustomValidity("");
    e.target.checkValidity();
  });
});

document.querySelectorAll("input[type=checkbox]").forEach((element) => {
  element.addEventListener("invalid", (e) => {
    if (!e.target.checked) {
      e.target.setCustomValidity("Debe aceptar las condiciones de servicio");
    } else {
      e.target.setCustomValidity("");
    }
  });
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  location.replace("./confirmation.html");
});
