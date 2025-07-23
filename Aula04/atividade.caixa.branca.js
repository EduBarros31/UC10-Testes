// ###Atividade Caixa Branca



function validaSenha(senha) {
    if (typeof senha !== 'string') return false;
    if (senha.length < 8) return false;
    if (!/[A-Za-z]/.test(senha)) return false;
    if (!/[0-9]/.test(senha)) return false;
    if (/\s/.test(senha)) return false;
    return true;
   }