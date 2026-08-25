function calcularDesconto (preco, percentual) {
    let valorDesconto = preco * percentual / 100;
    let precoFinal = preco - valorDesconto;

    return precoFinal;
}

let preco = calcularDesconto(200, 10);
console.log(`Preço final: R$ ${preco}`);