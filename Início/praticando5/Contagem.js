let num = document.getElementById('numero')
let list = document.getElementById('lista')
let res = document.getElementById('resultado')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}



function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function coloque() {
    if (isNumero(num) && !inLista(num, valores)) {
        valores.push(Number(num))
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado`
        list.appendChild(item)
    } else {
        window.alert('Valor encontrado na lista.')
    }
} 