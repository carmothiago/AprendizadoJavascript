// closure é o escopo criado quando a função foi declarada
// esse escopo permite a função acessar e manipular as variáveis externas a função


const x = 'Global'

function fora (){
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao)