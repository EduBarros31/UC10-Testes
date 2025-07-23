// isEmpty(valor)
// Verifica se o valor é considerado "vazio".

// Entrada: "" → true
// Entrada: [] → true
// Entrada: null → true
// (Tipo de retorno: boolean)

function isEmpty(valor){
    if(valor){
        return true
    }

    // return (
    //     valor === "" ||
    //     valor === null ||
    //     valor === undefined ||
    //     (Array.isArray(valor) && valor.length === 0)
    // );
}

module.exports = isEmpty;