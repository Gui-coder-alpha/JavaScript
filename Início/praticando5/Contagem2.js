let num = document.getElementById('numero')
let add = document.getElementById('adicionar')
let lista = document.getElementById('lista')
let res = document.getElementById('resultado')
let valores = []
let fim = document.getElementById('final')

function coloque() {
    inum = Number(num.value)
    valores.push(inum)
    lista.innerHTML(`aqui ${valores}`)
}