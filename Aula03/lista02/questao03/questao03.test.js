// 3. ehPrimo(n)
// Retorna true se o número for primo.

// Entrada: 7 → true (tipo: boolean)
// Entrada: 9 → false (tipo: boolean)

const ehPrimo = require('./questao03');

describe('Testes para validar a função ehPrimo', () =>{
    test('Testar se retornar corretamente true para um número primo', () =>{
        expect(ehPrimo(7)).toBeTruthy();
    });
    test('Testar se retornar corretamente false para um que não é primo', () =>{
        expect(ehPrimo(8)).toBeFalsy();
        expect(ehPrimo(1)).toBeFalsy();
    });
    test('Testar se a função retorna erro quando nenhum dado é passado como parametro', ()=>{
        expect(() => ehPrimo()).toThrow('Falta Parametro');
    });

    test('Testar se a função retorna erro quando o dado é passado no formato incorreto', ()=>{
        expect(() => ehPrimo(-7)).toThrow('Não é possível verificar se o valor é primo.');
        expect(() => ehPrimo('sete')).toThrow('Não é possível verificar se o valor é primo.');
        expect(() => ehPrimo([7])).toThrow('Não é possível verificar se o valor é primo.');
    });

});
