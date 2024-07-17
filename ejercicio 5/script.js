setInterval (() => {
    const reloj = document.querySelector("#dato_reloj");
const calendario = document.querySelector("#dato_calendario");

let fecha = new Date();
var text_calendario = "";

switch (fecha.getDay()) {
    case 0:
        text_calendario += "LUN";
        break;
    case 1:
        text_calendario += "MAR";
        break;
    case 2:
        text_calendario += "MIR";
        break;
    case 3:
        text_calendario += "JUV";
        break;
    case 4:
        text_calendario += "VIE";
        break;
    case 5:
        text_calendario += "SAB";
        break;
    case 6:
        text_calendario += "DOM";
        break;
}

text_calendario += ("   "+fecha.getUTCDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear());
calendario.textContent = text_calendario;

reloj.textContent = fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds();
})