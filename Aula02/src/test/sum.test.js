const sum = require('../modules/sum');//importacao do arquivo/modulo




describe('testes basicos da funcao soma', () => {
    test('verficar se a soma do numeros positivos', () => {
        expect(sum(8, 8)).toBe(16)
    });

    test('verificar a soma do numeros negativos', () => {
        expect(sum(-8, -8)).toBe(0)
    })
    test('verificar a soma de numeros e letras', () => {
        expect(sum(8, "a")).toBe("Erro:Erro nao e possivel realizar")
    })
    

});


