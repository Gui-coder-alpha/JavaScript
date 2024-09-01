function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('data')
    var res = document.getElementById('resultado')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Erro, alguma coisa de errado')
    } else {
        var genero = document.getElementsByName('genero')
        var idade = ano - Number(fano.value)
        var sexo = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'imagem')
        if (genero[0].checked){
            sexo = 'Homem'
            if (idade >=0 && idade <10) {
                //crianca
                img.setAttribute('src', 'bebe mach.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'adol home.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto masc.jpg')
            } else {
                //velho
                img.setAttribute('src', 'velho homem.jpg')
            }
        } else if (genero[1].checked) {
            sexo = 'Mulher'
            if (idade >=0 && idade <10) {
                //crianca
                img.setAttribute('src', 'bebe femea.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'adol mulher.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto mulher.jpg')
            } else {
                //velho
                img.setAttribute('src', 'velho mulher.jpg')
            }
        }
        res.innerHTML = `É um ${sexo}! E tem ${idade} anos`
        res.appendChild(img)
    }
}