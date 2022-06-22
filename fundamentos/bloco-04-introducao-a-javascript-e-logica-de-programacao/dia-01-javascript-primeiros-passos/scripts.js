// Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada', 'lista' ou 'reprovada';

let estado = "oi";

// Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada', 'lista' ou 'reprovada'. Como default, imprima a mensagem de 'não se aplica'.

switch (estado) {
  case "aprovada":
    console.log(estado);
    break;
  case "lista":
    console.log(estado);
    break;
  case "reprovada":
    console.log(estado);
    break;
  default:
    console.log("não se aplica");
}
