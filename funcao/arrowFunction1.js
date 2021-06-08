let dobro = function(a) {
    return 2* a 
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return está implícito
console.log(dobro(math.PI))

let ola = function (){
    return 'Olá'
}

ola = () => 'olá'
ola = _ => 'olá'//Possui parâmetro
console.log(ola())