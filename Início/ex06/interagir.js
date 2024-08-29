var a = window.document.getElementById('area') //colocado aqui para economizr espaço

a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', saiu)


function clicar() {
    a.innerText = 'Clicou!'
    a.style.background = 'black'
}

function entrar() {
    a.innerText = 'Entrou'
}

function saiu() {
    a.innerText = 'Saiu'
    a.style.background = 'rgb(150, 194, 136)'
}