// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

// const a = 5
// const b = 6

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

// const a = 30;
// const b = 50;

// if (a > b) {
//   console.log(a);
// } else if (b > a) {
//   console.log(b);
// } else {
//   console.log("valores iguais");
// }

// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

// const a = 3;
// const b = 6;
// const c = 9;

// if (a > b && a > c) {
//   console.log(a);
// } else if (b > a && b > c) {
//   console.log(b);
// } else if (c > a && c > b) {
//   console.log(c);
// }

// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

// const a = 1;

// if (a > 0) {
//   console.log("positive");
// } else if (a < 0) {
//   console.log("negative");
// } else {
//   console.log("zero");
// }

// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

// const a = 90;
// const b = 40;
// const c = -1;

// if (a + b + c === 180) {
//   console.log(true);
// } else if (a < 0 || b < 0 || c < 0) {
//   console.log("erro");
// } else {
//   console.log(false);
// }

// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) ==>> nomePeca.toLowerCase();

// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

// var nomePeca = "Peon";

// switch (nomePeca.toLowerCase()) {
//   case "peon":
//     console.log("peão -> avança uma casa");
//     break;
//   case "tower":
//     console.log("torre -> avança em linha quantas casas quiser");
//     break;
//   case "horse":
//     console.log("cavalo -> avança 2 casa pra frente e 1 pra 1 dos lados");
//     break;
//   case "bishop":
//     console.log("bispo -> avança na diagonal quantas casa quiser");
//     break;
//   case "queen":
//     console.log("rainha -> avança em linha reta ou diagonal quantas casas quiser");
//     break;
//   case "king":
//     console.log("rei -> avança em linha reta ou diagonal uma casa");
//     break;
//   default:
//     console.log("erro");
//     break
// }

// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

// const nota = -10;
// const notaMaxima = 200;

// if (nota/notaMaxima > 1 || nota/notaMaxima < 0){
//   console.log("erro");
// } else if (nota / notaMaxima >= 0.9) {
//   console.log("A");
// } else if (nota / notaMaxima >= 0.8) {
//   console.log("B");
// } else if (nota / notaMaxima >= 0.7) {
//   console.log("C");
// } else if (nota / notaMaxima >= 0.6) {
//   console.log("D");
// } else if (nota / notaMaxima >= 0.5) {
//   console.log("E");
// } else if (nota / notaMaxima < 0.5) {
//   console.log("F");
// }

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
// Bonus: use somente um if.

const a = 3;
const b = 4;
const c = 9;

if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
  console.log(true);
} else {
  console.log(false);
}
