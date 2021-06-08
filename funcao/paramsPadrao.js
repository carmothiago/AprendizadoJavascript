// Estratégia de gerar valor padrão
function soma1 (a, b, c){
    a = a || 1 
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

// estratégia 2, 3 e 4 de gerar valor padrão

function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments
    c =  isNaN(c) ? 1 : c//a mais segura
}
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//valor padrão do es2015
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))