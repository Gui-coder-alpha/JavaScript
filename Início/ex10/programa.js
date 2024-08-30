var idade = 28
if (idade < 16) {
    console.log('Você é menor de idade e não pode votar')
} else {
    if (idade >=16 && idade < 18  || idade >= 67) {
        console.log('Voto opcional')
    } else {
        console.log('Seu voto é obrigatório')
    }
}