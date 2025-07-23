// 5. calculaDesconto(valor, percentual)
// Calcula o valor final com desconto aplicado.
// Entrada: 100, 10
// Saída esperada: 90 (tipo: number)
// O valor final deve ser menor que o valor original

const calculaDesconto = require('./questao05');

describe('Testes para validar a função calculaDesconto', ()=>{
    describe('Testes para validar a função calculaDesconto', ()=>{
        test('Testar se calcula corretamente o desconto', ()=>{
            expect(calculaDesconto(100,10)).toBe(90.00);
            expect(calculaDesconto(100,10)).toBeLessThan(100);
        });
        test('Testar se exibe mensagem de erro ao não passar parametros', ()=>{
            expect(()=>calculaDesconto()).toThrow('Não é possivel realizar o calculo de desconto.');
        });
        test('Testar se exibe mensagem de erro ao passar parametros negativos', ()=>{
            expect(()=>calculaDesconto(-100,-10)).toThrow('Não é possivel realizar o calculo de desconto.');
        });
        test('Testar se exibe mensagem de erro ao passar parametros de texto', ()=>{
            expect(()=>calculaDesconto('-100','-10')).toThrow('Não é possivel realizar o calculo de desconto.');
        });
        test('Testar se exibe mensagem de erro ao passar parametros de texto e número', ()=>{
            expect(()=>calculaDesconto('-100',-10)).toThrow('Não é possivel realizar o calculo de desconto.');
        });

})

})