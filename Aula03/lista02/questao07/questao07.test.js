const validaEmail = require('./questao07');

describe('Testes para validar a funcao Email', () => {
    test('Testar se retorna true para um email válido', () => {
        expect(validaEmail('edubarros@gmail.com'))