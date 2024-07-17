var numContador=0;
document.getElementById('ans').value = numContador;


function aumentar(valor){
    if(numContador + valor < 999999){
        numContador += valor;
    }else{
        numContador = 999999;
    }

    document.getElementById('ans').value = numContador;
}

function reducir(valor){
    if(numContador - valor >= 0){
        numContador -= valor;
    }else{
        numContador = 0;
    }

    document.getElementById('ans').value = numContador;
}

function resetear(){
    numContador = 0;
    document.getElementById('ans').value = numContador;
}