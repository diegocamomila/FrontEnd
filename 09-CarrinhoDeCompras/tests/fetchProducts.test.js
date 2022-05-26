require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';

describe('1 - Teste a função fecthProducts', () => {
  it('verificar se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function'); // https://www.devmedia.com.br/teste-unitario-com-jest/41234
  });//https://app.betrybe.com/course/fundamentals/introducao-a-javascript-es6-e-testes-unitarios/primeiros-passos-em-jest/eb321d06-e126-4c84-8d7e-6134973bf081/conteudos/5a3f4780-9606-4659-b2b3-184ae28489ec/expect-e-matchers/996d7741-8380-4010-aa3a-23a6afbc5d5a?use_case=side_bar

  it(' a função fetchProducts com o argumento "computador" e teste se fetch foi chamada;', () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalled(); // https://jestjs.io/pt-BR/docs/expect
  });

  it('verificar se, ao chamar a função fetchProducts com o argumento "computador", utiliza o endpoint co o argumento "computador"', () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(url); // https://jestjs.io/pt-BR/docs/expect
  });

  it('verificar se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch',
  async () => {
    const actual = await fetchProducts('computador');
    expect(actual).toEqual(computadorSearch.results);// // pp.betrybe.com/course/fundamentals/introducao-a-javascript-es6-e-testes-unitarios/primeiros-passos-em-jest/eb321d06-e126-4c84-8d7e-6134973bf081/conteudos/5a3f4780-9606-4659-b2b3-184ae28489ec/expect-e-matchers/996d7741-8380-4010-aa3a-23a6afbc5d5a?use_case=side_bar
  });

  it('testa se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url', 
  async () => {
    const actual = await fetchProducts();
    expect(actual).toEqual(new Error('You must provide an url'));
  });

});
