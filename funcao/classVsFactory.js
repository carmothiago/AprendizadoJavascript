class Pessoa {
    contructor (nome){
        this.nome = nome 
    }
    
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

//use sempre esse, pois tem ciência do escopo léxico onde ele está
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Jão')
p2.falar()