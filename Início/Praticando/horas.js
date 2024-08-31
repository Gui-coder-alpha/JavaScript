function carregar() {
    var mensagem = window.document.getElementById('texto')
    var image1 = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML= `Agora são ${hora} horas!`

    if (hora >= 0 && hora < 12) {
        image1.src = 'imagem manhã.jpg'
        document.body.style.background = 'rgb(241, 241, 124)'
    } else if (hora >= 12 && hora < 18) {
        image1.src = 'Tarde.jpg'
        document.body.style.background = 'rgb(230, 180, 105)'
    } else {
        image1.src = 'Noite.jpg'
        document.body.style.background = 'rgb(74, 63, 134)'
    }
}
