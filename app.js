let textoIngresado = document.querySelector('#textoUsuario').value;
let vocales = "aeiou";
let encriptado = "ai,enter,imes,ober,ufat";
let elementoTextoEncriptado = document.getElementById('textoEncriptado');

let listaEncriptado = encriptado.split(',');

let encriptadoPorVocal = {};
for (let i = 0; i < vocales.length; i++){
    encriptadoPorVocal[vocales[i]] = listaEncriptado[i];
}

let encriptadoPorVocalInvertido = {};
for (let i = 0; i < vocales.length; i++){
    encriptadoPorVocalInvertido[listaEncriptado[i]] = vocales [i];
}



function reemplazarVocales(caracter) {
    return encriptadoPorVocal[caracter] || caracter;
}

function desencriptarVocales (caracter) {
    return encriptadoPorVocalInvertido [caracter] || caracter;
}


function encriptarTexto () {
    let textoIngresado = document.querySelector('#textoUsuario').value;
    let palabraEncriptada = textoIngresado.replace(/[aeiou]/g,reemplazarVocales);
    const imagen = document.getElementById('miImagen');
    const copiar = document.getElementById('copiarBoton')
    let regex = /^[a-z\s]*$/;

    if (!regex.test(textoIngresado)){
        mostrarAlerta("Por favor, ingrese solo minúsculas, sin caracteres especiales.");
        return document.getElementById('textoEncriptado').value = '';
    }
    
    elementoTextoEncriptado.textContent=palabraEncriptada;
    /*console.log(elementoTextoEncriptado);*/
    document.getElementById('textoUsuario').value = '';
    
    if(elementoTextoEncriptado.textContent.trim() !== '') {
        imagen.style.display = 'none';
    } else {
        imagen.style.display = 'block';
    }
    
    if(elementoTextoEncriptado.textContent.trim() !== '') {
        copiar.style.display = 'block';
    } else {
        copiar.style.display = 'none';
    }
}

function desencriptarTexto () {
    let textoEncriptado = document.getElementById('textoEncriptado').innerText;
    let palabraDesencriptada = textoEncriptado.replace(/ai|enter|imes|ober|ufat/g,desencriptarVocales);
    document.getElementById('textoEncriptado').innerText = palabraDesencriptada;
}

function mostrarAlerta (mensaje) {
    let alertaCuadro = document.getElementById("alerta");
    let mensajeAlerta = document.getElementById("mensajeAlerta");

    mensajeAlerta.innerHTML = mensaje;

    alertaCuadro.style.display = "block";

    document.getElementById("cerrarBtnAlert").onclick = function() {
        alertaCuadro.style.display = "none";
    };
}

function copiarTexto () {
   let copiar = document.querySelector('#textoEncriptado').textContent;
   navigator.clipboard.writeText(copiar);
}