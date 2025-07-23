const notaAluno = require('../modules/nota');

describe('Teste da função notaAluno', () => { 
    test('Verifica se a nota necessária é calculada corretamente', () => {
        expect(notaAluno(5, 6, 7)).toBe('Precisa tirar 6 na última prova para passar.');
    });

    test('Verifica se a nota necessária é impossível', () => {
        expect(notaAluno(9, 9, 9)).toBe('Impossível passar. Nota necessária: -11');
    });

    test('Verifica se já está aprovado', () => {
        expect(notaAluno(10, 10, 10)).toBe('Já está aprovado! Pode tirar qualquer nota.');
    });

    test('Verifica a média com quatro notas', () => {
        expect(notaAluno(5, 6, 7, 8)).toBe('Média: 6.5 - Reprovado');
        expect(notaAluno(8, 9, 10, 10)).toBe('Média: 9.25 - Aprovado');
    });

    test('Verifica erro com notas negativas', () => {
        expect(notaAluno(-1, -2, -3)).toBe('Erro: o valor deve ser positivo ou igual a zero');
    });
});
