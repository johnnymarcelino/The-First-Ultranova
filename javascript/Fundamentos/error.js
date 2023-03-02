function tratarErrorELanca(erro) {
    // throw new Error ("...")
    // throw 10
    // throw true
    // throw "mensagem"
    
    throw {
            nome: erro.name,
            msg: erro.message,
            date: new Date
        }
    }

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.nome.toUpperCase() + '!!!')
    } catch (error) {
        tratarErrorELanca(error)
    }finally {
        console.log("Final")
    }
}

const obj = { name: 'Johnny' }
imprimirNomeGritado(obj)
