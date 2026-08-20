function calcularMedia(nota1, nota2) {
    return(nota1 + nota2) / 2;
}
function verificarAprovacao(media) {
    if (media >=6) {
        return "Aprovado";
        }else {
            return "Reprovado";
        }
}

let media = calcularMedia(3, 8);
let resultado = verificarAprovacao(media);

console.log(media);
console.log(resultado);