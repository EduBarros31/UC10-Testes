const isEmpty = require('./questao06')

describe('Testes para a funcao isEmpty', () => {
    test('Testar se retorna true para uma entrada ""', ()=>{
        expect(isEmpty("").toBeTruthy())
    })
    test('Testar se retorna true para a entrada []', ()=>{
        expect(isEmpty([])).toBeTruthy();
    });
    test('Testar se retorna true para a entrada null', ()=>{
        expect(isEmpty(null)).toBeTruthy();
    });
    test('Testar se retorna false para nenhuma entrada', ()=>{
        expect(isEmpty()).toBeFalsy();
    });
    test('Testar se retorna false para uma entrada não vazia', ()=>{
        expect(isEmpty("null")).toBeFalsy();
    });
})