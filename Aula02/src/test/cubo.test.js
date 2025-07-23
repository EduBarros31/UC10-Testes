const volumeCubo = require('../modules/cubo'); // Importa o módulo que contém a função volumeCubo

describe('teste o volume do cubo', () => {
    test('verificar o volume do cubo', () => {
    expect(volumeCubo(3)).toBe(27);
})
    test('Calcula o volume corretamente para valores inteiros e reais', () => {
        expect(volumeCubo(2)).toBe(8);
        expect(volumeCubo(2.5)).toBe(15.625);
    }
    );

});