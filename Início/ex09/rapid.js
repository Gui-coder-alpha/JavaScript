function calcular() {
    var kmh = window.document.getElementById('km')
    var res = window.document.getElementById('resu')
    var vel = Number(kmh.value)
    res.innerHTML = `Se sua velocidade foi de ${vel} Km/h,`
    if (vel > 120) {
        res.innerHTML += ' <p>Você foi multado.</p>'
    } else {
        res.innerHTML += ' <p>Você não foi multado.</p>'
    }
    res.innerHTML += '<p>Dirija com cuidado</p>'
}



















/*if (km > 100)  {
    console.log(`Você foi multado por andar a ${km}!`)
} else {
    console.log(`Você não foi multado por andar a ${km}!`)
}*/