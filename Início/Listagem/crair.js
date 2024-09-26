let escreva = document.getElementById('acao')
let string = ''
let resultado = document.querySelector('.lista')

function criar() {
    string = escreva.value
    console.log(string)

    let clone = document.createElement('div')  //div da lista
    clone.setAttribute('class', 'lista')
    document.body.querySelector('.yes').appendChild(clone) 


    let botao1 = document.createElement('button')
    botao1.setAttribute('id', 'confirmado')
    clone.appendChild(botao1)


    let letrap = document.createElement('p') //letras da lista
    letrap.setAttribute('id', 'testa')
    clone.appendChild(letrap) //letras
    letrap.innerHTML = string

    let botao2 = document.createElement('button')
    botao2.setAttribute('id', 'excluido')
    clone.appendChild(botao2)

}