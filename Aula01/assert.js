
//validador
function assertEquals(actual, expected, message = ''){
    if(actual !== expected) {
        console.error(` ❌ falhou: ${message} Expected ${expected}, but got ${actual}`);
        return 
    }
    console.log(` ✅ passou: ${message}`);
}




 function palavra(string){
    return string.split('').reverse('').join('');
    
 }

 assertEquals(palavra('carro'),'orrac', "A palavra 'carro' deve ser revertida para 'orrac' ");
 console.log('carro revertido');





// function soma(a, b){
// return a+b
// }


// assertEquals(soma(2, 2),4, 'Soma de 2 + 2');
// assertEquals(soma(3, 5),8, 'Soma de 3 + 5');
// assertEquals(soma(2, 2),30, 'Soma de 10 + 20');
// console.log('Teste de soma concluído!');


// function multiplicar(a, b){
//     return a*b;
// }
// assertEquals(multiplicar(2, 2),4, 'Multiplicação de 2 * 2');
// console.log('Teste de multiplicação concluído!');

// function numeroPar(numero) {
//     return numero % 2 === 0;
// }

// assertEquals(numeroPar(2), true, '2 é par');
// assertEquals(numeroPar(3), true, '3 não é par');
// console.log('Teste de número par concluído!');
