// 1. Buscamos en la página lo que vamos a usar
const lista = document.querySelector("#lista");
const totalTexto = document.querySelector("#total");
const contador = document.querySelector("#contador");
const carrito = document.querySelector("#carrito");

// 2. Aquí guardamos cuánto dinero lleva el cliente
let total = 0;

// 3. A cada botón "Agregar" le decimos qué hacer cuando le den clic
document.querySelectorAll(".agregar").forEach(function (boton) {
    boton.addEventListener("click", function () {

        // Leemos el nombre y el precio escondidos en la tarjeta
        const tarjeta = boton.closest(".tarjeta");
        const precio = Number(tarjeta.dataset.precio);

        // Agregamos un renglón a la lista y actualizamos los números
        lista.innerHTML += "<li>" + tarjeta.dataset.titulo + " - $" + precio + "</li>";
        total = total + precio;
        totalTexto.textContent = total;
        contador.textContent = lista.children.length;

        // Mostramos el carrito
        carrito.classList.add("abierto");
    });
});

// 4. El botón 🛒 del menú muestra u oculta el carrito
document.querySelector("#boton-carrito").addEventListener("click", function () {
    carrito.classList.toggle("abierto");
});

// 5. El botón "Vaciar" borra todo
document.querySelector("#vaciar").addEventListener("click", function () {
    lista.innerHTML = "";
    total = 0;
    totalTexto.textContent = 0;
    contador.textContent = 0;
});
