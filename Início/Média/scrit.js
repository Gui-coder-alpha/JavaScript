let num = document.getElementById('numero')
let list = document.getElementById('lista')
let res = document.getElementById('resultado')
let valores = []

function colocar() {
    if (num > 0 && num < 100) {
        valores.push(Number(num.value))
        let item = list
        item.text = `Valor ${valores}`
    } else {
        window.alert('Coloque número válido')
    }
}