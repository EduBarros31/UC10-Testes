function ehPrimo(num){
 if(!num){
    throw new Error('Falta Parametro')

 }
 if(!Number.isInteger(num) || num<=0){
    throw new Error('Não é possível verificar se o valor é primo.');
 }



    let cont =0;
    for (let i = 2; i <= num; i++) {
        if (num %i===0) {
            cont++;
        }
    }
    if(cont===1){
        return true
    }
    return false
}

module.exports = ehPrimo;