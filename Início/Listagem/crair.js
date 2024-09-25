let escreva = document.getElementById('acao')
let string = ''
let resultado = document.querySelector('.lista')

function criar() {
    let coisas = document.getElementById('palavra')
    string = escreva.value
    console.log(string)

    /*let sim = document.createElement('p')
    resultado.appendChild(sim)*/
    
    coisas = document.createElement('p')
    string.appendChild(coisas)

    let clone = resultado.cloneNode(true)
    document.body.querySelector('.yes').appendChild(clone)


}