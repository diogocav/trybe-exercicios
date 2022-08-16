const handlePokemonSearch = require('./index.js');
const getPokemonDetails = require('./index.js');

// const uppercase = (str, callback) => {
//   setTimeout(() => {
//     callback(str.toUpperCase());
//   }, 500);
// };

// //   7 - Escreva um teste que verifique a chamada da callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

// it('verifique a chamada da callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas', (done) => {
//   uppercase('teste', (foi) => {
//     try {
//       expect(foi).toEqual('TESTE');
//       done();
//     } catch (erro) {
//       done(erro);
//     }
//   });
// });

// Verifique se a importação do arquivo correto está sendo feita.
// const { getPokemonDetails } = require('./get-pokemon-details');

// describe('A função getPokemonDetails', () => {
//   it('retorna erro quando procuramos um pokémon que não existe no banco de dados', async () => {
//     console.log(typeof getPokemonDetails);
//     try {
//       await getPokemonDetails('teste', handlePokemonSearch);
//     } catch (e) {
//       expect(e).toEqual(new Error('Não temos esse pokémon para você :('));
//     }
//   });

//   it('retorna um pokémon que existe no banco de dados', async () => {
//     const actual = await getPokemonDetails('Bulbasaur', handlePokemonSearch);
//     try {
//       await expect(actual).toEqual(
//         'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grama e a habilidade principal dele é Raio Solar'
//       );
//       done();
//     } catch (e) {}
//   });
// });

// 9 - A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. Crie um novo arquivo .test.js ou .spec.js e copie o código abaixo. Complete os testes para a função getPokemonDetails de acordo com as especificações.
// OBS: Lembre-se de exportar o arquivo do exercício 08 para que possamos utilizá-lo em nossos testes.


// 10 - Para este exercício, tente adivinhar a saída dos console.log dos testes abaixo sem executá-los, e veja se compreendeu bem o funcionamento do beforeEach e do afterEach.
// Copiar

beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

//1 - beforeEach
// 1 - test
// 1 - afterEach
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach
