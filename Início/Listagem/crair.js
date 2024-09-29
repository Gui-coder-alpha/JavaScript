let escreva = document.getElementById('acao')
let string = ''
let resultado = document.querySelector('.lista')

function criar() {
    string = escreva.value
    console.log(string)

    let clone = document.createElement('div')  //div da lista
    clone.setAttribute('class', 'lista')
    document.body.querySelector('.yes').appendChild(clone) 


    let botao1 = document.createElement('button') //botão de confirmar atividade
    botao1.setAttribute('id', 'confirmado')
    clone.appendChild(botao1)
    botao1.addEventListener('click', realizado)
    function realizado() {
        if (botao1.style.backgroundColor === "rgb(106, 219, 105)") {
            botao1.style.backgroundColor = "white";
        } else {
            botao1.style.backgroundColor = "rgb(106, 219, 105)";
        }
    }     //'rgb(105, 219, 105)'


    let letrap = document.createElement('p') //letras da lista
    letrap.setAttribute('id', 'testa')
    clone.appendChild(letrap) //letras
    letrap.innerHTML = string

    let botao2 = document.createElement('button') //Botão de excluir a atividade
    botao2.setAttribute('id', 'excluido') //atribui id ou classe, juntamente com o nome
    clone.appendChild(botao2)
    botao2.addEventListener('click', excluir)
    function excluir() {
        clone.remove()
    }
}

