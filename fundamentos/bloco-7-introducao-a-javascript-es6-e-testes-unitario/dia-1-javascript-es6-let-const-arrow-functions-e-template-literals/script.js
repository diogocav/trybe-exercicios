// exercicio 1
// Modifique a estrutura da função para que ela seja uma arrow function;
// Modifique as variáveis para que respeitem o escopo onde estão declaradas;
// Modifique as concatenações para template literals.

// const testingScope = (escopo) => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     elseScope = `${elseScope}, ótimo, fui utilizada no escopo !`;
//     console.log(elseScope);
//   }
// }

// testingScope(false);

// exercicio 2

// Crie uma função que faça com que o array oddsAndEvens fique na ordem crescente;
// Utilize o console.log e template literals para retornar a frase: 'Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!'.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

for (let repetitions = 0; repetitions < oddsAndEvens.length; repetitions++) {
  for (let index = 0; index < oddsAndEvens.length; index++) {
    let antes = oddsAndEvens[index];
    let depois = oddsAndEvens[index + 1];
    if (antes > depois) {
      oddsAndEvens[index] = depois;
      oddsAndEvens[index + 1] = antes;
    }
  }
}

console.log(oddsAndEvens);

// oddsAndEvens.sort((a, b) => a - b);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);
console.log('Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!')
