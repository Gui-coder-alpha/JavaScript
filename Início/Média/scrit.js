let num = document.getElementById('numero')
let list = document.getElementById('lista')
let valores = []
let res = document.getElementById('resultado')

function colocar() {
    if (num.value > 0 && num.value <= 100) {
        valores.push(Number(num.value))    //Funcionando agora

        let tab = document.createElement('option') //Cria um elemento no select, chamado de option
        tab.text = `Valor ${Number(num.value)}`     //Aplicando os valores, do array e um pequeno texto
        list.appendChild(tab)               // Cria um filho, sendo o option, o pai é o select, chamado de list, ou lista
        console.log(valores)        //Teste para verificar se está armazenando todos os valores necessário
    } else {
        window.alert('[Error]Coloque número válido[Error]')   //Não cumpriu nenhuma característica, erro.
    }
}

function fazer() {
    console.log(valores.length)
    let texto = document.createElement('p')
    texto.innerHTML = `Você digitou ${valores.length} números, o maior foi ${valores}`
    res.appendChild(texto)
    for (contador = '' ; valores )

}





/*let item = document.createElement('option')
item.text = `${n} x ${c} = ${n*c}`
item.value =   `tab${c}`
tab.appendChild(item)*/