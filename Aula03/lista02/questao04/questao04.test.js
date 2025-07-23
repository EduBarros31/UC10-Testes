// Retorna a string "Olá, {nome}! Seja bem-vindo(a)".
// Entrada: "Maria"
// Saída esperada: string contendo "Maria" (tipo: string)
// Deve conter também a palavra "Olá"


const mensagemDeBoasVindas = require('./questao04');

describe("Testes para a função mensagemBoasVindas", () => {
    test("Testar se retorna a mensagem corretamente", () => {
        expect(mensagemDeBoasVindas("Maria")).toBe("Olá, Maria! Seja bem-vindo(a)");
    })
    test("Testar se exibe corretamente a mensagem de Boas-Vindas'", () => {
       expect(mensagemDeBoasVindas('Edu')).toContain('Edu');
       expect(mensagemDeBoasVindas('Edu')).toMatch(/Olá/);
       
})
test('Testar se retorna uma mensagem de erro em relação a parametros incorretos', () =>{
    expect(() => mensagemDeBoasVindas()).toThrow('Erro ao exibir mensagem.');
    expect(() => mensagemDeBoasVindas(1)).toThrow('Erro ao exibir mensagem.');
    expect(() => mensagemDeBoasVindas([])).toThrow('Erro ao exibir mensagem.');
    expect(() => mensagemDeBoasVindas({nome: "Edu"})).toThrow('Erro ao exibir mensagem.');
})
})

module.exports = mensagemDeBoasVindas;