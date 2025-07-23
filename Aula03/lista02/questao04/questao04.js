function mensagemDeBoasVindas(nome) {
   if(!nome || typeof nome !== 'string')
       throw new Error('Erro ao exibir mensagem.')


   return `Olá, ${nome}! Seja bem-vindo(a)`
}

module.exports = mensagemDeBoasVindas;