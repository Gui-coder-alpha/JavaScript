let valores = [8, 9 ,7 , 5 , 4 ]

for (let pos=0 ; pos < valores.length ; pos++) {
    console.log(`A posição ${pos} tem valor atribuído a ${valores[pos]}`)
}  //Tradicional

for (let pos in valores ) {
    console.log(`A posição ${pos} tem valor atribuído a ${valores[pos]}`)  //simplificado, só funciona para arrays
}

let pos = valores.indexOf(4)
console.log(`O valor está ${pos}`)

//num.indexOf(7) ele vai procurar onde está o valor 7, porcurando a chave e não o valor.