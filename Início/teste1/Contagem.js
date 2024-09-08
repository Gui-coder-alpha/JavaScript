function result() {
    let num1 = document.getElementById('valor1')
    let num2 = document.getElementById('valor2')
    let enviu = document.getElementById('resultado')
    let rnum1 = Number(num1.value)
    let rnum2 = Number(num2.value)
    let res = rnum1 * rnum2
    enviu.innerHTML = `O valor é ${res}`
}
