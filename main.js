function handleCheck() {
    let producto = document.querySelector("#precioProducto");
    let envio = document.getElementById("precioEnvio");
    let total = document.getElementById("total");
    let operacion = 7999 * 3;
    let check = document.getElementById("check");

    if (check.checked) {
        producto.textContent = `${operacion} ARS`;
        envio.textContent = `${11999} ARS`;
        total.textContent = `${operacion + 11999} ARS`;
    } else {
        producto.textContent = `${operacion} ARS`;
        envio.textContent = `${0} ARS`;
        total.textContent = `${operacion} ARS`;
    }
}

function handleCant(){
    let cantidad = event.target.value;
    let total = document.getElementById("total");
    let producto = document.querySelector("#precioProducto");
    let check = document.getElementById("check");

    let operacion = 7999 * parseInt(cantidad);
    let enviocosto = check.checked ? 11999 : 0;

    producto.textContent = `${operacion} ARS`;
    total.textContent = `${operacion + enviocosto} ARS`;
}

function realizarCompra() {
    event.preventDefault();
    document.querySelector("form").hidden = true;
    document.getElementById("exito").hidden = false;
}




let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  if (index >= totalSlides) currentSlide = 0;
  else if (index < 0) currentSlide = totalSlides - 1;
  else currentSlide = index;

  const offset = -currentSlide * 100;
  document.querySelector(".carousel-container").style.transform = `translateX(${offset}%)`;
}

// Botones
document.querySelector(".next").addEventListener("click", () => showSlide(currentSlide + 1));
document.querySelector(".prev").addEventListener("click", () => showSlide(currentSlide - 1));

// Cambio automático cada 5 segundos
setInterval(() => showSlide(currentSlide + 1), 5000);
