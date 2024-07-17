const nav = document.querySelector("#nav");
const boton_abrir = document.querySelector("#abrir");
const boton_cerrar = document.querySelector("#cerrar");

boton_abrir.addEventListener("click",() =>{
    nav.classList.remove("no_visible");
})

boton_cerrar.addEventListener("click",() =>{
    nav.classList.add("no_visible");
})