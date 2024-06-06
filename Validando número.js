function validarJS() {
    let numeroJS = -5;

    document.getElementById('numero-js').innerHTML = `<strong>Número JavaScript:</strong> ${numeroJS}`;
    let resultado = document.getElementById('validacao-js');

    validar(numeroJS, resultado);
    
}

function validarUsuario() {
    let numeroUsuario = document.getElementById('numero-usuario').value;

    let resultado = document.getElementById('validacao-usuario');

    validar(numeroUsuario, resultado);    
}

function validar(numero, resultado) {
    if(numero < 0) {
        resultado.innerHTML = `O número ${numero} é um número negativo.`;
    } else if (numero == 0) {
        resultado.innerHTML = `O número ${numero}, é 0.`;
    } else {
        resultado.innerHTML = `O número ${numero}, é um número positivo.`;
    }
}