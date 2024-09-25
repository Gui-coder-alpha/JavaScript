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
    let maior = Math.max(...valores)  //Coloque isto antes de qualquer coisa, vai por mim.
    console.log(maior)

    let menor = Math.min(...valores)
    console.log(menor)

    console.log(valores.length) 
    texto.innerHTML = `Você digitou ${valores.length} números, o maior foi ${maior} e o menor foi ${menor}.`
    let texto = document.createElement('p') // pra baixo criação
    res.appendChild(texto)

}



/* var aux = vetor.filter(function(elemento, i) {
    if(vetor.indexOf(elemento) !== i) {
        repeated.push(elemento)
    }
    return vetor.indexOf(elemento) == i;
})*/


/*let item = document.createElement('option')
item.text = `${n} x ${c} = ${n*c}`
item.value =   `tab${c}`
tab.appendChild(item)*/