let num = document.getElementById('numero')
let list = document.getElementById('lista')
let res = document.getElementById('resultado')
let valores = []

function colocar() {
    if (Number(num.value) > 0 && Number(num.value) <= 100) {
        valores.push(Number(num))
        list.textContent = `${valores}`
    } else {
        window.alert('Coloque número válido')
    }
}