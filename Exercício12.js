function verificarNumero(numero) {
    if (numero > 0) {
        return "Positivo";
    } else if (numero < 0) {
        return "Negativo";
    } else {
       return 'Zero';
    }
}

let resultadoNumero = verificarNumero(-5);
console.log(resultadoNumero);
