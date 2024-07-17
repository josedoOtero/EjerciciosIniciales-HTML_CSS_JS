const boton_goku = document.querySelector("#menu_opciones .goku");
const boton_vegeta = document.querySelector("#menu_opciones .vegeta");
const boton_broly = document.querySelector("#menu_opciones .broly");

const img = document.querySelector("#img_select");

const selecionado = document.querySelector("#opcion");

boton_goku.addEventListener("click",() =>{
    selecionado.classList.add("goku")
    selecionado.classList.remove("vegeta")
    selecionado.classList.remove("broly")

    img.setAttribute('src','img/goku.jpg')
});

boton_vegeta.addEventListener("click",() =>{
    selecionado.classList.add("vegeta")
    selecionado.classList.remove("goku")
    selecionado.classList.remove("broly")

    img.setAttribute('src','img/vegeta.jpg')
});

boton_broly.addEventListener("click",() =>{
    selecionado.classList.add("broly")
    selecionado.classList.remove("vegeta")
    selecionado.classList.remove("goku")

    img.setAttribute('src','img/broly.jpg')
});