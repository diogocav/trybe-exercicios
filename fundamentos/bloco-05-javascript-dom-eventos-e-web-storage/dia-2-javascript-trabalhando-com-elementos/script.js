// Acesse o elemento elementoOndeVoceEsta.

const ond = document.querySelector('#elementoOndeVoceEsta');
console.log(ond);

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

const pai = ond.parentElement;
console.log(pai);
pai.style.color = 'red';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

const primFilhoDoFilho = ond.firstElementChild;
console.log(primFilhoDoFilho);
primFilhoDoFilho.innerText = 'Texto adicionado.';

// Acesse o primeiroFilho a partir de pai.

const primFilho = document.querySelector('#pai').firstElementChild;
console.log(primFilho);

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.

const primFilho2 = document.querySelector('#elementoOndeVoceEsta').previousElementSibling;
console.log(primFilho2);

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

const atencao = ond.nextSibling;
console.log(atencao);

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

const tercFilho = ond.nextElementSibling;
console.log(tercFilho);

// Agora acesse o terceiroFilho a partir de pai.

console.log(document.querySelector('#pai').children[2]);

// Crie um irmão para elementoOndeVoceEsta.

const irm = document.createElement('section');
irm.innerText = 'irmao criado'
document.querySelector('#pai').appendChild(irm)

// Crie um filho para elementoOndeVoceEsta.

const irm2 = document.createElement('section');
ond.appendChild(irm2)
console.log(irm2);

// Crie um filho para primeiroFilhoDoFilho.

const irm3 = document.createElement('section');
document.querySelector('#primeiroFilhoDoFilho').appendChild(irm3)
console.log(irm3)

// A partir desse filho criado, acesse terceiroFilho.

// document.querySelector('#primeiroFilhoDoFilho section').parentElement.parentElement.nextElementSibling
console.log(document.querySelector('#primeiroFilhoDoFilho section').parentElement.parentElement.nextElementSibling)

// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.

// document.getElementById('primeiroFilho').remove()
// document.getElementById('segundoEUltimoFilhoDoFilho').remove()
// document.getElementById('terceiroFilho').remove()
// document.getElementById('quartoEUltimoFilho').remove()
// document.querySelector('#primeiroFilho').remove()
document.getElementById('pai').removeChild(document.getElementById('pai').firstElementChild)