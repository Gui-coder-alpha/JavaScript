var agora = new Date()
var hora = agora.getHours()
console.log('Tenha um')
    if (hora <= 11) {
        console.log('Bom dia')
    } else {
        if (hora <= 18) { 
            console.log('Boa tarde')
        } else {
            console.log('boa noite')
        }
    }