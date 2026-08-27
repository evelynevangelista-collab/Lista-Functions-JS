function calcularMedia(nota1, nota2) {
    let media = (nota1 + nota2) /2;
    return media;
}

function verificarSituacao(media) {
    if (media >= 6) {
        return "Aprovado";
    }else {
        return "Reprovado";
    }
}

let media = calcularMedia(10, 5);
let situacao = verificarSituacao(media);

console.log("Média: ", media);
console.log("Situação: ", situacao);
