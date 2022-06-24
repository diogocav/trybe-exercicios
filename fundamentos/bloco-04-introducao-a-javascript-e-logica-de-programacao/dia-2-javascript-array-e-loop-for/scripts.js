// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

// for (let i = 0; i < numbers.length; i += 1){
//     console.log(numbers[i]);
// }

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// let soma = 0
// for (let i = 0; i < numbers.length; i += 1){
//     soma = numbers[i] + soma
// }
// console.log(soma);

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

// let soma = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//   soma = numbers[i] + soma;
// }
// let mediaArit = soma / numbers.length
// console.log(mediaArit);

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// let soma = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//   soma = numbers[i] + soma;
// }
// let mediaArit = soma / numbers.length
// if (mediaArit > 20){
//     console.log("valor maior que 20");

// } else {
//     console.log("valor menor ou igual a 20");

// }

// 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;

// let maiorN = 0
// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > maiorN){
//         maiorN = numbers[i]
//     }
// }
// console.log(maiorN);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let impar = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] % 2 !== 0) {
//     impar += 1;
//   }
// }
// console.log(impar);

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

// let menor = numbers[0]
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < menor) {
//     menor = numbers[i]
//   }
// }
// console.log(menor);

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

// let numeros = [];
// for (let i = 1; i <= 25; i += 1) {
//   numeros.push(i);
// }
// console.log(numeros);

// // Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

// for (let i = 0; i < numeros.length; i += 1) {
//   console.log(numeros[i] / 2);
// }

// BONUS
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Ordene o array numbers em ordem crescente e imprima seus valores;
// Ordene o array numbers em ordem decrescente e imprima seus valores;
// Agora crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:
// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);


