function classificarNota(nota) {
  if (nota === 10 || nota === 9) {
    return "Excelente";
  } else if (nota === 7 || nota === 8) {
    return "Bom";
  } else if (nota === 6) {
    return "Aprovado"; 
    } else { 
      return "reprovado";
    }

  }

  console.log(classificarNota(7));
  console.log(classificarNota(4));
  console.log(classificarNota(9));
  console.log(classificarNota(6));
