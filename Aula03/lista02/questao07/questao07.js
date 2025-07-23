// 7. validaEmail(email)

// Verifica se o email está no formato texto@dominio.com.
// Entrada: 'joel@email.com'
// Saída esperada: true (tipo: boolean)
// Deve seguir padrão de email (regex simples)

function validaEmail(email) {
    if (!email || typeof email !== 'string'){
        throw new Error("Nao e possivel validar o email");

        const regex = 
        return regex.test(email)
    }
   
}