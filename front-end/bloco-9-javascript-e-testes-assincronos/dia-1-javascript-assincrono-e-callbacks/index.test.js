const { getPokemonDetails, handlePokemonSearch } = require('./index');

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

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokémon que não existe no banco de dados', (done) => {
    // Escreva aqui seu código
    const actual = getPokemonDetails('teste', handlePokemonSearch);
    expect(() => actual).toThrown();
    done()
  });

  it('retorna um pokémon que existe no banco de dados', (done) => {
    // Escreva aqui seu código
    // getPokemonDetails('teste', handlePokemonSearch => {
    //     try {
    //         expect(handlePokemonSearch).toEqual()
    //     } catch(erro) {
    //         done(erro)
    //     }
    // })
  });
});

// 9 - A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. Crie um novo arquivo .test.js ou .spec.js e copie o código abaixo. Complete os testes para a função getPokemonDetails de acordo com as especificações.
// OBS: Lembre-se de exportar o arquivo do exercício 08 para que possamos utilizá-lo em nossos testes.
